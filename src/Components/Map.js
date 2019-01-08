import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { compose, withProps, withStateHandlers } from 'recompose'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        center={props.center}>

        {/* Conditional for Marker rendering */}
        {props.markers &&
            props.markers.map((marker, key) => (
                <Marker
                    key={key}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    title={marker.title}
                    onClick={() => props.toggleMarker(marker)}
                >

                    {marker.isActive && (
                        <InfoWindow>
                            <h1>Something</h1>
                        </InfoWindow>
                    )}
                </Marker>
            ))}
    </GoogleMap>
))

export default class Map extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div>
                < MyMapComponent
                    {...this.props}
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