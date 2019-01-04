import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'

// Components 
import UserWindow from './Components/UserWindow.js'
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
                {propData => 
                <div>
                <Map {...propData} /> 

                <UserWindow {...propData} />
                </div>
                }
              </myContext.Consumer>
          )}/>

        </ContextProvider>
      </main>
    )
  }
}