import Button from '@mui/material/Button';

import React, { Fragment, useState } from 'react';


import { useNavigate } from 'react-router-dom';

import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

import { CssBaseline, Stack, Typography } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';

// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';

import Input from '../../components/Input/input';


import Footer from "../../components/Footer";
import NavBar from '../../components/Navbar';
import Logo from '../../components/Logo/logo';
import TextField from '@mui/material/TextField';




export default function AddToWastage() {

  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
return (
    <Fragment>
    <NavBar/>
   
                
           
    <Container component="main" maxWidth="md" style={{backgroundColor:"#075E54"}} >
      
        <CssBaseline  />
        <Box
          sx={{
            marginTop: 20,
            marginBottom:0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        
            
          }}
        >
         
       
     
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,mb:5}}>
            <Grid container spacing={2}>
            <Grid item xs={12} >
              
                  <Typography style={{color:"white" , display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',}} variant="h6" component="h2">Wastage Selling Details</Typography>
            
                  
              </Grid>
            
              <Grid item xs={12} >
              <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Wastage Buyer Name" color="secondary" style={{color:"green"}} focused fullWidth required />
            
                  </Box>
              </Grid>
              
            <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Wastage Quantity" color="secondary"  focused fullWidth required />
            
                  </Box>
                </Grid>
                <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Notes(If any)" color="secondary"  focused fullWidth />
            
                  </Box>
                </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sell Wastage
            </Button>
            
 


            
          </Box>
          
          
        </Box>
        
      
      </Container>
    
    
     
      </Fragment>
    
  );
  
  
}