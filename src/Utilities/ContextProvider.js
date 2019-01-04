import React, { Component } from 'react'
import myContext from './Context'

export default class ContextProvider extends Component {
    constructor(props) {
        super()

        this.state = {
        }
    }

    render() {
        return (
            <myContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}
