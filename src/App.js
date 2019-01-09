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
      },
      
      updateMarkers: (updatedMarkers) => {
        this.setState(updatedMarkers)
      },
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
            id: index.id
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
        <UserWindow {...this.state}/>
        <Map {...this.state} />
      </main>
    )
  }
}
