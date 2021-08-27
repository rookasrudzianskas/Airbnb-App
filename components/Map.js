import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {

    const [viewport, setViewport] = useState({
        width: "100%",
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
    })


    return (
        <ReactMapGL
            mapStyle="mapbox://styles/rokasr/cksucwm2w00j817rszggndqdl"
            mapboxApiAccessToken={process.env.mapbox_key}

            {...viewport}
        >

        </ReactMapGL>
    );
};

export default Map;
