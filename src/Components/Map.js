import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// Component imports
import UserWindow from './UserWindow.js'

// 
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
))

export default class Map extends Component {
    constructor(props) {
        super()

        this.state = {
        }

    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <UserWindow {...this.props}/>

                < MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBglNEQSJfyWYuoGeyTCS5IyCoawoPMR0s&v"
                    loadingElement={< div style={{ height: `100%` }} />}
                    containerElement={< div style={{ height: `400px` }} />}
                    mapElement={< div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}