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
        }
    }
    markerFinder = (e) => {
        this.setState({ query: e.target.value })
        const reg = new RegExp(escaperegexp(this.state.query).toLowerCase().trim())

        const updated = this.props.venues.map(venue => {
            const currentMarkers = this.props.markers.find(marker => marker.title === venue.name)
            console.log(currentMarkers)

            reg.test(venue.name.toLowerCase())
                ? currentMarkers.isShowing = true
                : currentMarkers.isShowing = false
        })
        this.props.updateMarkers({ updated })
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
