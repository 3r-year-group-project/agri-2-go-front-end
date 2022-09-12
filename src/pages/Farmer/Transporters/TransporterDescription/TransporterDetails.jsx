import React from 'react'
import { Alert, Box, Button, Card, CardActions, CardContent, CardMedia, List, ListItem, ListItemText, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import Divider from '@mui/material/Divider';
import './TransporterDetails.css';
import MyButton from './MyButton';
import {useNavigate } from 'react-router-dom';
import { FARMER_SECTIONS } from '../../../../constants';


export default function TransporterDetails(props) {
    const navigate = useNavigate();
    function routeToPage(page) {
      navigate(`/farmer/dash/${page}`);
    }

  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}}>
    <Box width='70vw' margin="auto">
        <Card style={{height:'100vh', margin:'10px  80px',borderRadius:'20px',}}>
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
                {/* <div className='wishlist-button'>
                        <CardActions>
                        <Button variant='contained' endIcon={<StarIcon/>} sx={{backgroundColor:'#F57A38',color:'#fff'}} onClick={() => <Alert severity="success">This is a success alert — check it out!</Alert>}>Add Seller to Wishlist</Button>
                        </CardActions>
                    </div> */}
                </div>
                


                
            </div>


            


            <div className='description-row'>

        
                <div className='seller-details-col'>


                    <CardContent>
                        <List dense sx={{ width: 550, maxWidth: 600,}}>
                            <Divider color='#9df58c'/>
                            <ListItem style={{padding:'10px',}}>
                                <ListItemText primary="Transporter Name" style={{textAlign:'right',paddingRight:'80px',}}/>
                                <ListItemText primary={props.transporterName} style={{textAlign:'left',paddingLeft:'120px',}}/>
                            </ListItem>
                            

                            <ListItem style={{padding:'10px',}}>
                                <ListItemText primary="Location" style={{textAlign:'right',paddingRight:'80px',}}/>
                                <ListItemText primary={props.location} style={{textAlign:'left',paddingLeft:'120px',}}/>
                            </ListItem>
                            

                            <ListItem style={{padding:'10px',}}>
                                <ListItemText primary="Price" style={{textAlign:'right',paddingRight:'80px',}}/>
                                <ListItemText primary={props.price} style={{textAlign:'left',paddingLeft:'120px',}}/>
                            </ListItem>
                            

                           
                        
                        </List>
                    </CardContent>
                </div> 

                <div className='btn-colum'>
                    <div className='btn-col-1'>
                        <CardActions>
                        <Button variant='outlined' sx={{color: '#fff'}} onClick={() => routeToPage(FARMER_SECTIONS.ADDTRANSPORTER)}>Back</Button>
                        </CardActions>
                    </div>

                    <div className='btn-col-2'>
                        <CardActions>
                        <Button variant='contained' sx={{backgroundColor: 'green'}}>Send Request</Button>
                        {/* <MyButton name="Add to Order Table" onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.ORDERS)}/> */}
                        </CardActions>
                    </div>

                </div> 

                  
            </div>
            
        </Card>
        
    </Box>
    </div>
  )
}
