import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'


const TrackerMap = ({ setSelectedVehicle, vehicles }) => {

    const [infoWindow, setInfoWindow] = useState(false);
    const [activeMarkerKey, setActiveMarkerKey] = useState(false);

    const containerStyle = {
    width: '100%',
    height: '400px'
    };

    const center = {
    lat: 33.769586784918,
    lng: -84.33888054409155
    };

    const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 5
    };

    const toggleInfoWindow = (i) => {
        if(i !== activeMarkerKey) {
            setInfoWindow(true);
            setActiveMarkerKey(i);
            setSelectedVehicle(vehicles[i]);
            return;
        }
        setInfoWindow(!infoWindow);
        setSelectedVehicle(false);
    }
        

    return (

        <LoadScript
            googleMapsApiKey="AIzaSyCUf_CyRSxbNxQtxsKFBKNJjcdqvkhlQ3M"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={9}
            >

                {vehicles.map((marker, i) => {
                    return(
                        <>
                            <Marker
                                key={marker.id} 
                                position={marker.position}
                                onClick={() => toggleInfoWindow(i)}
                            >
                            { (infoWindow && activeMarkerKey === i )&& <InfoWindow 
                                    onCloseClick={toggleInfoWindow} 
                                > 
                                    <div style={divStyle}>
                                        {marker.batteryIcon}
                                    </div>
                                </InfoWindow>}
                            </Marker>
                        </>
                    );
                })}
            </GoogleMap>
        </LoadScript>
    );
    



};

export default React.memo(TrackerMap);

//lat: 33.769586784918, lng: -84.33888054409155