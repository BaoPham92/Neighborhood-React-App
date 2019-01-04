import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'

// Components 
import Map from './Components/Map.js'

// Utility Components
import myContext from './Utilities/Context.js'
import ContextProvider from './Utilities/ContextProvider'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <main className='App'>
        <ContextProvider>

          <Route exact path={'/'}
            render={() => (
              <myContext.Consumer>
                { propData => <Map {...propData} /> }
              </myContext.Consumer>
          )}/>

        </ContextProvider>
      </main>
    )
  }
}
