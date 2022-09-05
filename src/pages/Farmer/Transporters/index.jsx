import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

import { Autocomplete, ButtonGroup, CssBaseline, InputLabel, MenuItem, Select, Stack, styled, Typography } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';

// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
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

function createData(date, ordernumber, product, stockbuyername, market, quantity, price) {
    return { date, ordernumber, product, stockbuyername, market, quantity, price };
  }

const rows = [
  createData('2022-08-10', 159, 'Carrot', 'Nimal Perera', 'Dambulla', '500', 3000),
];



export default function Transporters() {

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
                    <TableCell align="right">Order Number</TableCell>
                    <TableCell align="right">Product</TableCell>
                    <TableCell align="right">Stock Buyer Name</TableCell>
                    <TableCell align="right">Market</TableCell>
                    <TableCell align="right">Quantity&nbsp;(kg)</TableCell>
                    <TableCell align="right">Price&nbsp;(Rs)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.date}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.date}
                    </TableCell>
                    <TableCell align="right">{row.ordernumber}</TableCell>
                    <TableCell align="right">{row.product}</TableCell>
                    <TableCell align="right">{row.stockbuyername}</TableCell>
                    <TableCell align="right">{row.market}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>  
        </Box>       
      
      <Typography variant="h5" sx={{color: '#075E54'}}>Suggested Transportation Options</Typography>
      <Grid  container spacing={4} sx={{mt: 1, mb: 4}} alignItems="stretch">
        <Grid item xs={12} md={12} lg={12} sx={{display: 'flex'}}>
            <Box>
                  <Card sx={{ display: 'flex', height: 200 }}>
                  <CardMedia
                      component="img"
                      sx={{ width: 300, height: 200}}
                      image="https://visor.ph/wp-content/uploads/2019/09/suzuki-carry-main1.jpg"
                      alt="Lorry-Large"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '2 0 auto' , pl: 10 , pt: 5 }}>
                        <Typography component="div" variant="h5">
                          LORRY
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Large - Recomendded for quantities larger than 100kgs
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
        </Grid>

        <Grid item xs={12} md={12} lg={12} sx={{display: 'flex'}}>
            <Box>
                  <Card sx={{ display: 'flex', height: 200 }}>
                  <CardMedia
                      component="img"
                      sx={{ width: 300, height: 200}}
                      image="https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post-photo/gallery/faw-multicarry-5f0d9e0988272.jpg"
                      alt="Lorry-Large"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '2 0 auto' , pl: 10 , pt: 5 }}>
                        <Typography component="div" variant="h5">
                          LORRY
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                          Large - Recomendded for quantities larger than 100kgs
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
        </Grid>

        


                  
                  
                  

               
                
      </Grid>
              
          
              
              
              
         

      {/* <Grid  container spacing={8} >
        <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"25px"}}>
                    <img
                    className="img"
                    src="https://lal.lk/wp-content/uploads/2017/02/thump2.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}
                    sx={{alignContent: 'center', alignItems: 'center'}}
                    >
                    <Typography variant="h6" align= "center" sx={{color: '#fff', }}>ECOMET 1212</Typography>
                    <Typography variant="body2" align= "center" sx={{color: '#999', }}>5660 cc</Typography>
                    <Typography variant="body2" align= "center" sx={{color: 'red', }}>100 per 1km</Typography>
                    <Box
                    component="span"
                    m={1}
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    
                    >
                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginTop:"10px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"45px" , fontSize:"10px"}}>
                            Details 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{fontSize:"10px"}}>
                            Send Request
                        </Button> 
                        </ButtonGroup>
                        </Box>
                    </Box>                                    
                </Paper>
            </Grid>

            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"25px"}}>
                    <img
                    className="img"
                    src="https://lal.lk/wp-content/uploads/2017/02/thump2.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}
                    sx={{alignContent: 'center', alignItems: 'center'}}
                    >
                    <Typography variant="h6" align= "center" sx={{color: '#fff', }}>ECOMET 1212</Typography>
                    <Typography variant="body2" align= "center" sx={{color: '#999', }}>5660 cc</Typography>
                    <Typography variant="body2" align= "center" sx={{color: 'red', }}>100 per 1km</Typography>
                    <Box
                    component="span"
                    m={1}
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    
                    >
                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginTop:"10px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"45px" , fontSize:"10px"}}>
                            Details 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{fontSize:"10px"}}>
                            Send Request
                        </Button> 
                        </ButtonGroup>
                        </Box>
                    </Box>                                    
                </Paper>
            </Grid>

            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"25px"}}>
                    <img
                    className="img"
                    src="https://lal.lk/wp-content/uploads/2017/02/thump2.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}
                    sx={{alignContent: 'center', alignItems: 'center'}}
                    >
                    <Typography variant="h6" align= "center" sx={{color: '#fff', }}>ECOMET 1212</Typography>
                    <Typography variant="body2" align= "center" sx={{color: '#999', }}>5660 cc</Typography>
                    <Typography variant="body2" align= "center" sx={{color: 'red', }}>100 per 1km</Typography>
                    <Box
                    component="span"
                    m={1}
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    
                    >
                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginTop:"10px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"45px" , fontSize:"10px"}}>
                            Details 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{fontSize:"10px"}}>
                            Send Request
                        </Button> 
                        </ButtonGroup>
                        </Box>
                    </Box>                                    
                </Paper>
            </Grid>

            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"25px"}}>
                    <img
                    className="img"
                    src="https://lal.lk/wp-content/uploads/2017/02/thump2.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}
                    sx={{alignContent: 'center', alignItems: 'center'}}
                    >
                    <Typography variant="h6" align= "center" sx={{color: '#fff', }}>ECOMET 1212</Typography>
                    <Typography variant="body2" align= "center" sx={{color: '#999', }}>5660 cc</Typography>
                    <Typography variant="body2" align= "center" sx={{color: 'red', }}>100 per 1km</Typography>
                    <Box
                    component="span"
                    m={1}
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    
                    >
                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginTop:"10px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"45px" , fontSize:"10px"}}>
                            Details 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{fontSize:"10px"}}>
                            Send Request
                        </Button> 
                        </ButtonGroup>
                        </Box>
                    </Box>                                    
                </Paper>
            </Grid>

            <Grid item md={3}>
            <Paper elevation={3} style={{marginTop:"25px"}}>
                    <img
                    className="img"
                    src="https://lal.lk/wp-content/uploads/2017/02/thump2.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}
                    sx={{alignContent: 'center', alignItems: 'center'}}
                    >
                    <Typography variant="h6" align= "center" sx={{color: '#fff', }}>ECOMET 1212</Typography>
                    <Typography variant="body2" align= "center" sx={{color: '#999', }}>5660 cc</Typography>
                    <Typography variant="body2" align= "center" sx={{color: 'red', }}>100 per 1km</Typography>
                    <Box
                    component="span"
                    m={1}
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                    
                    >
                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginTop:"10px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"45px" , fontSize:"10px"}}>
                            Details 
                        </Button>
                        
                        <Button variant="contained" color="info" sx={{fontSize:"10px"}}>
                            Send Request
                        </Button> 
                        </ButtonGroup>
                        </Box>
                    </Box>                                    
                </Paper>
            </Grid>

           

        </Grid> */}
        </Container>
    
    
     
      </Fragment>
    
  );
  
  
}


  