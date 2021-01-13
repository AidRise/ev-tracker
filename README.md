# EV-Tracker
Static interface prototype for Fleet Admin to track fleet EVs and current battery charge.

Project Tech Stack:
* React
* Material-UI

Both were chosen for building out robust components quickly and efficiently.

## Description
EV-Tracker interface is built out with a dashboard feel. That way the Fleet Admin can see multiple data points on the EVs at once. The interface is built out in 5 simple components:
* Sidebar
* Map
* PieChart
* FleetList
* VehicleInfo

### Sidebar
The Sidebar was built with the intentions of a full scale platform. Each linking to a feature that would make the platform more complete.

### Map
The Map uses the Google Maps API to show the EV's Locations. By clicking on a EV marker you toggle a info window that shows a icon with a respective battery charge for the EV.

### PieChart
The PieChart is to depection the count ranges of the EV's battery charges.

### FleetList
FleetList provides a full scrollable list of the fleet's EVs. When selecting an EV it's data is then presented within the VehicleInfo component.

### VehicleInfo
The VehicleInfo is to present the respective data for the selected EV. Also it includes a button to either push the location of the closest charging station to the driver, or return home to charge if it is an Autonomous EV.


## Get Started
To run project locally clone or download repository to your local machine.
`git clone https://github.com/AidRise/ev-tracker.git`

### Setup
Install node packages by running:
`npm install`
Or
`yarn`

Once packages have been install you can run the project locally with:
`npm start`
Or
`yarn start`