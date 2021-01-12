import React, { useCallback, useState } from 'react';

import { GoogleMap, LoadScript, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';

import Battery90Icon from '@material-ui/icons/Battery90';
import Battery60Icon from '@material-ui/icons/Battery60';
import Battery20Icon from '@material-ui/icons/Battery20';

const vehicles = [
    {
        id: 'mRk5T4YUfB',
        position: {
            lat: 33.80613642679509,
            lng: -84.3915061031341
        },
        driver: 'Autonomous',
        batteryIcon: <Battery90Icon />
    },
    {
        id: '0qHHsqj0rb',
        position: {
            lat: 33.769586784918,
            lng: -84.33888054409145
        },
        driver: 'Zhong Carina',
        batteryIcon: <Battery20Icon />
    },
    {
        id: 'NoL_mBvMrE',
        position: {
            lat: 33.89168909782853,
            lng: -84.29902697409435
        },
        driver: 'Vester Conley',
        batteryIcon: <Battery60Icon />
    },
    {
        id: 'JVPb2H6mBe',
        position: {
            lat: 33.920325770182295,
            lng: -84.35520316021544
        },
        driver: 'Autonomous',
        batteryIcon: <Battery20Icon />
    },
    {
        id: 'FBc3uWG68u',
        position: {
            lat: 33.7634103635269,
            lng: -84.39309156954523
        },
        driver: 'Autonomous',
        batteryIcon: <Battery90Icon />
    },
    {
        id: '5l-V6acmb0',
        position: {
            lat: 34.04519100398069,
            lng: -84.32978774468974
        },
        driver: 'Penelope Kelcey',
        batteryIcon: <Battery20Icon />
    },
    {
         id: 'iU1l0wfrgT',
        position: {
            lat: 33.71756592025775,
            lng: -84.45776483227895
        },
        driver: 'Nico Eckart',
        batteryIcon: <Battery90Icon />
    },
    {
        id: 'Cq__g8iveD',
        position: {
            lat: 33.61756592025775,
            lng: -84.45776483227895
        },
        driver: 'Autonomous',
        batteryIcon: <Battery60Icon />
    },
    {
        id: 'kCoNT4xnBg',
        position: {
            lat: 33.93972688134541,
            lng: -84.53801256146903
        },
        driver: 'Autonomous',
        batteryIcon: <Battery60Icon />
    },
    {
        id: 'Vtnu1r-zTj',
        position: {
            lat: 33.940515860702654,
            lng: -84.203256609761
        },
        driver: 'Autonomous',
        batteryIcon: <Battery20Icon />
    },
    {
        id: 'bCtIqB7uoG',
        position: {
            lat: 33.70724996777135,
            lng: -84.27316248503894
        },
        driver: 'Dena Ersilia',
        batteryIcon: <Battery90Icon />
    },
    {

        id: 'dG53Uirna6',
        position: {
            lat: 33.54764420656853,
            lng: -84.2375542863461
        },
        driver: 'Marcie Alva',
        batteryIcon: <Battery20Icon />
    },
    {
        id: 'ZkxlKNO08Q',
        position: {
            lat: 33.75215067701327,
            lng: -84.47087645858858
        },
        driver: 'Autonomous',
        batteryIcon: <Battery90Icon />
    },
]

const RenderMap = () => {

    const [infoWindow, setInfoWindow] = useState(false);
    const [activeMarkerKey, setActiveMarkerKey] = useState(false);

    const containerStyle = {
    width: '100%',
    height: '600px'
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
            return;
        }
        setInfoWindow(!infoWindow);
        // setActiveMarkerKey(i);
    }
    
    const renderMarkers = () => {
        return (
            <>
            {vehicles.map((marker, i) => {
                <Marker 
                    position={marker.position}
                    onClick={toggleInfoWindow}
                />
            })}
            </>
        );
    }

    
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCUf_CyRSxbNxQtxsKFBKNJjcdqvkhlQ3M"
         >
            <GoogleMap
                //onLoad={onLoad}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >

                {vehicles.map((marker, i) => {
                    return(
                        <>
                            <Marker
                                key={i} 
                                position={marker.position}
                                onClick={() => toggleInfoWindow(i)}
                            >
                               { (infoWindow && activeMarkerKey === i )&& <InfoWindow
                                    key={i} 
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
                {/* {
                    infoWindow && <InfoWindow 
                        position={activeMarkerPos}
                        onCloseClick={toggleInfoWindow} 
                    > 
                        <div style={divStyle}>
                            <h1>InfoWindow</h1>
                        </div>
                    </InfoWindow>
                } */}
            </GoogleMap>
         </LoadScript>
    );
}

export default React.memo(RenderMap);