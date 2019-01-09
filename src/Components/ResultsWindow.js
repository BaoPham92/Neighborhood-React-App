import React, { Component } from 'react'

export default class ResultsWindow extends Component {

    render() {
        return (
            <ul className="Results-Window">
                {this.props.venues && this.props.venues.map((index, key) => (
                    
                    <li 
                    key={key} 
                    className="Results-List">
                        {index.venue.name}
                    </li>

                ))}
            </ul>
        )
    }
}