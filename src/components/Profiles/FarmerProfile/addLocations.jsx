import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import { GoogleComponent } from 'react-google-location';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";


const API_KEY = 'AIzaSyA6lXWAGrCTGzGKdaIT_XwTrUms3TpoRsE';

export default function Locations(props) {
  const {user} = useAuth0();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setLocation = () =>{
    axios.post('/api/farmer//updateLocation',{address:state.place.place, lat:state.place.coordinates.lat, lon:state.place.coordinates.lng, email:user.email})
    .then(res => {handleClose();
    props.update();});
  };
  const handleChange = (e) => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e}&language=en&&key=${API_KEY}`,{ headers: { 
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }}).then((res) => {
      console.log(res.data.results[0].geometry.location);
    });
  }
  React.useEffect(() => {
    
      console.log(state);
      
  }, [state]);

  return (
    <div>
      <Button variant="outlined" color="info" style={{float: 'left'}} startIcon={<AddIcon/>} onClick={handleClickOpen}>
        Update location
      </Button>
      <Dialog open={open} onClose={handleClose}
        PaperProps={{
            style: {
            backgroundColor: '#fff',
            boxShadow: 'none',
            },
        }}
       >
        <DialogTitle color="#075E54">Add New Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add new starting location, please enter your address details here. <br/>
            <small style={{color:'red'}}>note : when you add new address here your working address will be automatically changed</small>
          </DialogContentText>
          <div style={{color: 'black'}}>
         <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          // country={'country:in|country:us'}
          coordinates={true}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
          onChange={(e) => { setState({ place: e }) }} />
      </div>

          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={setLocation}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
