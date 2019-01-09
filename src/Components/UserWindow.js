import React, { Component } from 'react'
import { DebounceInput } from 'react-debounce-input'

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
                
                </div>

                <div className="results-window">

                </div>

            </div>
        )
    }
}
