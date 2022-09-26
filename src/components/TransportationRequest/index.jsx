import * as React from 'react';
import { useState } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Stack from '@mui/material/Stack';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { Payment } from 'payment';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';



export default function TransportationRequest(props) {

    const [openContact,setOpenContact] = useState(false);
    const [openConfirm,setOpenConfirm] = useState(false);
    const navigate = useNavigate();

    const handleConfirmOpen = () => {
        setOpenConfirm(true);
    }

    const handleConfirmClose = () => {
      setOpenConfirm(false);
    }

    const handleClickOpenContact = () => {
        setOpenContact(true);
      };
    
      const handleCloseContact = () => {
        setOpenContact(false);
      };

    const handleConfirm = () => {
      props.channgeSt();
    };

    const handleDecline = () => {
      props.channgeSt();
    };

    const acceptRequest = () => {
      axios.post('/api/transporter/request/accept',{id:props.id})
      .then(res => {
        navigate('/transporter/dash/tripshedule');
      });
    };
    const declineRequest = () => {
      axios.post('/api/transporter/request/decline',{id:props.id})
      .then(res => {
        props.changeSt();
      });
    };
  
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md" id='1' sx={{mt:'50px'}}>
      <Box sx={{ bgcolor: 'white', height: 'auto', color:'black', borderRadius:'10px 10px 10px 10px' }} >
        <Box sx={{ bgcolor: '#075E54', height: 'auto', color:'white', padding:'15px', borderRadius:'10px 10px 0 0' }}>
        <Typography  variant="h6" >{props.name}</Typography>
        <Stack spacing={2} direction="row">
        <Typography   >{props.vegetableName}</Typography>
        <Typography   >{props.quantity} kg</Typography>
        
        
      </Stack>
    
        </Box>

        <Box sx={{ bgcolor: '#d4fade',  padding:'10px 20px 20px 20px',height: 'auto', color:'black', borderRadius:'0 0 10px 10px',border:'2px' }}>
        <Stack spacing={6} direction="row">
        <Typography  >Date</Typography>
        <Typography  >{props.date}</Typography>
        <Typography  >Contacts</Typography>
        <Typography  >{props.phone}</Typography>
        <Typography  >Total Payment</Typography>
        <Typography   >Rs.{props.cost}</Typography>
        {/* <Typography  >Quantity</Typography>
        <Typography   >{props.quantity}&nbsp;KG</Typography> */}

        </Stack>

        
        <Timeline position="right" >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Start
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <MyLocationIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
          {props.startAddress}
          </Typography>
          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Destination
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary'>
            <LocationOnIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
         {props.destinationAddress}
          </Typography>
          
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>  
        <br/>
        
     <Stack spacing={2} direction="row" marginLeft='40%'>
        {/* <Button onClick={handleClickOpenContact} variant="contained" color="info" startIcon={<ChatIcon /> }>
        Contact Seller
      </Button> */}
      <Button onClick={handleConfirmOpen} variant="contained" color="success" startIcon={<PlaylistAddIcon /> }>
        Accept and add to Schedule
      </Button>
      <Button onClick={handleClickOpenContact} variant="contained" color="error" startIcon={<DeleteSweepIcon /> }>
        Decline
      </Button>
        </Stack>
        </Box>

      </Box>
    </Container>
    <br/>
    

    <Dialog open={openConfirm} onClose={handleConfirmClose}>
        <DialogTitle style={{backgroundColor: 'white', color: 'black'}}>Add to schedule</DialogTitle>
        <DialogContent style={{backgroundColor: 'white', color: 'black'}}>
          <DialogContentText>
            <h3>Confirm to add this Request to schedule</h3>
          </DialogContentText>
          </DialogContent>
        <DialogActions style={{backgroundColor: 'white'}}>
          <Button variant="contained" color="error" onClick={handleConfirmClose}>Cancel</Button>
          <Button onClick={()=>{acceptRequest();handleConfirmClose();}} variant="outlined" color="secondary">Add to Schedule</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openContact} onClose={handleCloseContact}>
        <DialogTitle style={{backgroundColor: 'white'}}>Add to schedule</DialogTitle>
        <DialogContent style={{backgroundColor: 'white', color: 'black'}}>
          <DialogContentText>
            <h3>Confirm to Decline the request</h3>
          </DialogContentText>
          </DialogContent>
        <DialogActions style={{backgroundColor: 'white'}}>
          <Button onClick={handleCloseContact} variant="outlined" color="secondary">Cancel</Button>
          <Button variant="contained" color="error" onClick={()=>{declineRequest();handleCloseContact();}}>Remove</Button>
        </DialogActions>
      </Dialog>
    
    
  </React.Fragment>

  );
  
}