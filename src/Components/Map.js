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
                    const markerInfo = props.venues.find(index => index.name === marker.title)
                    // console.log(markerInfo)

                    return (
                        <Marker
                            key={marker.id}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            title={marker.title}
                            onClick={() => props.toggleMarker(marker)}
                        >

                            {/* InforWindow data render upon contional */}
                            {marker.isActive && markerInfo && (
                                <InfoWindow>
                                    <React.Fragment>
                                        <section className="info-window">

                                            <h1>{markerInfo.name}</h1>
                                            <hr></hr>

                                            <h3>Type Of Place:</h3>
                                            <p>{markerInfo.categories[0].name}</p>

                                            <h3>Location And Hours:</h3>
                                            <p>{markerInfo.location.address}</p>

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
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBglNEQSJfyWYuoGeyTCS5IyCoawoPMR0s&v=3"
                loadingElement={< div style={{ height: `100%` }} />}
                containerElement={< div style={{ height: `100%`, width: '100%' }} />}
                mapElement={< div style={{ height: `100%` }} />}
            />
        )
    }
}