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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { borderRadius, padding } from '@mui/system';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';





export default function TransportationRequest() {
  
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md" id='1' sx={{mt:'50px'}}>
      <Box sx={{ bgcolor: 'white', height: 'auto', color:'black', borderRadius:'10px 10px 10px 10px' }} >
        <Box sx={{ bgcolor: '#075E54', height: 'auto', color:'white', padding:'15px', borderRadius:'10px 10px 0 0' }}>
        <Typography  variant="h6" >Sethni Disanayaka</Typography>
        <Stack spacing={2} direction="row">
        <Typography   >Carrot</Typography>
        <Typography   >45 kg</Typography>
        
      </Stack>
    
        </Box>

        <Box sx={{ bgcolor: '#d4fade',  padding:'10px 20px 20px 20px',height: 'auto', color:'black', borderRadius:'0 0 10px 10px',border:'2px' }}>
        <Stack spacing={8} direction="row">
        <Typography  >Date</Typography>
        <Typography  >23 May 2022</Typography>
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
          23/4,Temple Road, Nugegoda
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
          23/4,Silver Street, Maharagama
          </Typography>
          
        </TimelineContent>
      </TimelineItem>
      
      
      
      
    </Timeline>



        
       
       
        <br/>
        
     <Stack spacing={2} direction="row" marginLeft='40%'>
        <Button variant="contained" color="info" startIcon={<ChatIcon /> }>
        Contact Seller
      </Button>
      <Button variant="contained" color="success" startIcon={<PlaylistAddIcon /> }>
        Add to Schedule
      </Button>
        </Stack>
        </Box>

      </Box>
    </Container>
    <Container maxWidth="md" id='1' marginLeft='40%'>
      <Box sx={{ bgcolor: 'white', height: 'auto', color:'black', borderRadius:'10px 10px 10px 10px', marginTop:'25px'}} >
        <Box sx={{ bgcolor: '#075E54', height: 'auto', color:'white', padding:'15px', borderRadius:'10px 10px 0 0' }}>
        <Typography  variant="h6" >Sandali Perera</Typography>
        <Stack spacing={2} direction="row" >
        <Typography   >Tomato</Typography>
        <Typography   >80 kg</Typography>
        
      </Stack>
    
        </Box>

        <Box sx={{ bgcolor: '#d4fade',  padding:'10px 20px 20px 20px',height: 'auto', color:'black', borderRadius:'0 0 10px 10px',border:'2px' }}>
        
        <Stack spacing={8} direction="row">
        <Typography  >Date</Typography>
        <Typography  >23 Feb 2022</Typography>
        </Stack>
       
        <Stack spacing={8} direction="row" >
        <Typography  >Start</Typography>
        <Typography  >23/4,Temple Road, Nugegoda</Typography>
        </Stack>
        <Stack spacing={2} direction="row">
        <Typography  >Destination</Typography>
        <Typography  >23/4,Silver Street, Maharagama</Typography>
        </Stack>
        <br/>
        
     <Stack spacing={2} direction="row" marginLeft='40%'>
        <Button variant="contained" color="info" startIcon={<ChatIcon /> }>
        Contact Seller
      </Button>
      <Button variant="contained" color="success" startIcon={<PlaylistAddIcon /> }>
        Add to Schedule
      </Button>
        </Stack>
        </Box>

      </Box>
    </Container>
    <Container maxWidth="md" id='1'>
      <Box sx={{ bgcolor: 'white', height: 'auto', color:'black', borderRadius:'10px 10px 10px 10px', marginTop:'25px'}} >
        <Box sx={{ bgcolor: '#075E54', height: 'auto', color:'white', padding:'15px', borderRadius:'10px 10px 0 0' }}>
        <Typography  variant="h6" >Kamal Perera</Typography>
        <Stack spacing={2} direction="row">
        <Typography >Carrot , Pumpkin, Onion</Typography>
        <Typography >120 kg</Typography>
        
      </Stack>
    
        </Box>

        <Box sx={{ bgcolor: '#d4fade',  padding:'10px 20px 20px 20px',height: 'auto', color:'black', borderRadius:'0 0 10px 10px',border:'2px' }}>
        
        <Stack spacing={8} direction="row">
        <Typography  >Date</Typography>
        <Typography  >23 Jan 2022</Typography>
        </Stack>
       
        <Stack spacing={8} direction="row">
        <Typography  >Start</Typography>
        <Typography  >23/4,Temple Road, Nugegoda</Typography>
        </Stack>
        <Stack spacing={2} direction="row">
        <Typography  >Destination</Typography>
        <Typography  >23/4,Silver Street, Maharagama</Typography>
        </Stack>
        <br/>
        
     <Stack spacing={2} direction="row"marginLeft='40%'>
        <Button variant="contained" color="info" startIcon={<ChatIcon /> }>
        Contact Seller
      </Button>
      <Button variant="contained" color="success" startIcon={<PlaylistAddIcon /> }>
        Add to Schedule
      </Button>
        </Stack>
        </Box>

      </Box>
    </Container>
  </React.Fragment>

  );
  
}