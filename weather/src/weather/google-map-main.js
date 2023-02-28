import React from 'react'
import GoogleMapIframe from './google-map-iframe'

function GoogleMapMain({ currentCity }) {
    return (
        <div>
            <h1 className='display-2 text-center'>Location Map</h1>
            <GoogleMapIframe currentCity={currentCity} />
        </div>
    )
}

export default GoogleMapMain