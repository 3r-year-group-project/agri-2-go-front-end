import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '../../../components/Orders/card';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const mdTheme = createTheme();

export default function CenteredGrid() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [orders,setOrders] = React.useState([]);
  const [insert,setInsert] = React.useState(false);

  React.useEffect(() => {
    if(!isLoading) {
      axios.post('/api/farmer/requests/orders',{email:user.email})
      .then(res => {
        setOrders(res.data.data);
        console.log(res.data.data);
      });
    }
  },[insert]);
  
  return (
    <ThemeProvider theme={mdTheme}>

    <div style={{ background: 'white', padding:'5%',minHeight:'100%'}} >
        <Box
        component="span"
        m={1}
        display="inline-block"
      
        >
            <CssBaseline />
            <Grid
                container
                spacing={2}
                direction="column"
               
                >
                  {orders.map((element) => (
                    <Grid item xs={12} md={6}>
                      <Card 
                        orderId={element.request_id}
                        marketName={element.economic_center} 
                        cropName={element.vegetable} 
                        quantity={element.quantity} 
                        price={element.price}
                        orderCode={element.code}
                        dealDate={element.deal_date.substring(0,10)}
                        longitude={element.longitude}
                        latitude={element.latitude}
                      />
                    </Grid>
                  ))}
                
            </Grid>
        </Box>
    </div>
    </ThemeProvider>
  );
}
