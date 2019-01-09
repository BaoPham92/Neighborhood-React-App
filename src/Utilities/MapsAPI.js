import axios from 'axios'

class apiUtility {
    static callFetch() {
        
        // Parameter / configuration
        const params = {
            client_id: 'EHWACHKQJRQYJFTBPAUYCY5JPR2RWEQ04ENJQFYZE25QJ1WU',
            client_secret: 'BM1YIPUQUNZ4VSV5DF1DBNG0BLL0UEF4RNVFRL4IPRYBBHSR',
            v: '20180323',
            near: `Washington`,
            query: 'coffee',
            limit: 3,
            radius: 500
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
    static idFetch(inputId) {
        
        // Parameter / configuration
        const params = {
            client_id: 'EHWACHKQJRQYJFTBPAUYCY5JPR2RWEQ04ENJQFYZE25QJ1WU',
            client_secret: 'BM1YIPUQUNZ4VSV5DF1DBNG0BLL0UEF4RNVFRL4IPRYBBHSR',
            v: '20180323'
        }

        // axios API call for returning information based on criterias from (params) variable above.
        const endPoint = `https://api.foursquare.com/v2/venues/${inputId}?` + new URLSearchParams(params)

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
    static idDetails(inputId) {
        return apiUtility.idFetch(inputId)
    }
}