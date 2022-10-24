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

export default function DashboardContent(props) {
  const [open, setOpen] = React.useState(true);

  const userType = {
    admin:1,
    customer:2,
    farmer:3,
    gardener:4,
    stock:5, 
    grocery:6,
    transporter:7,
    wastage:8,
    sum:'SUM'
  }

  function userCountFor(user_type_name){
    const userTypeID = userType[user_type_name]
    if(!userTypeID) return "User Type Not Found"
    for(let row of props.user_data){
      if(row.user_type == userTypeID){
        return row.user_count
      }
    }
    return 0
  }

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
                  <Cards title="Total Users" value={userCountFor("sum")} date={props.curr_date}/>
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
                  <Cards title="Farmers" value={userCountFor("farmer")} date={props.curr_date}/>
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
                  <Cards title="Stock Buyers" value={userCountFor("stock")} date={props.curr_date}/>
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
                  <Cards title="Wastage Recycle Center" value={userCountFor("wastage")} date={props.curr_date}/>
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
                  <Cards title="Transporters" value={userCountFor("transporter")} date={props.curr_date}/>
                </Paper>
              </Grid>
              {/* Chart */}
              {/* <Grid item xs={12} md={8} lg={6}>

                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 480,
                    width:520,
                  }}
                >
                  <Chart title="Daily Sells" date="11 August, 2022" yAxis="Sales" data=""/>
                </Paper>
                
              </Grid> */}
              
             
             
              
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
                  <PieChart title="Users" data={props.user_data}/>
                </Paper>
              </Grid>
              
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column',width:520 }}>
                  <Orders best_selling_data={props.best_selling_data}/>
                </Paper>
              </Grid>
            </Grid>
          
          </Container>
        </Box>
     
    </ThemeProvider>
  );
}

