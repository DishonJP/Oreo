import React from 'react'
import ProductLayout from './ProductLayout'
// import ReactMapGl, { NavigationControl, GeolocateControl } from 'react-map-gl';
//  import Map from './Map'

// const TopSellingCountry = () => {
//     return <ProductLayout name="Top" surName="Selling Country" close>
//         <div style={{ padding: "20px", height: "100%", width: "100%" }}>
//             <Map
//                 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDKcg7sDCJhT56DjFJBczuBqPeODSJT6mM`}
//                 loadingElement={<div style={{ height: "500px" }} />}
//                 containerElement={<div style={{ height: "500px" }} />}
//                 mapElement={<div style={{ height: "500px" }} />}
//             />
//         </div>
//     </ProductLayout>
// }
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiZGlzaG9uanAiLCJhIjoiY2s5ZjVibmU5MDk1YTNmcDl2YjE1NWVhcyJ9.-rJsqkvTxRa-SE4ng4g4Zw'
});
const TopSellingCountry = () => {
    // const viewport = {
    //     height: '500px',
    //     width: '100%',
    //     zoom: .5
    // }
    return (
        <ProductLayout name="Top" surName="Selling Country" close>
            <div style={{ padding: "20px", height: "100%", width: "100%" }}>
                {/* <ReactMapGl {...viewport}
                mapStyle="mapbox://styles/mapbox/light-v10"
                mapboxApiAccessToken='pk.eyJ1IjoiZGlzaG9uanAiLCJhIjoiY2s5ZjVibmU5MDk1YTNmcDl2YjE1NWVhcyJ9.-rJsqkvTxRa-SE4ng4g4Zw'
            /> */}
                <Map
                    style="mapbox://styles/mapbox/light-v9"
                    containerStyle={{
                        height: '500px',
                        width: '100%'
                    }}
                    zoom={[0,5]}
                >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[-95.712891, 37.090240]} />
                        <Feature coordinates={[78.962883, 20.593683]} />
                        <Feature coordinates={[-106.346771, 56.130367]} />
                        <Feature coordinates={[133.775131, -25.274399]} />
                        <Feature coordinates={[10.451526, 51.165691]} />
                        <Feature coordinates={[3.4360, 55.3781]} />
                    </Layer>
                </Map>
            </div>
        </ProductLayout>
    )
}



export default TopSellingCountry
