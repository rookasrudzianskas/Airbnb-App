import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';
import geolib from 'geolib';
import getCenter from "geolib/es/getCenter";

const Map = ({searchResults}) => {

    const [viewport, setViewport] = useState({
        width: "100%",
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
    });

    // transform the searchResults object, to the object for the lat and long object.
    //     { latitude: 52.516272, longitude: 13.377722 },
    // object

    const coordinates = searchResults.map(result => ({
        // this will return the object, each time it runs
        longitude: result.long,
        latitude: result.lat,
    }));




    return (
        <ReactMapGL
            mapStyle="mapbox://styles/rokasr/cksucwm2w00j817rszggndqdl"
            mapboxApiAccessToken={process.env.mapbox_key}

            {...viewport}

            // lets to scroll in the map
            onViewportChange={(nextViewport) => setViewport(nextViewport) }
        >

        </ReactMapGL>
    );
};

export default Map;
