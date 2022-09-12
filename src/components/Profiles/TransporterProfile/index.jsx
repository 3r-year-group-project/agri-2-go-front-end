import React from "react";
import { Avatar, Badge, Card, CardActions, CardContent, Fab, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material";

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Locations from "./addLocations";


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CategoryNavBar from "../../CategoryNavbar";


export default function TransporterProfilePage(params) {

    return(
        <div style={{background: 'rgba(37, 211, 102, 0.2)'}}>

          <CategoryNavBar/>

            <>
       <Container>


        <Box md={{display:"inline-block"}}>

            <Paper
    
                component="form"
                sx={{ display: 'flex', alignItems: 'center', width:'80%' ,bgcolor:'white',color:'black', marginTop: 5, marginRight: 'auto', marginLeft: 'auto'}}>

      
               
                
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} sx={{paddingX: 15, paddingY: 5, paddingBottom: 5,}}>
                    <Grid item xs={12} sx={{mb: 5}}>
                                <Box
                                    display="inline-block" 
                                    alignItems="left"
                                    justifyContent="left"
                                >
                                    <Badge 
                                    badgeContent={  
                                        <label htmlFor="upload-photo">
                                        <input
                                            style={{ display: 'none' }}
                                            id="upload-photo"
                                            name="upload-photo"
                                            type="file"
                                        />
                                        <Fab color="primary" size="small" component="span" aria-label="add">
                                            <EditIcon />
                                        </Fab>
                                        </label>} 
                                        overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                                        <Avatar alt="farmer" sx={{ width: 150, height: 150, mb: 2, boxShadow: 5,}} 
                                        src="https://media.istockphoto.com/photos/portrait-of-smiling-farmer-rural-china-shanxi-province-picture-id462218487?b=1&k=20&m=462218487&s=170667a&w=0&h=bKKesh9mkdS6OM2Lpg-l71BGEc39Md9OZDR4Y27o40s=" />
                                    </Badge>
                                </Box>
                               
                                <Typography sx={{display: 'inline-block'}}>&nbsp; &nbsp; &nbsp;</Typography>
                                <Box 
                                    display="inline-block" 
                                    alignItems="left"
                                    justifyContent="left">
                                <Typography variant="h5" color="#075E54" align="left" sx={{fontFamily: 'Raleway', fontSize: 28, }}>Siril Nirmal Perera &nbsp;</Typography>
                                <Typography variant="subtitle1" color="#999" align="left" >Farmer</Typography>
                                </Box>
                                </Grid>

                        <Grid item xs={12} sx={{mb: 4}}>
                            <Typography variant="h6" color="#075E54" sx={{fontFamily: 'Raleway'}}>Personal Details</Typography>
                            <Divider color="#999"/>
                        </Grid>
                                              
                        <Grid item xs={6}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>First Name             
                            <TextField
                                margin="dense"
                                id="price"
                                type="text"
                                placeholder='Siril'
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>
                        <Grid item xs={6}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Last Name             
                            <TextField
                                margin="dense"
                                id="price"
                                type="text"
                                placeholder='Perera'
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>

                        <Grid item xs={12}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Email Address            
                            <TextField
                                margin="dense"
                                id="price"
                                type="text"
                                placeholder='sirilperera@gmail.com'
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>

                        <Grid item xs={12} sx={{mb: 2, mt: 4}}>
                            <Typography variant="h6" color="#075E54" sx={{fontFamily: 'Raleway'}}>Location Details</Typography>
                            <Divider color="#999" sx={{mb: 2}}/>
                            <Locations/>
                            {/* <Button variant="outlined" color="info" style={{float: 'left'}} startIcon={<AddIcon/>}>
                            Add New
                            </Button> */}
                        </Grid>
                        
                            <Grid item xs={8}>
                                <Card sx={{backgroundColor: '#fff'}}>
                                    <CardContent>
                                        <Typography style={{display: 'inline-block'}} variant="body1" color="#999">
                                        32/A, Nelum Mawatha, Kandy
                                        </Typography>
                                        <IconButton style={{display: 'inline-block', float: 'right'}} color="error" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={8}>
                                <Card sx={{backgroundColor: '#fff'}}>
                                    <CardContent>
                                        <Typography style={{display: 'inline-block'}} variant="body1" color="#999">
                                        32/A, Nelum Mawatha, Kandy
                                        </Typography>
                                        <IconButton style={{display: 'inline-block', float: 'right'}} color="error" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* <Grid item xs={12} sx={{mb: 2, mt: 4}}>
                            <Typography variant="h6" color="#075E54" sx={{fontFamily: 'Raleway'}}>Card Details</Typography>
                            <Divider color="#999" sx={{mb: 2}}/>
                            <CardDetails />
                            </Grid>
                        
                            <Grid item xs={8}>
                                <Card sx={{backgroundColor: '#fff'}}>
                                    <CardContent>
                                        <IconButton style={{display: 'inline-block', float: 'left'}} color="success" aria-label="delete">
                                            <CreditCardIcon />
                                        </IconButton>
                                        <Typography style={{display: 'inline-block'}} variant="body1" color="#999">&nbsp;&nbsp;
                                        **** **** **** 3255
                                        </Typography>
                                        <IconButton style={{display: 'inline-block', float: 'right'}} color="error" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                        <Typography variant="subtitle1" color="#999">&nbsp;&nbsp;
                                        Visa
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid> */}


                        <Grid item xs={12} sx={{mt: 4, mb: 4}}>
                            <Typography variant="h6" color="#075E54" sx={{fontFamily: 'Raleway'}}>Bank Account Details</Typography>
                            <Divider color="#999"/>
                        </Grid>
                                              
                        <Grid item xs={6}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Bank Name             
                            <TextField
                                margin="dense"
                                id="price"
                                type="text"
                                placeholder='Bank of Ceylon'
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>
                        <Grid item xs={6}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Branch Name             
                            <TextField
                                margin="dense"
                                id="price"
                                type="text"
                                placeholder='Kandy'
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>

                        <Grid item xs={12}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Account Name            
                            <TextField
                                margin="dense"
                                id="price"
                                type="text"
                                placeholder='Siripala Perera'
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>

                        <Grid item xs={12}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Account Number           
                            <TextField
                                margin="dense"
                                id="price"
                                type="text"
                                placeholder='**** **** **** 3255'
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>

                            

                           
                        <Grid item xs={12} sx={{mt: 5}}>
                           
                            <Stack spacing={2} direction="row">
                            <Button variant="outlined" size="large" >Cancel</Button>
                            <Button variant="contained" size="large">Save</Button>
                            </Stack>
                            
                        

                        </Grid>
  
                    </Grid>
                    





            </Paper>


            


        </Box>
       



        
       
   
          
         </Container>
   
         </>


           <Typography color='black'>
           profile
           
     </Typography>


           
        
        </div>
    )
}
