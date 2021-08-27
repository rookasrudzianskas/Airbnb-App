import React, {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import geolib from 'geolib';
import getCenter from "geolib/es/getCenter";
import Image from "next/image";

const Map = ({searchResults}) => {


    // transform the searchResults object, to the object for the lat and long object.
    //     { latitude: 52.516272, longitude: 13.377722 },
    // object
    // here we have formed the object to get the center

    const [selectedLocation, setSelectedLocation] = useState({});

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
                        <p role="img" onClick={() => setSelectedLocation(result)} aria-label="push-pin" className="cursor-pointer text-2xl animate-bounce">
                            😅
                        </p>
                    </Marker>

                {/*    this is the popup, which should show, if we click on the marker  */}

                    {selectedLocation.long === result.long ? (

                        <div className="">
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            latitude={result.lat}
                            longitude={result.long}
                            closeOnClick={true}
                        >

                            <div className="w-48 h-24 bg-red-500 ">
                                <div className="h-12 w-12">
                                <p className="truncate z-100 text-white">{result.title}</p>
                                    <Image
                                        layout="fill"
                                        src={result.img}
                                        objectFit="cover"
                                        className="rounded-lg overflow-hidden"
                                    />
                                </div>
                            </div>

                        </Popup>
                        </div>
                    ): false}

                </div>
            ))}

        </ReactMapGL>
    );
};

export default Map;
