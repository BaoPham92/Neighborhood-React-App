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
            markerFinder: (e) => {
                this.setState({ query: e.target.value })
                const reg = new RegExp(escaperegexp(this.state.query).toLocaleLowerCase().trim())

                const updated = this.props.venues.map(venue => {
                    const currentMarkers = this.props.markers.find(marker => marker.title === venue.name)
                    console.log(currentMarkers)

                    // Changed toLowerCase - https://stackoverflow.com/a/34310390/9154831
                    // Possible Todo for multiple languages when continuing project. 
                    reg.test(venue.name.toLocaleLowerCase())
                        ? currentMarkers.isShowing = true
                        : currentMarkers.isShowing = false
                })
                this.props.updateMarkers({ updated })
            },

            venueVisibility: () => {
                if (this.state.query.trim() !== '') {
                    const venues = this.props.venues.filter(venue =>
                        venue.name.toLocaleLowerCase().includes(this.state.query.toLocaleLowerCase()))
                        return venues
                }
                return this.props.venues
            }
        }
    }

    render() {
        return (
            <div className="user-window">

                <div className="search-box">

                    <DebounceInput
                        // 0 because of search / input forms should focusable
                        tabIndex="0"
                        type="text"
                        placeholder="Search Places"
                        debounceTimeout={125}
                        onChange={this.state.markerFinder}
                        value={this.state.query}
                    />

                    <ResultsWindow {...this.props} venues={this.state.venueVisibility()}/>

                </div>

            </div>
        )
    }
}
