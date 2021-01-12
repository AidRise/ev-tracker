import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import { AutorenewTwoTone } from '@material-ui/icons';
//import { FixedSizeList as List } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight: 480,
    maxWidth: 360,
    margin: '0 25px',
    overflow: 'auto',
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    backgroundColor: theme.palette.background.paper,
    '&::-webkit-scrollbar': {
        display: 'none'
    }
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const FleetList = ({vehicles, setSelectedVehicle}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
            {/* <List height={400} width={300} itemSize={20} itemCount={30}> */}
                {vehicles.map((vehicle, i) => {
                    return(
                        <>
                            <ListItem 
                                key={vehicle.id} 
                                button  
                                onClick={() => setSelectedVehicle(vehicles[i])}
                            >
                                <ListItemIcon>
                                    <LocalShippingTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText primary={vehicle.id} />
                            </ListItem>
                        </>
                    );
                })}
            </List>
            {/* </List> */}
        </div>
    );
}

export default FleetList;