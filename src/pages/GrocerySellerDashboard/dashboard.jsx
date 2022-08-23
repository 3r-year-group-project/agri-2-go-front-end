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
               
              {/* Chart */}
              <Grid item xs={12} md={8} lg={6}>

                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 480,
                    width:520,
                  }}
                >
                  <Chart title="Daily Sales" date="24 August, 2022" yAxis="Sales" data=""/>
                </Paper>
                
              </Grid>
              
             
             
              
              {/* Recent Cards */}
              <Grid item xs={12} md={4} lg={2}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 480,
                    width:520,
                  }}
                >
                  <PieChart title="Vegetables Sales"/>
                </Paper>
              </Grid>
              
              {/* Recent Orders */}
              <Grid item xs={12}>
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

