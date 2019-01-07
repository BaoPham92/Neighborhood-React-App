import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// Component imports
import UserWindow from './UserWindow.js'

// 
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        center={this.props.center}
    >
        {this.props.markers && this.props.markers.map(marker, key) => (
            <Marker key={key} position={{ lat: marker.lat, lng: marker.lng }} title={{title: marker.title}} />
        )}
    </GoogleMap>
))

export default class Map extends Component {
    constructor(props) {
        super()

        this.state = {
        }

    }

    render() {
        return (
            <div>
                <UserWindow {...this.props}/>

                < MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBglNEQSJfyWYuoGeyTCS5IyCoawoPMR0s&v=3"
                    loadingElement={< div style={{ height: `100%` }} />}
                    containerElement={< div style={{ height: `400px` }} />}
                    mapElement={< div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}