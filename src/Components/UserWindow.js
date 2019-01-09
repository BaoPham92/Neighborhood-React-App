import React, { Component } from 'react'
import { DebounceInput } from 'react-debounce-input'

// Component
import ResultsWindow from './ResultsWindow'

export default class UserWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="user-window">

                <div className="search-box">

                    <DebounceInput
                        type="text"
                        placeholder="Search Places"
                        minLength={2}
                        debounceTimeout={225}
                    />

                    <ResultsWindow {...this.props}/>
                
                </div>

            </div>
        )
    }
}
