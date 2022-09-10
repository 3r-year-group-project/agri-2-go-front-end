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
  const [insert,setInsert] = React.useState(false);
  
  function limitCount(id){
    return limit.find(({ eco_center_id }) => eco_center_id === id).shop_count;
  }

  React.useEffect(() => {
    axios.post('/api/farmer/requests/sentrequests',{email:user.email})
    .then(res => {
      setRequests(res.data.data);
    });
  },[insert]);

  React.useEffect(() => {
    axios.post('/api/farmer/requests/declines_limit',{email:user.email})
    .then(res => {
      setLimit(res.data.data);
    });
  },[insert]);
  
  return (
    <ThemeProvider theme={mdTheme}>

    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
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
                    <Card declines={element.declines} limit={limitCount(element.economic_center_id)} marketName={element.economic_center} cropName={element.vegetable} quantity={element.quantity + "kg"} price={"Rs." + element.price}/>
                  ))}
            </Grid>
        </Box>
    </div>
    </ThemeProvider>
  );
}
