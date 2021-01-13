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
import ListSubheader from '@material-ui/core/ListSubheader';
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
  header: {
    fontSize: '1.5rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 400,
    lineHeight: 1.334,
    letterSpacing: '0em',
    color: 'rgba(0, 0, 0, 0.87)'
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const FleetList = ({vehicles, setSelectedVehicle}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List 
                component="nav" 
                aria-label="Fleet List"
                
            >
                
                <ListSubheader component="div" id="nested-list-subheader" className={classes.header} disableSticky={true}>
                    Fleet List
                </ListSubheader>
            
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