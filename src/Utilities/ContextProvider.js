import React, { Component } from 'react'
import myContext from './Context'
import escapeRegExp from 'escape-string-regexp'

export default class ContextProvider extends Component {
    constructor(props) {
        super()

        this.state = {
            query: ''
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
