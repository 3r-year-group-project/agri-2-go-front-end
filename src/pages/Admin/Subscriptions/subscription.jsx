import * as React from 'react';
import { useState } from "react";

import { Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormPropsTextFields from './content'
import {FormPropsTextFields2} from './content'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { borderRadius, padding } from '@mui/system';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';

export default function Sub() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="md">
      <Box sx={{ bgcolor: 'white', height: 'auto', color:'black', borderRadius:'10px 10px 10px 10px' }} >
        <Box sx={{ bgcolor: '#075E54', height: 'auto', color:'white', padding:'15px', borderRadius:'10px 10px 0 0' }}>
        <Stack spacing={2} direction="row">
         <Typography  variant="h5" >Basic</Typography><Button variant="contained" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      </Stack>
        </Box>
        <Box sx={{ bgcolor: 'white',  padding:'10px 20px 20px 10%',height: 'auto', color:'black', borderRadius:'0 0 10px 10px' }}>
        <FormPropsTextFields/>
        </Box>

      </Box>
    </Container>
   
    <Container maxWidth="md" >
      <Box sx={{ bgcolor: 'white', height: 'auto', color:'black', borderRadius:'10px 10px 10px 10px', marginTop:'20px' }} >
        <Box sx={{ bgcolor: '#075E54', height: 'auto', color:'white', padding:'15px', borderRadius:'10px 10px 0 0' }}>
        <Stack spacing={2} direction="row">
         <Typography  variant="h5" >Standard</Typography><Button variant="contained" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      </Stack>
        </Box>
        <Box sx={{ bgcolor: 'white',  padding:'10px 20px 20px 10%',height: 'auto', color:'black', borderRadius:'0 0 10px 10px' }}>
        <FormPropsTextFields2/>
        </Box>

      </Box>

    </Container>
    <Container maxWidth="md" >
      <Box sx={{ bgcolor: 'none', height: 'auto', color:'black', borderRadius:'10px 10px 10px 10px', marginTop:'20px' }} >
      <Button variant="contained" startIcon={<AddCircleIcon/>} color="success">
        ADD NEW PLAN
      </Button>
    

      </Box>

    </Container>
    
  </React.Fragment>

  );
  
}
