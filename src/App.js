import React, { Component } from 'react';
import mapHelper from './Utilities/helper'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {
    mapHelper.genScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBglNEQSJfyWYuoGeyTCS5IyCoawoPMR0s&v=3&callback=initMap');
  }

  render() {
    return (
      <main className='App'>

        {/* Element for map */}
        <div id="map">
        </div>

      </main>
    )
  }
}
