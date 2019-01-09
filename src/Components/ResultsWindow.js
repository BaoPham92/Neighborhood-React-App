import React, { Component } from 'react'

export default class ResultsWindow extends Component {

    render() {
        console.log(this.props)
        return (
            <ul className="Results-Window">
                {this.props.venues && this.props.venues.map((index, key) => (
                    
                    <li 
                    key={key} 
                    className="Results-List"
                    onClick={() => {
                        this.props.listItemToggle(index.venue)
                    }}>
                        {index.name}
                    </li>

                ))}
            </ul>
        )
    }
}