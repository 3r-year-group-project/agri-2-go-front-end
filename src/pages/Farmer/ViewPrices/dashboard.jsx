import * as React from 'react';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';


import Chart from './chart';

import PieChart from './pieChart';
import { Typography } from '@mui/material';



const mdTheme = createTheme();

export default function DashboardContent(props) {
  
  const [expectedPrice, setExpectedPrice] = React.useState(0);
  const [distance, setDistance] = React.useState(0);
  const theme = useTheme();

  const expectedPriceFunc = (f, m) => {
    const farmerLocation = f
    const marketLocation = m
  
    const lat2 = farmerLocation[0].latitude; 
    const lon2 = farmerLocation[0].longitude; 
    const lat1 = marketLocation[0].latitude; 
    const lon1 = marketLocation[0].longitude;
    
    const R = 6371; // km 
    //has a problem with the .toRad() method below.
    const x1 = lat2-lat1;
    const dLat = x1 * Math.PI / 180;  
    const x2 = lon2-lon1;
    const dLon = x2 * Math.PI / 180;  
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                    Math.sin(dLon/2) * Math.sin(dLon/2);  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const d = R * c; 

    const priceList = {50:2, 150:14 ,250:79, 500:87, 750:79, 1000:87, 1500:75, 2000:97}
    for (const [key, value] of Object.entries(priceList)) {
        if (key > d){
          setExpectedPrice(d * value)
          setDistance(d)
          return
        }
    }
  }

  

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4,ml:0,mr:0 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12} >

                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 480, 
                    
                  }}
                  maxWidth
        
                >
                  <Chart title="Price fluctuation for last 2 weeks"  yAxis="Price" data={props.pData}/>
                </Paper>
                
              </Grid>
              <Grid item xs={12} md={12} lg={12}>

                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'auto',
                    
                  }}
                  maxWidth
                >
                  <Button
                    onClick={() => expectedPriceFunc(props.farmerLocation, props.marketLocation)}
                    type="submit"
                    fullWidth
                    disabled={props.farmerLocation == -1}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Calculate Expected Transportational Cost
                  </Button>
                  <Typography variant='h5'>
                    Distance: {distance | 0}km | 
                    Expected Transportational Cost: Rs.{expectedPrice | 0}
                  </Typography>

                </Paper>
                
              </Grid>
          
              
              
              
            </Grid>
          
          </Container>
        </Box>
     
    </ThemeProvider>
  );
}

