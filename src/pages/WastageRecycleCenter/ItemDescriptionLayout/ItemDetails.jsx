import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, List, ListItem, ListItemText, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import Divider from '@mui/material/Divider';
import './itemDetails.css';
import MyButton from './MyButton';


export default function ItemDetails(props) {
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
                <div className='wishlist-button'>
                        <CardActions>
                        <Button variant='contained' endIcon={<StarIcon/>} sx={{backgroundColor:'#008000',color:'#fff'}}>Add Seller to Wishlist</Button>
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
                            <Divider color='#9df58c'/>
                        </List>
                        
                        
                    </CardContent>
                </div> 

                <div className='btn-colum'>
                    <div className='btn-col-1'>
                        <CardActions>
                        <Button variant='outlined' sx={{color: '#fff'}}>Cancel</Button>
                        </CardActions>
                    </div>

                    <div className='btn-col-2'>
                        <CardActions>
                        <MyButton name="Contact Seller"/>
                        </CardActions>
                    </div>

                </div> 

                  
            </div>
            
        </Card>
        
    </Box>
    </div>
  )
}
