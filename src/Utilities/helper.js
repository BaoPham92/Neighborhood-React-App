import axios from 'axios'

const mapHelper = Object.freeze({

    initMap: () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: 40.7413549, lng: -73.9980244 },
            zoom: 10
        })
    },

    genScript: (url) => {
        const script = document.createElement('script')
        script.src = url
        script.defer = true
        script.async = true
        document.body.appendChild(script)
        window.initMap = mapHelper.initMap
    },

    getPlaces: async () => {
        try {
            const params = {
                client_id: '4UATXVRF0X3ABP1LJFJ0BVAZMC4V2I3Q53CVGJFN4Z0Z0NJV',
                client_secret: 'LDAMUDHRRP3S0L43N03EXJWFZLUNXH50DOZZALE5ASA3DVNJ',
                v: '20180323',
                near: `New York City, NY`,
                query: 'coffee',
                limit: 15,
                radius: 200
            }

            const endPoint = await 'https://api.foursquare.com/v2/venues/explore?' + new URLSearchParams(params)
            axios.get(endPoint)
                .then((response) => {
                    console.log(response.data.response.groups[0])
                })
                .catch((error) => {
                    console.log(error)
                })
        } catch (error) {
            console.log('Error running getVenu!' + error)
        }
    }
})

export default mapHelper