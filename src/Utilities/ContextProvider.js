import React, { Component } from 'react'
import myContext from './Context'
import escapeRegExp from 'escape-string-regexp'
import axios from 'axios'


export default class ContextProvider extends Component {
    constructor(props) {
        super()

        this.state = {
            query: '',
            places: [],
            getPlaces: () => {
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
                        console.log(response)
                        this.setState({ places: response.data.response.groups[0].items })
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
        }
    }

    componentDidMount() {
        this.state.getPlaces()
    }

    render() {
        return (
            <myContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}
