import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

import { Autocomplete, Avatar, ButtonGroup, CardHeader, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputLabel, List, ListItem, ListItemText, MenuItem, Select, Stack, styled, Typography } from '@mui/material';

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

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';

export default function StockBuyerOrders() {
    const [open, setOpen] =React.useState(false);

    const handleClickOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }
    return (
        <Fragment>
        <Container component="main">
        <CssBaseline  />
        <Typography variant="h5" sx={{color: '#075E54', mt: 4}}>My Orders</Typography>
        <Grid  container spacing={4} sx={{mt: 1, mb: 4}} alignItems="stretch">

        <Grid item xs={10} md={10} lg={10} sx={{display: 'flex'}}>
                <Box>
                    <Card sx={{ display: 'flex', height: 200, backgroundColor: '#fff', boxShadow: 2 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 300, height: 200}}
                        image="https://foodandnutrition.org/wp-content/uploads/Savor-Carrots-780x520.jpg"
                        alt="Lorry-Large"
                        />
                        <Grid container spacing={0.5}>
                            <Grid item>
                                <CardContent sx={{ flex: '2 0 auto' , pl: 10 , pt: 2 }}>
                                    <Typography component="div" variant="h5" color="primary">Carrot</Typography>
                                    <Typography variant="subtitle1" color="text.secondary">200kg from Siril Mendis</Typography>
                                    <Typography component="div" variant="body1" sx={{color: 'red'}}>Pending</Typography>
                                </CardContent>
                            </Grid>

                            <Grid item>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 10, mb: 2}}>
                                    <Stack direction="row" spacing={4}>
                                        <Button variant="contained" color="info" size="small" sx={{padding: 1.5}} onClick={handleClickOpen}>
                                            Details 
                                        </Button>
                                        <Button variant="contained" color="error" size="small" sx={{padding: 1.5}} startIcon={<CloseIcon />}>
                                            Mark as Not Received
                                        </Button> 
                                        
                                        <Button variant="contained" color="success" size="small" sx={{padding: 1.5}} startIcon={<CheckIcon />}>
                                            Mark as Received
                                        </Button> 
                                    </Stack>
                                </Box> 
                            </Grid>
                        </Grid>   
                    </Card>
                </Box>                  
            </Grid>
            

            <Grid item xs={10} md={10} lg={10} sx={{display: 'flex'}}>
                <Box>
                    <Card sx={{ display: 'flex', height: 200, backgroundColor: '#fff', boxShadow: 2 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 300, height: 200}}
                        image="https://www.dailynews.lk/sites/default/files/news/2017/01/22/z_p32-brinjal-01.jpg"
                        alt="Lorry-Large"
                        />
                        <Grid container spacing={0.5}>
                            <Grid item>
                                <CardContent sx={{ flex: '2 0 auto' , pl: 10 , pt: 2 }}>
                                    <Typography component="div" variant="h5" color="primary">Brinjal</Typography>
                                    <Typography variant="subtitle1" color="text.secondary">200kg from Nimal Perera</Typography>
                                    <Typography component="div" variant="body1" sx={{color: 'red'}}>Pending</Typography>
                                </CardContent>
                            </Grid>

                            <Grid item>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 10, mb: 2}}>
                                    <Stack direction="row" spacing={4}>
                                        <Button variant="contained" color="info" size="small" sx={{padding: 1.5}} onClick={handleClickOpen}>
                                            Details 
                                        </Button>
                                        <Button variant="contained" color="error" size="small" sx={{padding: 1.5}} startIcon={<CloseIcon />}>
                                            Mark as Not Received
                                        </Button> 
                                        
                                        <Button variant="contained" color="success" size="small" sx={{padding: 1.5}} startIcon={<CheckIcon />}>
                                            Mark as Received
                                        </Button> 
                                    </Stack>
                                </Box> 
                            </Grid>
                        </Grid>   
                    </Card>
                </Box>                  
            </Grid>

        </Grid>
    </Container>

    <Dialog open={open} onClose={handleClose} fullWidth
        maxWidth="sm">
            <DialogContent>

            <DialogTitle style={{marginLeft:'-10px',fontSize:'22px',}}>
                Order Details
            <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>            
            </DialogTitle>

                <DialogContentText style={{marginLeft:'15px',fontSize:'17px', color: '#999'}}>
                    Details about your order.
                </DialogContentText>
                <br />

                <List dense fullWidth>
                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Date</Typography></ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'#ffff',}}>2022-09-15</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Order Number</Typography></ListItemText>
                        <ListItemText><Typography sx={{color:'#ffff',}}>121</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Farmer Name</Typography></ListItemText>
                        <ListItemText><Typography sx={{color:'#ffff',}}>K.U. Ashmitha</Typography></ListItemText>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}> <Typography sx={{color:'#ffff',}}>Location</Typography></ListItemText>
                        <ListItemText> <Typography sx={{color:'#ffff',}}>Kandy</Typography> </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Category</Typography></ListItemText>
                        <ListItemText style={{color:'#666',}}><Typography sx={{color:'#ffff',}}>Carrot</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Quantity</Typography> </ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'#ffff',}}>500kg</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Price</Typography> </ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'#ffff',}}>3000LKR</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Status</Typography> </ListItemText>
                        <ListItemText style={{color:'#666',}}><Typography sx={{color:'#ffff',}}>Pending</Typography></ListItemText>
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>

        
        
        
        
</Fragment>
        
    );
    
  
}


  