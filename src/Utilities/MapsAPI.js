import axios from 'axios'

class apiUtility {
    static callFetch() {
        
        // Parameter / configuration
        const params = {
            client_id: '3S3Z01DGDZKC512ISDMGGJ1OCFBSHTB0CPN4HKXQ1HFSFBAX',
            client_secret: 'WXUKLTPIEAVA1INPRRXZJFUCMQFBPOVW3VMKXBH4M3L5IPKR',
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
            client_id: '4UATXVRF0X3ABP1LJFJ0BVAZMC4V2I3Q53CVGJFN4Z0Z0NJV',
            client_secret: 'LDAMUDHRRP3S0L43N03EXJWFZLUNXH50DOZZALE5ASA3DVNJ',
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