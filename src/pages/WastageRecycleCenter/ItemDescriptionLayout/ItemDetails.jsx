import React from 'react'
import { Alert, Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import Divider from '@mui/material/Divider';
import './itemDetails.css';
import MyButton from './MyButton';
import {useNavigate } from 'react-router-dom';
import { WASTAGE_RECYCLE_CENTER_SECTIONS } from '../../../constants';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function ItemDetails(props) {
    const navigate = useNavigate();
    const [open, setOpen] =React.useState(false);
    const [openMessage, setOpenMessage] =React.useState(false);
    const [pickUpDate, setPickUpDate] = React.useState()
    const { user, isAuthenticated, isLoading } = useAuth0();

    function routeToPage(page) {
      navigate(`/wastageRecycleCenter/dash/${page}`);
    }

    const captureDate = (value)=>[
        setPickUpDate(value)
    ]  

    const handleAcceptRequest = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const confirmAcceptRequest = async()=>{

        await axios.post('http://localhost:3002/api/wrc/wastage_add_request',{
            userInfo: user, 
            sellerInfo:props.sellerInfo, 
            orderInfo:props.orderInfo, 
            pickUpDate: pickUpDate,
            wastage_details_id: props.wastage_details_id

        })

        setOpenMessage(true);
    }
    const handleCloseMessage = () =>{
        setOpenMessage(false);
    }


  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}}>
    <Box width='60vw' margin="auto">
        <Card style={{height:'auto', margin:'10px  80px',borderRadius:'20px', backgroundColor: 'white'}}>
            <div className='basic-details-row'>
                <div>
                <CardContent>
                    <div style={{textAlign:'left', color: '#075E54'}}>
                    <Typography gutterBottom variant='h3' component='div'>
                        {props.title} 
                    </Typography>
             
                    </div>
                </CardContent>               

                </div>
                
                <Box sx={{justifyContent: 'right', alignItems: 'right', mt: 5}}>
                                  
                                <CardActions>
                                    <Button variant='contained' size='small' endIcon={<StarOutlineOutlinedIcon/>} sx={{backgroundColor:'#F57A38',color:'#fff'}}>Add Seller to Wishlist</Button>
                                </CardActions>
                  
                </Box>
                
            </div>    


            <div className='description-row'>

        
                <div className='seller-details-col'>


                    <CardContent>
                        <List dense sx={{ width: 550, maxWidth: 600,}}>
                            <Divider color='#9df58c'/>
                            <ListItem style={{padding:'10px',}}>
                                <ListItemText primary="Seller Name" style={{textAlign:'right',paddingRight:'80px',}}/>
                                <ListItemText primary={props.sellName} style={{textAlign:'left',paddingLeft:'120px',}}/>
                            </ListItem>
                            

                            <ListItem style={{padding:'10px',}}>
                                <ListItemText primary="Location" style={{textAlign:'right',paddingRight:'80px',}}/>
                                <ListItemText primary={props.location} style={{textAlign:'left',paddingLeft:'120px',}}/>
                            </ListItem>
                            

                            <ListItem style={{padding:'10px',}}>
                                <ListItemText primary="Category" style={{textAlign:'right',paddingRight:'80px',}}/>
                                <ListItemText primary={props.category} style={{textAlign:'left',paddingLeft:'120px',}}/>
                            </ListItem>
                            

                            <ListItem style={{padding:'10px',}}>
                                <ListItemText primary="Waste Quality" style={{textAlign:'right',paddingRight:'80px',}}/>
                                <ListItemText primary={props.quality} style={{textAlign:'left',paddingLeft:'120px',}}/>
                            </ListItem>
                            

                            <ListItem style={{padding:'10px',}}>
                                <ListItemText primary="Quantity" style={{textAlign:'right',paddingRight:'80px',}}/>
                                <ListItemText primary={props.quantity} style={{textAlign:'left',paddingLeft:'120px',}}/>
                            </ListItem>

                            <ListItem style={{padding:'10px'}}>
                                <ListItemText primary="Price per 1kg" style={{textAlign:'right',paddingRight:'80px',}}/>
                                <ListItemText primary={props.price} style={{textAlign:'left',paddingLeft:'120px',}}/>
                            </ListItem>
                            <Divider color='#9df58c'/>
                        </List>
                        
                        
                    </CardContent>
                </div> 

                <div className='btn-colum'>
                    <div className='btn-col-1'>
                        <CardActions>
                        <Button variant='outlined' sx={{color: '#green'}} onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.FINDWASTAGE)}>Cancel</Button>
                        </CardActions>
                    </div>

                    <div className='btn-col-2'>
                        <CardActions>
                        <Button variant='contained' sx={{backgroundColor: 'green'}} onClick={handleAcceptRequest}>Accept Request</Button>
                        </CardActions>

                        
                    </div>


                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add Details</DialogTitle>

                        <DialogContent style={{borderColor:'green',}}>
                            <DialogContentText>
                                Enter your preferred pickup date here...
                            </DialogContentText>
                            <br/>

                            {/* <TextField
                            autoFocus
                            margin="dense"
                            id="quantity"
                            label="Quantity (kg)"
                            type="text"
                            placeholder='Quantity here'
                            fullWidth
                            variant="outlined"
                            /> */}

                            <TextField 
                            autoFocus
                            margin="dense"
                            id="date"
                            type="date"
                            fullWidth
                            variant="outlined"
                            onChange={e => captureDate(e.target.value)}
                            />
                            
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
                            <Button onClick={confirmAcceptRequest} variant="contained" sx={{backgroundColor: 'green'}}>Confirm</Button>
                        </DialogActions>    

                    </Dialog>


                    <Dialog open={openMessage} onClose={handleCloseMessage}>
                        <DialogTitle style={{backgroundColor: 'white', color: 'black'}}>Alert</DialogTitle>
                        <DialogContent style={{backgroundColor: 'white', color: 'black'}}>
                        <DialogContentText>
                            <h3>Your order is placed</h3>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions style={{backgroundColor: 'white'}}>
                        <Button onClick={handleCloseMessage} variant="contained" color="secondary">OK</Button>
                        {/* <Button variant="contained" color="error" onClick={handleDecline}>Decline</Button> */}
                        </DialogActions>
                    </Dialog>

                </div> 

                  
            </div>
            
        </Card>
        
    </Box>
    </div>
  )
}
