import React from 'react'
import { GoogleMap,withScriptjs,withGoogleMap } from 'react-google-maps'

const Map = () => {
    return (
        <GoogleMap defaultZoom={1.5} defaultCenter={{ lat: 12, lng: 12 }} />
    )
}

export default withScriptjs(withGoogleMap(Map))
