import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'

// Components 
import Map from './Components/Map.js'

import MapAPI from './Utilities/MapsAPI.js'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      center: [],
      venues: [],
      markers: []
    }
  }

  componentDidMount() {
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
        <Map {...this.state} />
      </main>
    )
  }
}
