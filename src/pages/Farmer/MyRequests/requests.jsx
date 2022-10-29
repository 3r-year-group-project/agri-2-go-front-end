import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from './card';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const mdTheme = createTheme();


export default function CenteredGrid() {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [requests,setRequests] = React.useState([]);
  const [limit,setLimit] = React.useState([]);
  const [count,setCount] = React.useState([]);
  const [insert,setInsert] = React.useState(false);
  
  React.useEffect(() => {
    axios.post('/api/farmer/requests/sentrequests',{email:user.email})
    .then(res => {
      setRequests(res.data.data);
    });
    axios.post('/api/farmer/requests/declines_limit',{email:user.email})
    .then(res => {
      setLimit(res.data.data);
    });
    axios.post('/api/farmer/requests/declines_count',{email:user.email})
    .then(res => {
      setCount(res.data.data);
    });
  },[insert]);
  
  function declinesLimit(id){
    try{
      return limit.find(({ eco_center_id }) => eco_center_id === id).shop_count;
    }catch{
      return 1;
    }
  }
  
  function declinesCount(id){
    try{
      return count.find(({ request_id }) => request_id === id).declines_count;
    }catch{
      return 0;
    }
  }
  
  return (
    <ThemeProvider theme={mdTheme}>

    <div style={{ background: 'white', padding:'5%',minHeight:'100%'}} >
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
                direction="column"
                justifyContent="center"
                alignItems="center"
                >
                  {requests.map((element) => (
                    <Card 
                      requestId = {element.request_id}
                      declines={declinesCount(element.request_id)} 
                      limit={declinesLimit(element.economic_center_id)} 
                      marketName={element.economic_center} 
                      cropName={element.vegetable} 
                      quantity={element.quantity} 
                      price={element.price}
                    />
                  ))}
            </Grid>
        </Box>
    </div>
    </ThemeProvider>
  );
}

