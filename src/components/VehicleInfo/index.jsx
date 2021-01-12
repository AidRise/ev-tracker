import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    maxHeight: '480px',
    padding: '10px',
    '& > div': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > hr': {
        margin: '10px'
    },
    divider: {
        width: '100%',
        margin: '10px'
    },
    
  },
}));

const VehicleInfo = ({selectedVehicle}) => {
  const classes = useStyles();

  return (
    <>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="ID" variant="outlined" defaultValue=" " value={selectedVehicle ? selectedVehicle.id : " "} disabled/>
            <TextField id="outlined-basic" label="Driver" variant="outlined" defaultValue=" " value={selectedVehicle ? selectedVehicle.driver : " "} disabled/>
            <TextField id="outlined-basic" label="Charge" variant="outlined" defaultValue=" " value={selectedVehicle ? `${selectedVehicle.charge}%` : " "} disabled/>
            <Divider className={classes.divider} />
            <TextField id="outlined-basic" label="Miles Driven" variant="outlined" defaultValue=" " value={selectedVehicle ? selectedVehicle.milesDrivenToday : " "} disabled/>
            <TextField id="outlined-basic" label="Last Charge" variant="outlined" defaultValue=" " value={selectedVehicle ? selectedVehicle.lastCharge : " "} disabled/>
            <Divider className={classes.divider} />
            {selectedVehicle.driver === 'Autonomous' ?
                <Button variant="contained" color="primary">Return Home to Charge</Button>
            :
                <Button variant="contained" color="primary">Send Charge Station Location</Button>
            }
        </form>
    </>
  );
}

export default VehicleInfo;
