import * as React from 'react';
import { useState } from "react";

import { Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormPropsTextFields from './content'
import FormPropsTextFields2 from './content'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { borderRadius, padding } from '@mui/system';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import PopupForm from './form';


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


export default function Sub() {
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
         <Typography  variant="h5" >Monthly</Typography>
         {/* <Button variant="contained" color="error" startIcon={<DeleteIcon /> }>
        Delete
      </Button> */}
      </Stack>
        </Box>
        <Box sx={{ bgcolor: 'white',  padding:'10px 20px 20px 10%',height: 'auto', color:'black', borderRadius:'0 0 10px 10px' }}>
        <FormPropsTextFields id='1'/>
        </Box>

      </Box>
    </Container>
    <Container maxWidth="md" id='1'>
      <Box sx={{ bgcolor: 'white', height: 'auto', color:'black', borderRadius:'10px 10px 10px 10px', marginTop:"10px" }} >
        <Box sx={{ bgcolor: '#075E54', height: 'auto', color:'white', padding:'15px', borderRadius:'10px 10px 0 0' }}>
        <Stack spacing={2} direction="row">
         <Typography  variant="h5" >Yearly</Typography>
         {/* <Button variant="contained" color="error" startIcon={<DeleteIcon /> }>
        Delete
      </Button> */}
      </Stack>
        </Box>
        <Box sx={{ bgcolor: 'white',  padding:'10px 20px 20px 10%',height: 'auto', color:'black', borderRadius:'0 0 10px 10px' }}>
        <FormPropsTextFields2 id='2'/>
        </Box>

      </Box>
    </Container>
   
   
    
    <Container maxWidth="md" >
      <Box sx={{ bgcolor: 'none', height: 'auto', color:'black', borderRadius:'10px 10px 10px 10px', marginTop:'20px' }} >
      <Button variant="contained" startIcon={<AddCircleIcon/>} color="success" onClick={handleOpen} >
        ADD NEW PLAN
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PopupForm/>
          <div>
      
      <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={handleClose} >CANCEL</Button>
      <Button variant="contained" type="submit" >ADD</Button>
      
    </Stack>
  
      </div>
        </Box>
      </Modal>

      </Box>
   

    </Container>
    
  </React.Fragment>

  );
  
}
