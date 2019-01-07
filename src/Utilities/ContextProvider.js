import React, { Component } from 'react'
import myContext from './Context'
import escapeRegExp from 'escape-string-regexp'
import axios from 'axios'


export default class ContextProvider extends Component {
    constructor(props) {
        super()

        this.state = {
            query: '',
            center: [],
            venues: [],
            markers: [],

            getVenues: () => {
                const params = {
                    client_id: 'ASE15TC355LVRR3ALKLNPHGWC54CTLVBSQDRZZFTDLEDUSJH',
                    client_secret: 'RNFGZWHNN3WSLDOZXBBTHB3DSHC3PW01VKIOE0WTFJSYNHIJ',
                    v: '20180323',
                    near: `New York City, NY`,
                    query: 'coffee',
                    limit: 5,
                    radius: 50
                }

                // axios API call for returning information based on criterias from (params) variable above.
                const endPoint = 'https://api.foursquare.com/v2/venues/explore?' + new URLSearchParams(params);

                axios.get(endPoint)
                    .then((response) => {
                        const center = response.data.response.geocode.center
                        const venues = response.data.response.groups[0].items
                        const markers = venues.map((index) => {
                            return {
                                lat: index.venue.location.lat,
                                lng: index.venue.location.lng,
                                title: index.venue.name
                            }
                        })
                        console.log(response)
                        console.log(center, venues, markers)
                        this.setState({ center, venues, markers })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
        }
    }

    componentDidMount() {
        this.state.getVenues()
    }

    render() {
        return (
            <myContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}
