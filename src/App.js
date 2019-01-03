import React, { Component } from 'react'
import './App.css'

import UserWindow from './Components/UserWindow.js'
import Map from './Components/Map.js'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <main className='App'>

        <UserWindow props={this.state}/>
        <Map />

      </main>
    )
  }
}