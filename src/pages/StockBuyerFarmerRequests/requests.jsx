import * as React from 'react';
import { useState,useEffect } from "react"
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from './card';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
const mdTheme = createTheme();

export default function FarmerRequests() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [data,setData]=useState([]);
  const [images,setImages]=useState([]);
  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}
  async function getFarmerRequest() {
    axios.post('/api/stockbuyer/requesthandler/requestlist',{email:user.email})
        .then(res => {
            setData(res.data.data);
            setImages(res.data.img);
          
          });
          

  }
  useEffect(()=>{

    getFarmerRequest();
    
  },[])
  // console.log('ddd',data)
  return (

    <ThemeProvider theme={mdTheme}>

    <div style={{  padding:'5%',minHeight:'100%'}} >
        <Box
        component="span"
        m={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        >
            <CssBaseline />
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                  {data.map((d)=>
                <Card getFarmerRequest={getFarmerRequest} itemData={images.filter(e=>e.selling_request_id==d.selling_req_id)} farmerPlace={d.name} farmerDistance="10km" farmerName={d.first_name+" "+d.last_name} id={d.selling_req_id} cropName={d.vegetable} quantity={d.quantity} price={d.price} minAdvance="Rs.30" date={formatDate(d.date)}/>
               
                )}
            </Grid>
        </Box>
    </div>
    </ThemeProvider>
  );
}
