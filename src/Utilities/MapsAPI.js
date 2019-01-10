import axios from 'axios'

class apiUtility {
    /* Information provided by https://developer.foursquare.com/ */
    static callFetch(nearId, queryId) {
        
        // Parameter / configuration
        const params = {
            client_id: 'EHWACHKQJRQYJFTBPAUYCY5JPR2RWEQ04ENJQFYZE25QJ1WU',
            client_secret: 'BM1YIPUQUNZ4VSV5DF1DBNG0BLL0UEF4RNVFRL4IPRYBBHSR',
            v: '20180323',
            near: nearId,
            query: queryId,
            limit: 20,
            radius: 2500
        }

        // axios API call for returning information based on criterias from (params) variable above.
        const endPoint = 'https://api.foursquare.com/v2/venues/search?' + new URLSearchParams(params)

        return axios.get(endPoint, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .catch((error) => {
             console.log(new Error(`Error when making Axios API Get call for (search)\n${error}`))
        })
    }
    static idFetch(inputId) {
        
        // Parameter / configuration
        const params = {
            client_id: 'TZ404FGQ5KETB4MLR52WJPOAH0GJYFNPZPMEPEFGS23QACB4',
            client_secret: 'VPMWM5FHRCZM1OERYJKVX50APBX4OKLNFDS4WMDN50Q11PSA',
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
        .catch((error) => {
             console.log(new Error(`Error when making Axios API Get call for (venues)\n${error}`))
        })
    }

    static idMenu(inputId) {
        
        // Parameter / configuration
        const params = {
            client_id: 'TZ404FGQ5KETB4MLR52WJPOAH0GJYFNPZPMEPEFGS23QACB4',
            client_secret: 'VPMWM5FHRCZM1OERYJKVX50APBX4OKLNFDS4WMDN50Q11PSA',
            v: '20180323'
        }

        // axios API call for returning information based on criterias from (params) variable above.
        const endPoint = `https://api.foursquare.com/v2/venues/${inputId}/menu?` + new URLSearchParams(params)

        return axios.get(endPoint, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .catch((error) => {
             console.log(new Error(`Error when making Axios API Get call for (menu)\n${error}`))
        })
    }
}

export default class MapAPI {
    static getVenues(nearId, queryId) {
        return apiUtility.callFetch(nearId, queryId)
    }
    static idDetails(inputId) {
        return apiUtility.idFetch(inputId)
    }
    static idMenu(inputId) {
        return apiUtility.idMenu(inputId)
    }
}