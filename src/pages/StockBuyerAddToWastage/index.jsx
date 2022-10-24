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
import { useParams } from "react-router-dom";
import axios from "axios";
import { Autocomplete } from '@mui/material';


const wastageQuality = ["Rotten","About to Rot","Peels","Slurries","Animal Fodder"];



export default function AddToWastage() {

  const [data,setData] = useState({
    quantity:'',
    quality:'',
    price:'',
  })

  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const  {id,vegetable}  = useParams(); 

  const handleQuantity = (e) => {
    setData({...data,quantity:e.target.value});
  }


  const handleQuality = (e) => {
    setData({...data,quality:e.target.value});
  }

  const handlePrice = (e) => {
    setData({...data,price:e.target.value});
  }

  // const handelVegetable = (e) =>{
    
  // }


 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id)
    console.log(data);
    axios.post('/api/stockbuyer/stocks/addwastagedetails',{data,id,vegetable})
    .then(res => {
      if(res.status===200){
        let path = `/stockbuyer/dash/stocks`; 
        navigate(path);
      }
      
    })
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
                    alignItems: 'center',}} variant="h6" component="h2">Wastage Details</Typography>
            
                  
              </Grid>
            
              <Grid item xs={12} >
              <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField value={vegetable} label="Vegetable" color="secondary" style={{color:"green"}} focused fullWidth required />

                  
            
                  </Box>
              </Grid>
              
            <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Wastage Quantity" color="secondary"  focused fullWidth required onChange={handleQuantity} />
            
                  </Box>
                </Grid>

                <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Price" color="secondary"  focused fullWidth required onChange={handlePrice} />
            
                  </Box>
                </Grid>   
                <Grid item xs={12}>
            <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
            <Autocomplete
                disablePortal
                id="combo-box-demo1"
                onSelect={handleQuality}
                options={wastageQuality}
                renderInput={(params) => <TextField {...params} label="Vegetable Category" color="secondary"  focused fullWidth required />}
            />
            </Box>
            </Grid>
                
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Add to Wastage
            </Button>
            
 


            
          </Box>
          
          
        </Box>
        
      
      </Container>
    
    
     
      </Fragment>
    
  );
  
  
}