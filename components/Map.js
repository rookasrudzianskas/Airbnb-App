import React, {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import geolib from 'geolib';
import getCenter from "geolib/es/getCenter";

const Map = ({searchResults}) => {


    // transform the searchResults object, to the object for the lat and long object.
    //     { latitude: 52.516272, longitude: 13.377722 },
    // object
    // here we have formed the object to get the center

    const coordinates = searchResults.map(result => ({
        // this will return the object, each time it runs
        longitude: result.long,
        latitude: result.lat,
    }));

    // the latitude and longitude of the center of locations coordinates
    const center = getCenter(coordinates);


    const [viewport, setViewport] = useState({
        width: "100%",
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });



    return (
        <ReactMapGL
            mapStyle="mapbox://styles/rokasr/cksucwm2w00j817rszggndqdl"
            mapboxApiAccessToken={process.env.mapbox_key}

            {...viewport}

            // lets to scroll in the map
            onViewportChange={(nextViewport) => setViewport(nextViewport) }
        >

            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetRight={-10}
                    >
                        <p className="cursor-pointer text-2xl animate-bounce">
                            ✅
                        </p>
                    </Marker>
                </div>
            ))}

        </ReactMapGL>
    );
};

export default Map;
