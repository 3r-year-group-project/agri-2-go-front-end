import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

import { Autocomplete, ButtonGroup, CssBaseline, InputLabel, MenuItem, Select, Stack, styled, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import { useSearchParams } from "react-router-dom";

import { FARMER_SECTIONS } from '../../../constants';

import axios from 'axios';

import { useAuth0 } from "@auth0/auth0-react";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import swal from 'sweetalert';



export default function Transporters() {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const [openConfirm,setOpenConfirm] = useState(false);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [vehicles, setVehicles] = useState([]);
    const [order, setOrder] = useState({
        orderId: searchParams.get("id"),
        cropName: searchParams.get("vege"),
        dealDate: searchParams.get("dealdate"),
        quantity: searchParams.get("quantity"),
        market: searchParams.get("market"),
        distance: '',
        vehicleId: '',
        vehicleCost:''

    });

    let vehicleId = '';
    let vehicleCost = '';
    const handleConfirmOpen = () => {
      setOpenConfirm(true);
  }

  const handleConfirmClose = () => {
    setOpenConfirm(false);
  }
    function routeToPage(page) {
      navigate(`/farmer/dash/${page}`);}
    
      function distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
          return 0;
        }
        else {
          var radlat1 = Math.PI * lat1/180;
          var radlat2 = Math.PI * lat2/180;
          var theta = lon1-lon2;
          var radtheta = Math.PI * theta/180;
          var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
            dist = 1;
          }
          dist = Math.acos(dist);
          dist = dist * 180/Math.PI;
          dist = dist * 60 * 1.1515;
          if (unit=="K") { dist = dist * 1.609344 }
          if (unit=="N") { dist = dist * 0.8684 }
          return dist;
        }
      }

    React.useEffect(() => {
      axios.get('/api/farmer/requests/getLocation/'+user.email).then((response) => {
        setOrder((old) =>{return {...old, distance: Math.round(distance(response.data.data[0].latitude, response.data.data[0].longitude, searchParams.get("lat"), searchParams.get("lon"), "K"))
        }});
        axios.post('/api/farmer/requests/getBestTransporters', 
          {id:searchParams.get("id"), 
          lat:response.data.data[0].latitude, 
          lon:response.data.data[0].longitude,
          dealDate:searchParams.get("dealdate"),
          quantity : searchParams.get("quantity"),
          distance: Math.round(distance(response.data.data[0].latitude, response.data.data[0].longitude, searchParams.get("lat"), searchParams.get("lon"), "K"))
        })
          .then((res) => {
              console.log(res.data.data);
              setVehicles(res.data.data);
          });

      });
      
    },[]);

    const sendRequest = () => {
      console.log({id:vehicleId, cost:vehicleCost});
      axios.post('/api/farmer/requests/sendRequest', 
      {id:searchParams.get("id"), 
      vehicleId:order.vehicleId,
      dealDate:searchParams.get("dealdate"),
      cost:order.vehicleCost,
      quantity : searchParams.get("quantity"),
      distance: order.distance,
      market: searchParams.get("market"),
      email: user.email
    })
      .then((res) => {
        swal("Successful!", "You Send a request!", "success");
      });
    };


return (
    <Fragment>
    <Container component="main">
      
        <CssBaseline  />
        {/* <Typography variant="h5" sx={{color: '#075E54'}}>Order Details</Typography> */}
        <Box
          sx={{
            marginTop: 5,
            marginBottom:3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
          }}
        >
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Product</TableCell>
                    <TableCell align="right">Market</TableCell>
                    <TableCell align="right">Quantity&nbsp;(kg)</TableCell>
                    <TableCell align="right">Distance&nbsp;(Km)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow
                    key={order.dealDate}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {order.dealDate}
                    </TableCell>
                    <TableCell align="right">{order.cropName}</TableCell>
                    <TableCell align="right">{order.market}</TableCell>
                    <TableCell align="right">{order.quantity}</TableCell>
                    <TableCell align="right">{order.distance}</TableCell>
                    </TableRow>
                {/* {rows.map((row) => (
                    <TableRow
                    key={row.date}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.date}
                    </TableCell>
                    <TableCell align="right">{row.product}</TableCell>
                    <TableCell align="right">{row.stockbuyername}</TableCell>
                    <TableCell align="right">{row.market}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    </TableRow>
                ))} */}
                </TableBody>
            </Table>
            </TableContainer>  
        </Box>       
      
      <Typography variant="h5" sx={{color: '#075E54'}}>Suggested Transportation Options</Typography>
      <Grid  container spacing={4} sx={{mt: 1, mb: 4}} alignItems="stretch">
        {vehicles.map((vehicle) => {
          var vehicleName = "";
          // eslint-disable-next-line default-case
          switch(vehicle.type){
            case 1:
              vehicleName = "MotorCycle";
              break;
            case 2:
              vehicleName = "Three wheel";
              break;
            case 3:
              vehicleName = "Car";
              break;
            case 4:
              vehicleName = "Van";
              break;
            case 5:
              vehicleName = "Lorry";
              break;
            case 6:
              vehicleName = "Other";
              break;
            
          }
          console.log(vehicleName);
          return (<Grid item xs={12} md={12} lg={12} sx={{display: 'flex'}}>
          <Box>handleConfirmOpen
                <Card sx={{ display: 'flex', height: 200, backgroundColor: '#fff', boxShadow: 2 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 300, height: 200}}
                    image={vehicle.image}
                    alt={vehicleName}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '2 0 auto' , pl: 10 , pt: 5 }}>
                      <Typography component="div" variant="h5" color="primary">
                        {vehicleName}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Recommended for your order
                      </Typography>
                      <Typography component="div" variant="h6" sx={{color: 'red'}}>
                        {Math.round(vehicle.cost)} &nbsp;LKR
                      </Typography>
                    </CardContent>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', m: 5}}>
                      <Stack direction="row" spacing={4}>
                          {/* <Button variant="contained" color="info" size="small" sx={{padding: 2}} onClick={() => routeToPage(FARMER_SECTIONS.VIEWTRANSPORTER)}>
                              Details 
                          </Button> */}
                          
                          <Button variant="contained" color="success" size="small" sx={{padding: 2}} onClick={()=>{
                            handleConfirmOpen();
                            setOrder( {...order, vehicleId: vehicle.id, vehicleCost: vehicle.cost});
                          }}>
                              Send Request
                          </Button> 
                          </Stack>
                    </Box>                    
                </Card>
          </Box>                  
      </Grid>)
        })}

        {/* <Grid item xs={12} md={12} lg={12} sx={{display: 'flex'}}>
            <Box>
                  <Card sx={{ display: 'flex', height: 200, backgroundColor: '#fff', boxShadow: 2 }}>
                  <CardMedia
                      component="img"
                      sx={{ width: 300, height: 200}}
                      image="https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post-photo/gallery/faw-multicarry-5f0d9e0988272.jpg"
                      alt="Lorry-Large"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '2 0 auto' , pl: 10 , pt: 5 }}>
                        <Typography component="div" variant="h5" color="primary">
                          LORRY
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Recommended for your quantity
                        </Typography>
                        <Typography component="div" variant="h6" sx={{color: 'red'}}>
                          21000LKR
                        </Typography>
                      </CardContent>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', m: 5}}>
                        <Stack direction="row" spacing={4}>
                            <Button variant="contained" color="info" size="small" sx={{padding: 2}}>
                                Details 
                            </Button>
                            
                            <Button variant="contained" color="success" size="small" sx={{padding: 2}}>
                                Send Request
                            </Button> 
                            </Stack>
                      </Box>                    
                  </Card>
            </Box>                  
        </Grid> */}
        {/* <Button variant='outlined' size="large" sx={{ mt: 4}} onClick={() => routeToPage(FARMER_SECTIONS.ORDERS)}>Back</Button> */}

        


                  
                  
                  

               
                
      </Grid>
              
      
      <Dialog open={openConfirm} onClose={handleConfirmClose}>
        <DialogTitle style={{backgroundColor: 'white', color: 'black'}}>Send tranporter request</DialogTitle>
        <DialogContent style={{backgroundColor: 'white', color: 'black'}}>
          <DialogContentText>
            <h3>Confirm to send a request to this transporter</h3>
            
          </DialogContentText>
          </DialogContent>
        <DialogActions style={{backgroundColor: 'white'}}>
          <Button variant="contained" color="error" onClick={handleConfirmClose}>Cancel</Button>
          <Button onClick={()=>{sendRequest();handleConfirmClose();}} variant="outlined" color="secondary">Confirm</Button>
        </DialogActions>
      </Dialog>
              
              
              
         

      
        </Container>
    
    
     
      </Fragment>
    
  );
  
  
}


  