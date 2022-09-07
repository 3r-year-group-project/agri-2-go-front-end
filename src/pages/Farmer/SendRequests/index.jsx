import Button from '@mui/material/Button';
import React, { Fragment, useEffect, useState } from 'react';
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
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";



export default function SendRequests() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");

  const[insert,setInsert] = React.useState(false);

  const [data,setData] = React.useState({
    price:'',
    quantity:'',
    ecocenter:'',
    vegetable:'',
  
  });
  const [vegData,setVegData] = React.useState({
    id:'',
    vegetable:'',
  
  });

  const [ecoCenterData,setEcoCenterData] = React.useState({
    id:'',
    ecoCenterName:'',
  
  });

  
  

  let top20Vegetables = [];
  for(let i=0;i<vegData.length;i++){
    top20Vegetables.push(vegData[i].name)
  }

  let top6EconomicCenters = [];
  for(let i=0;i<ecoCenterData.length;i++){
    top6EconomicCenters.push(ecoCenterData[i].name)
  }
    
  

    

  // useEffect(() => {
  //   console.log("Runnin!!!");
  // }, []);
  
  const handlePrice = (e) => {
    setData({...data,price:e.target.value})
  }
  
  const handleQuantity = (e) => {
    setData({...data,quantity:e.target.value})
  }
  
  const handleVegetable = (e) => {
    setData({...data,vegetable:e.target.value})
  }

  const handleEcoCenter = (e) => {
        setData({...data,ecocenter:e.target.value})
  }

  const handleSubmit = () => {
    console.log("data gonna be uploads!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",data);
    if(!Object.values(data).includes("")){
        axios.post('/api/farmer/sellrequest/insert',{...data,email:user.email})
            .then(res => {
                setInsert(true);
            });
    }
    
  }

  
  React.useEffect(() => {
    console.log("data gonna be uploads!!!");
    axios.post('/api/farmer/sellrequest/getVegetableList')
        .then(res => {
          setVegData(res.data.data);});
    axios.post('/api/farmer/sellrequest/getEconomicCentersList')
          .then(res => {
          setEcoCenterData(res.data.data);});   
  },[insert]);
  

// React.useEffect(() => {
//   console.log("data gonna be uploads!!!");
//   axios.post('/api/farmer/sellrequest/getEconomicCentersList')
//       .then(res => {
//         setEcoCenterData(res.data.data);});
// },[insert]);


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
          <Box component="form" noValidate sx={{ mt: 5,mb:5}}>
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
                id="combo-box-demo1"
                onSelect={handleVegetable}
                options={top20Vegetables}
                renderInput={(params) => <TextField {...params} label="Vegetable Category" color="secondary"  focused fullWidth required />}
            />
            </Box>
            </Grid>

            <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
            <Autocomplete
                disablePortal
                id="combo-box-demo2"
                onSelect={handleEcoCenter}
                options={top6EconomicCenters}
                renderInput={(params) => <TextField {...params} label="Dedicated Economic Center" color="secondary"  focused fullWidth required />}
            />
            </Box>
            </Grid>
              
            <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Selling Price (Rs)" color="secondary" onChange={handlePrice}  focused fullWidth required />
            </Box>
            </Grid>

            <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Quantity (kg)" color="secondary" onChange={handleQuantity}  focused fullWidth required />
            </Box>
            </Grid>

            <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
             <ImageUpload/>
            </Box>
            </Grid>
            </Grid>
            <Button
              onClick={handleSubmit}
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



  


  