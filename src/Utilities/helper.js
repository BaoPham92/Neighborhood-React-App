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
    }
})

export default mapHelper