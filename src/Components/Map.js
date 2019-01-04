import React, { Component } from 'react' 
import axios from 'axios'

export default class Map extends Component {
    constructor(props) {
        super()

        this.state = {
            places: []
        }

    }

    componentDidMount() {
        this.getPlaces()
    }

    // Generate map
    renderMap = () => {
        loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBglNEQSJfyWYuoGeyTCS5IyCoawoPMR0s&v=3&callback=initMap')
        window.initMap = this.initMap
    }

    // Configuration and calls for API from foursqaure.
    getPlaces = () => {
        const params = {
            client_id: '4UATXVRF0X3ABP1LJFJ0BVAZMC4V2I3Q53CVGJFN4Z0Z0NJV',
            client_secret: 'LDAMUDHRRP3S0L43N03EXJWFZLUNXH50DOZZALE5ASA3DVNJ',
            v: '20180323',
            near: `New York City, NY`,
            query: 'coffee',
            limit: 50,
            radius: 5000
        }

        // axios API call for returning information based on criterias from (params) variable above.
        const endPoint = 'https://api.foursquare.com/v2/venues/explore?' + new URLSearchParams(params);

        axios.get(endPoint)
            .then((response) => {
                this.setState({
                    places: response.data.response.groups[0].items
                }, this.renderMap())
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // Map Initialization for API call on Google Maps
    initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.7413549, lng: -73.9980244 },
            zoom: 15
        })

        // Popup window for when clicking map markers
        var infoWindow = new window.google.maps.InfoWindow()

        // Loop iteration for creating markers based on state data
        this.state.places.filter(data => {

            // Information for infoWindow
            var contentWindow = `${data.venue.name}`

            var marker = new window.google.maps.Marker({
                position: { lat: data.venue.location.lat, lng: data.venue.location.lng },
                map: map,
                animation: window.google.maps.Animation.DROP,
                title: data.venue.name
            })

            marker.addListener('click', () => {

                // Change window content
                infoWindow.setContent(contentWindow)

                // Opening window of marker
                infoWindow.open(map, marker)
            })
        })
    }

    render() {
        return (
            <div id="map">
            </div>
        )
    }
}

// Create and generate script for the window & initMap function^
function loadScript(url) {
    let script = window.document.createElement("script")
    script.src = url
    script.defer = true
    script.async = true

    !(document.querySelector('script').getAttribute('src') === url) 
    ? window.document.body.appendChild(script) 
    : console.log('Already a script tag. Prevented duplicated script tag || Possible Error.')
}