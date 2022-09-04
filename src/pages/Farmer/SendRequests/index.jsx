import Button from '@mui/material/Button';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

import { Autocomplete, CssBaseline, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';

// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import ImageUpload from '../../../components/ImageUpload';


export default function SendRequests() {

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
    <Container component="main" maxWidth="md" style={{backgroundColor:"#075E54"}} >
      
        <CssBaseline  />
        <Box
          sx={{
            marginTop: 3,
            marginBottom:3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5,mb:5}}>
            <Grid container spacing={2}>
            <Grid item xs={12} >
              
                  <Typography style={{color:"white" , display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',}} variant="h6" component="h2">Selling Request Details</Typography>
            
                  
            </Grid>
            <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top20Vegetables}
                renderInput={(params) => <TextField {...params} label="Vegetable Category" color="secondary"  focused fullWidth required />}
            />
            </Box>
            </Grid>

            <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top6EconomicCenters}
                renderInput={(params) => <TextField {...params} label="Dedicated Economic Center" color="secondary"  focused fullWidth required />}
            />
            </Box>
            </Grid>
              
            <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Selling Price (Rs)" color="secondary"  focused fullWidth required />
            </Box>
            </Grid>

            <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Quantity (kg)" color="secondary"  focused fullWidth required />
            </Box>
            </Grid>

            <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
             <ImageUpload/>
            </Box>
            </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Request
            </Button>
            
 


            
          </Box>
          
          
        </Box>
        
      
      </Container>
    
    
     
      </Fragment>
    
  );
  
  
}

const top20Vegetables = [
    { label: 'Carrots' },
    { label: 'Eggplant'},
    { label: 'Cabbage'},
    { label: 'Cauliflower'},
   
    
   
  ];

  const top6EconomicCenters = [
    { label: 'Colombo' },
    { label: 'Dambulla'},
    { label: 'Kilinochchi'},
    { label: 'Piliyandala'},
    { label: 'Veyangoda'},
    { label: 'Welisara'},
   
    
   
  ];
  