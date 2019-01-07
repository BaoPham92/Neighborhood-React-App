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
                    <p>Search Activities:</p>

                    <DebounceInput
                        type="text"
                        placeholder="Food, etc."
                        minLength={2}
                        debounceTimeout={225}
                        onChange={(e) => { this.props.queryHandler(e.target.value) }}
                        value={this.props.query}
                    />
                
                </div>

                <div className="results-window">

                </div>

            </div>
        )
    }
}
