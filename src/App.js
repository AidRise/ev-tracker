import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import PieChart from "./components/PieChart";
import TrackerMap from './components/Map';
import Paper from '@material-ui/core/Paper';
import FleetList from './components/FleetList'

import Battery90Icon from '@material-ui/icons/Battery90';
import Battery60Icon from '@material-ui/icons/Battery60';
import Battery20Icon from '@material-ui/icons/Battery20';

import VehicleInfo from './components/VehicleInfo'

const vehicles = [
    {
        id: 'mRk5T4YUfB',
        position: {
            lat: 33.80613642679509,
            lng: -84.3915061031341
        },
        driver: 'Autonomous',
        charge: 90,
        batteryIcon: <Battery90Icon />,
        milesDrivenToday: 50,
        lastCharge: new Date(2021, 1, 1).toLocaleDateString("en-US")
    },
    {
        id: '0qHHsqj0rb',
        position: {
            lat: 33.769586784918,
            lng: -84.33888054409145
        },
        driver: 'Zhong Carina',
        charge: 20,
        batteryIcon: <Battery20Icon />,
        milesDrivenToday: 305,
        lastCharge: new Date(2021, 1, 11).toLocaleDateString("en-US")
    },
    {
        id: 'NoL_mBvMrE',
        position: {
            lat: 33.89168909782853,
            lng: -84.29902697409435
        },
        driver: 'Vester Conley',
        charge: 60,
        batteryIcon: <Battery60Icon />,
        milesDrivenToday: 150,
        lastCharge: new Date(2021, 1, 5).toLocaleDateString("en-US")
    },
    {
        id: 'JVPb2H6mBe',
        position: {
            lat: 33.920325770182295,
            lng: -84.35520316021544
        },
        driver: 'Autonomous',
        charge: 25,
        batteryIcon: <Battery20Icon />,
        milesDrivenToday: 299,
        lastCharge: new Date(2021, 1, 10).toLocaleDateString("en-US")
    },
    {
        id: 'FBc3uWG68u',
        position: {
            lat: 33.7634103635269,
            lng: -84.39309156954523
        },
        driver: 'Autonomous',
        charge: 91,
        batteryIcon: <Battery90Icon />,
        milesDrivenToday: 30,
        lastCharge: new Date(2020, 12, 29).toLocaleDateString("en-US")
    },
    {
        id: '5l-V6acmb0',
        position: {
            lat: 34.04519100398069,
            lng: -84.32978774468974
        },
        driver: 'Penelope Kelcey',
        charge: 28,
        batteryIcon: <Battery20Icon />,
        milesDrivenToday: 280,
        lastCharge: new Date(2020, 12, 28).toLocaleDateString("en-US")
    },
    {
         id: 'iU1l0wfrgT',
        position: {
            lat: 33.71756592025775,
            lng: -84.45776483227895
        },
        driver: 'Nico Eckart',
        charge: 97,
        batteryIcon: <Battery90Icon />,
        milesDrivenToday: 55,
        lastCharge: new Date(2020, 12, 20).toLocaleDateString("en-US")
    },
    {
        id: 'Cq__g8iveD',
        position: {
            lat: 33.61756592025775,
            lng: -84.45776483227895
        },
        driver: 'Autonomous',
        charge: 69,
        batteryIcon: <Battery60Icon />,
        milesDrivenToday: 180,
        lastCharge: new Date(2021, 1, 4).toLocaleDateString("en-US")
    },
    {
        id: 'kCoNT4xnBg',
        position: {
            lat: 33.93972688134541,
            lng: -84.53801256146903
        },
        driver: 'Autonomous',
        charge: 65,
        batteryIcon: <Battery60Icon />,
        milesDrivenToday: 175,
        lastCharge: new Date(2021, 1, 6).toLocaleDateString("en-US")
    },
    {
        id: 'Vtnu1r-zTj',
        position: {
            lat: 33.940515860702654,
            lng: -84.203256609761
        },
        driver: 'Autonomous',
        charge: 22,
        batteryIcon: <Battery20Icon />,
        milesDrivenToday: 315,
        lastCharge: new Date(2021, 1, 10).toLocaleDateString("en-US")
    },
    {
        id: 'bCtIqB7uoG',
        position: {
            lat: 33.70724996777135,
            lng: -84.27316248503894
        },
        driver: 'Dena Ersilia',
        charge: 92,
        batteryIcon: <Battery90Icon />,
        milesDrivenToday: 48,
        lastCharge: new Date(2021, 1, 11).toLocaleDateString("en-US")
    },
    {

        id: 'dG53Uirna6',
        position: {
            lat: 33.54764420656853,
            lng: -84.2375542863461
        },
        driver: 'Marcie Alva',
        charge: 23,
        batteryIcon: <Battery20Icon />,
        milesDrivenToday: 300,
        lastCharge: new Date(2021, 1, 7).toLocaleDateString("en-US")
    },
    {
        id: 'ZkxlKNO08Q',
        position: {
            lat: 33.75215067701327,
            lng: -84.47087645858858
        },
        driver: 'Autonomous',
        charge: 95,
        batteryIcon: <Battery90Icon />,
        milesDrivenToday: 68,
        lastCharge: new Date(2021, 1, 12).toLocaleDateString("en-US")
    },
]

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(false);


  return (
    <div className="App">
      <Sidebar>
        {/* Content of interface are placed as children inside SideBar component as wrapper */}
        <TrackerMap 
          vehicles={vehicles}
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
        />
        <div style={{display: 'flex', flex: '1', justifyContent: 'space-evenly', padding: '30px'}}>
          <PieChart />
          <FleetList 
            vehicles={vehicles} 
            setSelectedVehicle={setSelectedVehicle}
          />
          <VehicleInfo selectedVehicle={selectedVehicle} />
        </div>
      </Sidebar>
    </div>
  );
}

export default App;
