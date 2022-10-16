import React from 'react'
import { Alert, Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import Divider from '@mui/material/Divider';
import './itemDetails.css';
import MyButton from './MyButton';
import {useNavigate } from 'react-router-dom';
import { WASTAGE_RECYCLE_CENTER_SECTIONS } from '../../../constants';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';


export default function ItemDetails(props) {
    const navigate = useNavigate();
    function routeToPage(page) {
      navigate(`/wastageRecycleCenter/dash/${page}`);
    }

    const [open, setOpen] =React.useState(false);

    const handleClickOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
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
                        <Button variant='contained' sx={{backgroundColor: 'green'}} onClick={handleClickOpen}>Accept Request</Button>
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
                            />
                            
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
                            <Button onClick={handleClose} variant="contained" sx={{backgroundColor: 'green'}}>Confirm</Button>
                        </DialogActions>    

                    </Dialog>

                </div> 

                  
            </div>
            
        </Card>
        
    </Box>
    </div>
  )
}
