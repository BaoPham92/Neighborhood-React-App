import axios from 'axios'

const instance = axios.create();

instance.defaults.timeout = 2000;

class apiUtility {
    /* Information provided by https://developer.foursquare.com/ */
    static callFetch(nearId, queryId) {
        
        // Parameter / configuration
        const params = {
            client_id: '3S3Z01DGDZKC512ISDMGGJ1OCFBSHTB0CPN4HKXQ1HFSFBAX',
            client_secret: 'WXUKLTPIEAVA1INPRRXZJFUCMQFBPOVW3VMKXBH4M3L5IPKR',
            v: '20180323',
            near: nearId,
            query: queryId,
            limit: 10,
            radius: 2500
        }

        // axios API call for returning information based on criterias from (params) variable above.
        const endPoint = 'https://api.foursquare.com/v2/venues/search?' + new URLSearchParams(params)

            return instance.get(endPoint, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
        .catch(error => {
            console.log(error.request, error.response)

            if (error.response.status === 429) {
                const errorRes = error.response.data.meta

                alert(`
                Error retreiving venue's information. 
                
                Call Type: (Search Call)

                Error code: ${errorRes.code} 
                Details: ${errorRes.errorDetail} 
                RequestId: ${errorRes.requestId}`)

            } else {
                console.log('Error', error.message);
            }
        })
    }
    static idFetch(inputId) {
        
        // Parameter / configuration
        const params = {
            client_id: '3S3Z01DGDZKC512ISDMGGJ1OCFBSHTB0CPN4HKXQ1HFSFBAX',
            client_secret: 'WXUKLTPIEAVA1INPRRXZJFUCMQFBPOVW3VMKXBH4M3L5IPKR',
            v: '20180323'
        }

        // axios API call for returning information based on criterias from (params) variable above.
        const endPoint = `https://api.foursquare.com/v2/venues/${inputId}?` + new URLSearchParams(params)

            return instance.get(endPoint, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
        .catch(error => {
            console.log(error.request, error.response)

            if (error.response.status === 429) {
                const errorRes = error.response.data.meta

                alert(`
                Error retreiving this venue's information. 
                
                Call Type: (Venue Details Call)

                Error code: ${errorRes.code} 
                Details: ${errorRes.errorDetail} 
                RequestId: ${errorRes.requestId}`)

            } else {
                console.log('Error', error.message);
            }
        })
    }

    static idMenu(inputId) {
        
        // Parameter / configuration
        const params = {
            client_id: '3S3Z01DGDZKC512ISDMGGJ1OCFBSHTB0CPN4HKXQ1HFSFBAX',
            client_secret: 'WXUKLTPIEAVA1INPRRXZJFUCMQFBPOVW3VMKXBH4M3L5IPKR',
            v: '20180323'
        }

        // axios API call for returning information based on criterias from (params) variable above.
        const endPoint = `https://api.foursquare.com/v2/venues/${inputId}/menu?` + new URLSearchParams(params)
        
            return instance.get(endPoint, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
        .catch (error => {
            console.log(error.request, error.response)

            if (error.response.status === 429) {
                const errorRes = error.response.data.meta

                alert(`
                Error retreiving this venue's menu information. 
                
                Call Type: (Menu Call)

                Error code: ${errorRes.code} 
                Details: ${errorRes.errorDetail} 
                RequestId: ${errorRes.requestId}`)

            } else {
                console.log('Error', error.message);
            }
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