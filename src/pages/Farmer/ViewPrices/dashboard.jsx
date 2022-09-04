import * as React from 'react';
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

export default function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
 

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
                    height: 'auto',
                    
                  }}
                  maxWidth
                >
                  <Typography variant='h5'>Expected Transportational Costs</Typography>
                  <Box>
                  <Card sx={{ display: 'flex' }}>
                  <CardMedia
                      component="img"
                      sx={{ width: 250 }}
                      image="https://media.istockphoto.com/vectors/truck-carrying-vegetables-vector-id1355942308?k=20&m=1355942308&s=612x612&w=0&h=17JFbi-t44UJQYi87WeG3b3vfKReJShKLkdk-CBKOfk="
                      alt="Lorry-Large"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '2 0 auto' , pl: 20 , pt: 5 }}>
                        <Typography component="div" variant="h5">
                          Lorry
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Large - Recomendded for quantities larger than 100kgs
                        </Typography>
                      </CardContent>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 15, pb: 1 }}>
                      <Typography component="div" variant="h5">
                          21000LKR
                        </Typography>
                        
                      </Box>
                    
                  </Card>
                  </Box>

                  <Box>
                  <Card sx={{ display: 'flex' }}>
                  <CardMedia
                      component="img"
                      sx={{ width: 250 }}
                      image="https://thumbs.dreamstime.com/b/vegetable-truck-design-logo-illustration-110244152.jpg"
                      alt="Lorry-Small"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '2 0 auto' , pl: 20 , pt: 5 }}>
                        <Typography component="div" variant="h5">
                          Lorry
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Small - Recomendded for quantities smaller than 100kgs
                        </Typography>
                      </CardContent>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 15, pb: 1 }}>
                      <Typography component="div" variant="h5">
                          18000LKR
                        </Typography>
                        
                      </Box>
                    
                  </Card>
                  </Box>
                  <Box>
                  <Card sx={{ display: 'flex' }}>
                  <CardMedia
                      component="img"
                      sx={{ width: 250 }}
                      image="https://thumbs.dreamstime.com/b/realistic-van-organic-vegetables-natural-vegan-farm-food-delivery-service-vehicle-fresh-veggies-horizontal-realistic-van-175793307.jpg"
                      alt="Van"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '2 0 auto' , pl: 20 , pt: 5 }}>
                        <Typography component="div" variant="h5">
                          Van
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Recomendded for quantities smaller than 70kgs
                        </Typography>
                      </CardContent>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 23.5, pb: 1 }}>
                      <Typography component="div" variant="h5">
                          15000LKR
                        </Typography>
                        
                      </Box>
                    
                  </Card>
                  </Box>
                  <Box>
                  <Card sx={{ display: 'flex' }}>
                  <CardMedia
                      component="img"
                      sx={{ width: 250 }}
                      image="https://media.gettyimages.com/photos/delivery-man-riding-a-motorcycle-with-delivery-box-3d-rendering-picture-id1314333502?b=1&k=20&m=1314333502&s=170667a&w=0&h=pzL-Jvh63NTDP4Ri98pU5nArceKOBEXwDmmtZIGoMdM="
                      alt="Bike"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '2 0 auto' , pl: 20 , pt: 5 }}>
                        <Typography component="div" variant="h5">
                          Motor Bike
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Recomendded for quantities smaller than 30kgs
                        </Typography>
                      </CardContent>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 23.5, pb: 1 }}>
                      <Typography component="div" variant="h5">
                          8000LKR
                        </Typography>
                        
                      </Box>
                    
                  </Card>

                  </Box>
                  

                </Paper>
                
              </Grid>
          
              
              
              
            </Grid>
          
          </Container>
        </Box>
     
    </ThemeProvider>
  );
}

