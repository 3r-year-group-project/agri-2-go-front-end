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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Input,FormControl} from '@mui/material';
import axios from 'axios';

export default function StockBuyerOrders() {
    const [openDetails, setOpen] =React.useState(false);
    const [openReceived, setOpenReceived] =React.useState(false);
    const [openNotReceived, setOpenNotReceived] =React.useState(false);

    const [reason, setNotReceivedReason] = React.useState('female');
    const handleNotReceivedReason = (event) => {
        setNotReceivedReason(event.target.value);
  };

    const handleClickOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const handleClickOpenReceived = () =>{
        setOpenReceived(true);
    }

    const handleCloseReceived = () =>{
        setOpenReceived(false);
    }
    const handleClickOpenNotReceived = () =>{
        setOpenNotReceived(true);
    }

    const handleCloseNotReceived = () =>{
        setOpenNotReceived(false);
    }
    return (
        <Fragment>
        <Container component="main">
        <CssBaseline  />
        <Typography variant="h5" sx={{color: '#075E54', mt: 4}}>My Orders</Typography>
        <Grid  container spacing={4} sx={{mt: 1, mb: 4}} alignItems="stretch">

        <Grid item xs={10} md={10} lg={10} sx={{display: 'flex',}}>
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
                                        <Button variant="contained" color="error" size="small" sx={{padding: 1.5}} startIcon={<CloseIcon />} onClick={handleClickOpenNotReceived}>
                                            Mark as Not Received
                                        </Button> 
                                        
                                        <Button variant="contained" color="success" size="small" sx={{padding: 1.5}} startIcon={<CheckIcon />}onClick={handleClickOpenReceived}>
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

    <Dialog open={openDetails} onClose={handleClose} fullWidth
        maxWidth="sm" PaperProps={{
            style: {
              backgroundColor: 'white',
              boxShadow: 'none',
              color:'black',
            },
          }} >
            <DialogContent >

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

                <DialogContentText style={{marginLeft:'15px',fontSize:'17px'}}>
                    Details about your order.
                </DialogContentText>
                <br />

                <List dense fullWidth>
                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Date</Typography></ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'black',}}>2022-09-15</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Order Number</Typography></ListItemText>
                        <ListItemText><Typography sx={{color:'black',}}>121</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Farmer Name</Typography></ListItemText>
                        <ListItemText><Typography sx={{color:'black',}}>K.U. Ashmitha</Typography></ListItemText>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}> <Typography sx={{color:'black',}}>Location</Typography></ListItemText>
                        <ListItemText> <Typography sx={{color:'black',}}>Kandy</Typography> </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Category</Typography></ListItemText>
                        <ListItemText style={{color:'#666',}}><Typography sx={{color:'black',}}>Carrot</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Quantity</Typography> </ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'black',}}>500kg</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Price</Typography> </ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'black',}}>3000LKR</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Status</Typography> </ListItemText>
                        <ListItemText style={{color:'#666',}}><Typography sx={{color:'black',}}>Pending</Typography></ListItemText>
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>

        {/* not received dialog box */}
        <Dialog open={openNotReceived} onClose={handleCloseNotReceived} fullWidth
        maxWidth="sm" PaperProps={{
            style: {
              backgroundColor: 'white',
              boxShadow: 'none',
              color:'black',
            },
          }}>
            <DialogContent>

            <DialogTitle style={{marginLeft:'-10px',fontSize:'22px',}}>
                Order Details
            <IconButton
            aria-label="close"
            onClick={handleCloseNotReceived}
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
               
                <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <FormControl >
     
      <div>
      <FormControl>
      
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={reason}
        onChange={handleNotReceivedReason}
      >
        <FormControlLabel value="not received yet" control={<Radio />} label="Not received yet" />
        <FormControlLabel value="received goods are not in expected quality" control={<Radio />} label="Received goods are not in expected quality" />
      </RadioGroup>
    </FormControl>
       
      </div>
      
<br/>
      <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={()=>{}} >CANCEL</Button>
      <Button variant="contained" type="submit" onClick={()=>{}} >SEND</Button>
      
    </Stack>
      <div/>
      </FormControl>
    </Box>
                   
            </DialogContent>
        </Dialog>



        {/* received dialog box */}
        <Dialog open={openReceived} onClose={handleCloseReceived} fullWidth
        maxWidth="sm" PaperProps={{
            style: {
              backgroundColor: 'white',
              boxShadow: 'none',
              color:'black',
            },
          }}>
            <DialogContent>

            <DialogTitle style={{marginLeft:'-10px',fontSize:'22px',}}>
                Order Details
            <IconButton
            aria-label="close"
            onClick={handleCloseReceived}
            sx={{
                position: 'absolute',
                right: 8,
                top: 5,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>            
            </DialogTitle>

                <DialogContentText style={{marginLeft:'15px',fontSize:'17px', color: '#999'}}>
                    Fill this details about your received order.
                </DialogContentText>
            

                <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <FormControl >
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Date"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"

         
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
      
          variant="standard"
          onChange={()=>{}}
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Quantuty (kg)"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"

         
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
      
          variant="standard"
          onChange={()=>{}}
        />
      </div>
      
     
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Unit Price(LKR/kg)"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
         
          
          
          variant="standard"
          onChange={()=>{}}
        />

      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Code"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
         
          
          
          variant="standard"
          onChange={()=>{}}
        />

      </div>
      <br/>

      <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={()=>{}} >CANCEL</Button>
      <Button variant="contained" type="submit" onClick={()=>{}} >Complete Payment</Button>
      
    </Stack>
      <div/>
      </FormControl>
    </Box>
   
            </DialogContent>
        </Dialog>




        
        
        
        
</Fragment>
        
    );
    
  
}


  