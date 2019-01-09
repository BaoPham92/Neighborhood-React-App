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

        const venue = this.state.venues.find(index => index.id === marker.id)

        // Difference of details merged. 
        // From Udacity students on slack call for helping with this.
        MapAPI.idDetails(marker.id)
          .then(res => {
            const newVenue = Object.assign((venue, res.data.response.venue))
            this.setState({ venues: Object.assign(this.state.venues, newVenue) })
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
    MapAPI.getVenues()
      .then((results) => {
        const center = results.data.response.geocode.center
        const venues = results.data.response.groups[0].items.map((index) => {
          return index.venue
        })
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
        console.log(results, center, venues, markers)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <main className='App'>
        <UserWindow {...this.state} />
        <Map {...this.state} />
      </main>
    )
  }
}
