import React from 'react'
import ProductLayout from './ProductLayout'
import ReactMapGl, { NavigationControl, GeolocateControl } from 'react-map-gl';

const TopSellingCountry = () => {
    const viewport = {
        height: '500px',
        width: '100%',
        zoom: .5
    }
    return (
        <ProductLayout name="Top" surName="Selling Country" close>
            <div style={{padding:"20px",height:"100%",width:"100%"}}>
            <ReactMapGl {...viewport}
                mapStyle="mapbox://styles/mapbox/light-v10"
                mapboxApiAccessToken='pk.eyJ1IjoiZGlzaG9uanAiLCJhIjoiY2s5ZjVibmU5MDk1YTNmcDl2YjE1NWVhcyJ9.-rJsqkvTxRa-SE4ng4g4Zw'
            />
            </div>
        </ProductLayout>
    )
}



export default TopSellingCountry
