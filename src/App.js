import React, { Component } from 'react'
import './App.css'

// Components
import Map from './Components/Map.js'
import UserWindow from './Components/UserWindow.js'

// Utility Component
import MapAPI from './Utilities/MapsAPI.js'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      center: [],
      venues: [],
      markers: [],
      messageState: {
        error429: `\n\n(The HTTP 429 Too Many Requests response status code indicates the user has sent too many requests in a given amount of time ("rate limiting")).\n\nCited by: developer.mozilla.org`,
        console429: `visit: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429 for more information.`
      },
      toggleMarkerOff: () => {
        const marker = this.state.markers.map(marker => {
          marker.isActive = false
          return marker
        })
        this.setState({ markers: Object.assign(this.state.markers, marker) })
      },
      toggleMarker: marker => {
        this.state.toggleMarkerOff()

        marker.isActive = true
        this.setState({ markers: Object.assign(this.state.markers, marker) })

        const venue = this.state.venues.find(veneu => veneu.id === marker.id)

        // Difference of details merged. 
        // From Udacity students on slack call for helping with this.
        MapAPI.idDetails(marker.id)
          .then(res => {
            const newVenue = Object.assign(venue, res.data.response.venue)
            this.setState({ venues: Object.assign(this.state.venues, newVenue) })
          })

        // The best, food API calls for menus.
        MapAPI.idMenu(marker.id)
          .then((res) => {
            const newVenue = Object.assign(venue, res.data.response.menu)
            this.setState({ venues: Object.assign(this.state.venues, newVenue) })
          })
          // This error handles bot API GETs as these are both in a function.
          .catch((error) => {
            alert(`${error} ${this.state.messageState.error429}`)
            console.log(`${error} ${this.state.messageState.console429}`)
          })
      },
      updateMarkers: (updatedMarkers) => {
        this.setState(updatedMarkers)
      },

      // Toggle infoWindow for items.
      itemToggle: venue => {
        const marker = this.state.markers.find(marker => marker.id === venue.id)
        console.log(venue, marker, this.state.markers)

        this.state.toggleMarker(marker)
      }
    }
  }

  componentDidMount() {
    // Axios API call for FourSquare API.
    MapAPI.getVenues('washington', 'coffee')
      .then((results) => {
        const center = results.data.response.geocode.feature.geometry.center
        const venues = results.data.response.venues
        const markers = venues.map((index) => {
          return {
            lat: index.location.lat,
            lng: index.location.lng,
            title: index.name,
            id: index.id,
            isActive: false,
            isShowing: true
          }
        })
        this.setState({ center, venues, markers })
        console.log(results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <main
        className='App'
        role="main">
        <UserWindow {...this.state} />
        <Map {...this.state} />
      </main>
    )
  }
}
