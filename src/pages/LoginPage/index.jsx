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



export default function LoginPage() {

  const navigate = useNavigate();

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
   
                
           
    <Container component="main" maxWidth="xs" >
      
        <CssBaseline  />
        <Box
          sx={{
            marginTop: 10,
            marginBottom:0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
        <Logo />
     
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,mb:15}}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <Input
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              
            <Grid item xs={12}>
                <Input
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                </Grid>
        
              <Grid item xs={12} color={"#075E54"}>
                <FormControlLabel
               
             control={<Checkbox value="showpassword" color="primary" />}
                  label="Show password"
                 
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container justifyContent="flex">
              <Grid item color={"#075E54"} xs={6} md={6}>
              <Link href="/" variant="body1" >
                  Forget Password?
                </Link>
                </Grid>
                <Grid item color={"#075E54"}xs={6} md={6}>
                <Typography variant='subtitle1'>Don't have an account?</Typography>
                <Link href="/" variant="subtitle1" >
                   Create Account
                </Link>
                
              </Grid>
            </Grid>
            
          </Box>
          
          
        </Box>
        
      
      </Container>
    
      <Footer/>
     
      </Fragment>
    
  );
  
  
}