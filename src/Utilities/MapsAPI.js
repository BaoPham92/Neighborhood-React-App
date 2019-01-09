import axios from 'axios'

class apiUtility {
    static callFetch() {
        
        // Parameter / configuration
        const params = {
            client_id: 'ASE15TC355LVRR3ALKLNPHGWC54CTLVBSQDRZZFTDLEDUSJH',
            client_secret: 'RNFGZWHNN3WSLDOZXBBTHB3DSHC3PW01VKIOE0WTFJSYNHIJ',
            v: '20180323',
            near: `New York City, NY`,
            query: 'coffee',
            limit: 10,
            radius: 50
        }

        // axios API call for returning information based on criterias from (params) variable above.
        const endPoint = 'https://api.foursquare.com/v2/venues/explore?' + new URLSearchParams(params)

        return axios.get(endPoint, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
    }
}

export default class MapAPI {
    static getVenues() {
        return apiUtility.callFetch()
    }
}