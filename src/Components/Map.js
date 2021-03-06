/* global google */

// https://stackoverflow.com/a/51198724/9154831
// Oddly had trouble with figuring out the answer I couldn't find at https://tomchentw.github.io/react-google-maps/

import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        center={props.center}>

        {/* Conditional for Marker rendering */}
        {props.markers &&
            props.markers
                .filter(marker => marker.isShowing)
                .map((marker) => {

                    // Infowindow info if title === marker title
                    const markerInfo = props.venues.find(index => index.id === marker.id)
                    // console.log(markerInfo)

                    return (
                        <Marker
                            tabIndex="2"
                            key={marker.id}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            title={marker.title}
                            onClick={() => props.toggleMarker(marker)}
                            defaultAnimation={google.maps.Animation.DROP}
                            animation={marker.isActive && google.maps.Animation.BOUNCE }
                        >

                            {/* InforWindow data render upon contional */}
                            {marker.isActive && (
                                <InfoWindow>
                                    <React.Fragment>

                                        {/* Information provided by https://developer.foursquare.com/ */}
                                        <section 
                                        className="info-window"
                                        role="conteninfot">

                                            <h1>{markerInfo.name}</h1>
                                            <hr></hr>

                                            <h3>Type Of Place:</h3>
                                            <p>{markerInfo.categories[0].name}</p>

                                            <h3>Location And Hours:</h3>
                                            <p>{markerInfo.location.address}</p>

                                            <h2>Something To Eat?</h2>

                                        </section>
                                    </React.Fragment>
                                </InfoWindow>
                            )}
                        </Marker>
                    )
                })}
    </GoogleMap>
))

export default class Map extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            < MyMapComponent
            {...this.props}
                role="application" aria-label="Restaurant locations"
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBglNEQSJfyWYuoGeyTCS5IyCoawoPMR0s&v=3&callback=checker"
                loadingElement={< div style={{ height: `100%` }} />}
                containerElement={< div style={{ height: `100%`, width: '100%' }} />}
                mapElement={< div style={{ height: `100%` }} />}
            />
        )
    }
}

// Since there are multiple import instances of google maps api script tags. We will set defer and async to true.
const checker = () => {
    const scripts = window.document.getElementsByTagName('script')
    for (const index of scripts) {
        index.async = true
        index.defer = true
        // console.log(index)
    }
}
window.checker = checker

// here you define your authentication failed message
window.gm_authFailure = () => {

    alert(`
    Error with authentication for Google Maps.

    Attempt to troubleshoot by:

    - Checking the API key for Google Maps.
    - Checking the API key console for any limitations.
    `)
}
