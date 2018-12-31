import React, { Component } from 'react'
import mapHelper from './Utilities/helper'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      places: []
    }
  }

  // Configuration and calls for API from foursqaure.
  getPlaces = async () => {
    try {
      let params = {
        client_id: '4UATXVRF0X3ABP1LJFJ0BVAZMC4V2I3Q53CVGJFN4Z0Z0NJV',
        client_secret: 'LDAMUDHRRP3S0L43N03EXJWFZLUNXH50DOZZALE5ASA3DVNJ',
        v: '20180323',
        near: `New York City, NY`,
        query: 'coffee',
        limit: 15,
        radius: 200
      }

      // axios API call for returning information based on criterias from (params) variable above.
      let endPoint = await 'https://api.foursquare.com/v2/venues/explore?' + new URLSearchParams(params)

      axios.get(endPoint)
        .then((response) => {
          this.setState({
            places: response.data.response.groups[0]
          })
          console.log(response.data.response.groups[0])
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log('Error running getVenu!' + error)
    }
  }

  async componentDidMount () {
    try {
      mapHelper.genScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBglNEQSJfyWYuoGeyTCS5IyCoawoPMR0s&v=3&callback=initMap')
      this.getPlaces()
    } catch (err) {
      throw (err)
    }
  }

  render () {
    return (
      <main className='App'>

        {/* Element for map */}
        <div id="map">
        </div>

      </main>
    )
  }
}
