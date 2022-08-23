import * as React from 'react';
import { useState } from "react";

import { Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { borderRadius, padding } from '@mui/system';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';

import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import RequestForm from './requestForm';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'white',
    border: '3px solid #075E54',
    boxShadow: 24,
    p: 4,
  };
  



export default function BuyerProfile() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md" id='1'>
      <Box sx={{ bgcolor: 'white', height: 'auto', color:'black', borderRadius:'10px 10px 10px 10px' }} >
        <Box sx={{ bgcolor: '#075E54', height: 'auto', color:'white', padding:'15px', borderRadius:'10px 10px 0 0' }}>
        <Stack spacing={2} direction="row">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
        <Stack spacing={0} direction="column">
        <Typography  variant="h6" > Sethni Disanayaka</Typography>
        <Typography >23/4,Temple Road, Anuradhapura</Typography>
        </Stack>
        </Stack>
        
    
        </Box>

        <Box sx={{ bgcolor: '#d4fade',  padding:'10px 20px 20px 20px',height: 'auto', color:'black', borderRadius:'0 0 10px 10px',border:'2px' }}>
        
        <Stack spacing={2} direction="row" marginBottom='10px'>
        <Typography variant="h5">Carrot</Typography>
       
        
      </Stack>
       
        <Stack spacing={2} direction="row">
            <div width='75px' height='auto' style={{backgroundColor:'#128C7E',padding:'15px',borderRadius:'30px',color:'white'}}><Typography variant="h6" >Minimum Price <b>40.00 </b> Rs/kg</Typography></div>
            <div width='75px' height='auto' style={{backgroundColor:'#128C7E',padding:'15px',borderRadius:'30px',color:'white'}}><Typography variant="h6" >Maximum Price <b>60.00 </b>Rs/kg</Typography></div>
    
  
        </Stack>
        
        <br/>
        
     <Stack spacing={2} direction="row" padding='15px' width='100%' marginLeft='25px'>
     <Button variant="outlined" color="success" startIcon={<ArrowBackIcon /> }padding="10px" height='50px'>
        Back To Find Buyer page
      </Button>
        
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RequestForm/>
          <div>
      
      <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={handleClose} >CANCEL</Button>
      <Button variant="contained" type="submit" >SEND</Button>
      
    </Stack>
  
      </div>
        </Box>
      </Modal>
      <Button variant="contained" color="success" endIcon={<SendIcon />} padding="10px" height='50px'  onClick={handleOpen}>
       Send a Request to sell my vegetables
      </Button>
        </Stack>
        </Box>

      </Box>
    </Container>
    
  </React.Fragment>

  );
  
}