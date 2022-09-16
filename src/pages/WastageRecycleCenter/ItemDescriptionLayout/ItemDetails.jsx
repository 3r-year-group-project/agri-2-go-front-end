import React from 'react'
import { Alert, Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, TextField, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import Divider from '@mui/material/Divider';
import './itemDetails.css';
import MyButton from './MyButton';
import {useNavigate } from 'react-router-dom';
import { WASTAGE_RECYCLE_CENTER_SECTIONS } from '../../../constants';


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
    <Box width='70vw' margin="auto">
        <Card style={{height:'110vh', margin:'10px  80px',borderRadius:'20px',}}>
            <div className='basic-details-row'>
                <div className='image-cube'>
                <CardMedia className='image-in'
                    component="img"
                    height='200'
                    image={props.image}
                    alt='carrot'
                    />
                </div>
                
                <div>
                <CardContent>
                    <div style={{textAlign:'left',}}>
                    <Typography gutterBottom variant='h3' component='div'>
                        {props.title} 
                    </Typography>
             
                    </div>

                    <div className='item-description-col'>
                        <Typography gutterBottom variant='body3' color='text.primary' align='justify'>
                        {props.description}
                        </Typography>
                    </div>   
                </CardContent>
                <div className='wishlist-button'>
                        <CardActions>
                        <Button variant='contained' endIcon={<StarIcon/>} sx={{backgroundColor:'#F57A38',color:'#fff'}} onClick={() => <Alert severity="success">This is a success alert — check it out!</Alert>}>Add Seller to Wishlist</Button>
                        </CardActions>
                    </div>
                </div>
                

                {/* <div>
                <CardActions>
                <Button variant='contained' endIcon={<StarIcon/>} sx={{backgroundColor:'#008000',color:'#fff'}}>Add Seller to Wishlist</Button>
                </CardActions>
                </div> */}
                
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

                            <ListItem style={{padding:'10px',}}>
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
                        <Button variant='outlined' sx={{color: '#fff'}} onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.FINDWASTAGE)}>Cancel</Button>
                        </CardActions>
                    </div>

                    <div className='btn-col-2'>
                        <CardActions>
                        <Button variant='contained' sx={{backgroundColor: 'green'}} onClick={handleClickOpen}>Place an Order</Button>
                        {/* <MyButton name="Add to Order Table" onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.ORDERS)}/> */}
                        </CardActions>

                        
                    </div>


                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Add Details</DialogTitle>

                        <DialogContent style={{borderColor:'green',}}>
                            <DialogContentText>
                                Enter the quantity you want to buy and preferred pickup date...
                            </DialogContentText>
                            <br/>

                            <TextField
                            autoFocus
                            margin="dense"
                            id="quantity"
                            label="Quantity (kg)"
                            type="text"
                            placeholder='Quantity here'
                            fullWidth
                            variant="outlined"
                            />

                            <TextField 
                            autoFocus
                            margin="dense"
                            id="date"
                            type="date"
                            // label="Schedule Date"
                            // placeholder='Schedule Date'
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
