import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


import Chart from './chart';

import PieChart from './pieChart';
import { Typography } from '@mui/material';




const mdTheme = createTheme();

export default function DashboardContent() {
  const [open, setOpen] = React.useState(true);
 

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
                  <Chart title="Price fluctuation for last 2 weeks"  yAxis="Price" data=""/>
                </Paper>
                
              </Grid>
              <Grid item xs={12} md={12} lg={12}>

                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 480,
                    
                  }}
                  maxWidth
                >
                  <Typography variant='h5'>Expected Transportational Costs</Typography>
                </Paper>
                
              </Grid>
          
              
              
              
            </Grid>
          
          </Container>
        </Box>
     
    </ThemeProvider>
  );
}

