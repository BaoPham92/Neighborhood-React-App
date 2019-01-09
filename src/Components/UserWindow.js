import React, { Component } from 'react'
import { DebounceInput } from 'react-debounce-input'
import escaperegexp from 'escape-string-regexp'

// Component
import ResultsWindow from './ResultsWindow'

export default class UserWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            prevMarkers: []
        }
    }
    markerFinder = (e) => {
        const reg = new RegExp(escaperegexp(this.state.query).toLowerCase().trim())

        this.setState({ query: e.target.value })

        // If original placeholder for markers are empty, replenish.
        if (this.props.markers === undefined) {
            this.props.updateMarkers({
                markers: this.props.venues.map((index) => {
                    return {
                        lat: index.venue.location.lat,
                        lng: index.venue.location.lng,
                        title: index.venue.name
                    }
                })
            })
        }

        // Update temp placeholder container for original markers
        this.setState({ prevMarkers: this.props.markers })

        const markers = this.state.prevMarkers.map((index) => {
            if (reg.test(index.title.toLowerCase()) === true) {
                console.log(index)
                return index
            }
            // Clears the state from App.js when empty
            this.props.updateMarkers({ markers })
        })
    }

    render() {
        return (
            <div className="user-window">

                <div className="search-box">

                    <DebounceInput
                        type="text"
                        placeholder="Search Places"
                        debounceTimeout={125}
                        onChange={this.markerFinder}
                        value={this.state.query}
                    />

                    <ResultsWindow {...this.props} />

                </div>

            </div>
        )
    }
}
