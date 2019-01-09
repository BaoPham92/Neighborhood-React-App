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
      toggleMarker: marker => {

        marker.isActive = true
        this.setState({ markers: Object.assign(this.state.markers, marker) })

        return this.state.markers.map((index) => {
          index.isActive = false
          return index
        })
      },
      
      updateMarkers: (updatedMarkers) => {
        this.setState(updatedMarkers)
      }
    }
  }

  componentDidMount() {
    // Axios API call for FourSquare API.
    MapAPI.getVenues()
      .then((results) => {
        const center = results.data.response.geocode.center
        const venues = results.data.response.groups[0].items
        const markers = venues.map((index) => {
          return {
            lat: index.venue.location.lat,
            lng: index.venue.location.lng,
            title: index.venue.name
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
