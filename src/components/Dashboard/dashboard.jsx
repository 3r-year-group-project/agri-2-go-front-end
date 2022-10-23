import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import axios from "axios";


import Chart from './chart';
import Cards from './card';
import Orders from './table';
import PieChart from './pieChart';




const mdTheme = createTheme();

export default function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [userCounts, setUserCounts] = React.useState([]);
  const [insert,setInsert] = React.useState(false);

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

  React.useEffect(() => {
    axios.get('/api/farmer/dashboard/user_counts')
        .then(res => {
          setUserCounts(res.data.data);});
  },[insert]);

  function userCountForId(user_type_name){
    const userTypeID = userType[user_type_name]
    if(!userTypeID) return "User Type Not Found"
    for(let row of userCounts){
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
                  <Cards title="Total Users" value={userCountForId("sum")} date="on 11 August, 2022"/>
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
                  <Cards title="Farmers" value={userCountForId("farmer")} date="on 11 August, 2022"/>
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
                  <Cards title="Stock Buyers" value={userCountForId("stock")} date="on 11 August, 2022"/>
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
                  <Cards title="Wastage Recycle Center" value={userCountForId("wastage")} date="on 11 August, 2022"/>
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
                  <Cards title="Transporters" value={userCountForId("transporter")} date="on 11 August, 2022"/>
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
                  <PieChart title="Users" data={userCounts}/>
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

