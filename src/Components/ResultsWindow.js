import React, { Component } from 'react'

export default class ResultsWindow extends Component {

    render() {
        // console.log(this.props)
        return (
            <ul className="Results-Window">
            {/* To toggle infowindow onClick and list markers */}
                {this.props.venues && this.props.venues.map((index) => (

                    <li
                        key={index.id}
                        className="Results-List"
                        onClick={() => this.props.itemToggle(index)}
                        role="list"
                        // 1 priority of input, & lowercase tabindex for regular li
                        tabindex="1"
                        >
                        {index.name}
                    </li>

                ))}
            </ul>
        )
    }
}