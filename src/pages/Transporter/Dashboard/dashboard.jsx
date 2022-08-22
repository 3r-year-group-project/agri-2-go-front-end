import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


import Chart from './chart';
import Cards from './card';
import Orders from './table';
import PieChart from './pieChart';




const mdTheme = createTheme();

export default function DashboardContent() {
  const [open, setOpen] = React.useState(true);
 

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4,ml:0,mr:0 }}>
            <Grid container spacing={3}>
               {/* Recent Cards */}
               <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Cards title="Transport Requests" value="5" date="on 11 August, 2022" linkname="View requests" link=""/>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Cards title="My Vehicles" value="3" date="on 11 August, 2022" linkname="View vehicles" link=""/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Cards title="Scheduled Trips" value="4" date="on 11 August, 2022" linkname="View my schedule" link=""/>
                </Paper>
              </Grid>
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Cards title="Total Users" value="3049" date="on 11 August, 2022" linkname="View users" link=""/>
                </Paper>
              </Grid> */}
              
              <Grid item xs={12} md={8} lg={6}>

                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                    width:520,
                  }}
                >
                  <Chart title="Monthly Statistics" date="11 August, 2022" yAxis="Orders" data=""/>
                </Paper>
                
              </Grid>
              
             
             
              
              {/* Recent Cards */}
              {/* <Grid item xs={12} md={4} lg={2}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 480,
                    width:520,
                  }}
                >
                  <PieChart title="Users"/>
                </Paper>
              </Grid> */}
              
              {/* Recent Orders */}
              <Grid item xs={12} md={4} lg={2}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column',width:520 }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          
          </Container>
        </Box>
     
    </ThemeProvider>
  );
}

