import React from 'react';
import { Paper,Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";



export default function VegDetails() {


    return (
        
            <Grid  item md={3} direction="row">
                <Paper elevation={3} style={{marginTop:"10px"}}>
                    <img
                    className="img"
                    src="https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Carrot</Typography>
                    <Box
                        sx={{display: "flex",
                             alignItems: "center"
                    }}
                    >
                        {/* <Button variant="contained" color="success" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" , marginBottom:"10px"}}>
                            Delete
                        </Button> */}

                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "17px" , marginTop:"5px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }}>
                            Delete
                        </Button> 
                        </ButtonGroup>

                        {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                            Quantity: 
                        </Typography> */}
                        
                    </Box>
                    <Box id="detailsList">

                    </Box>
                    
                    {/* <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Minimum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Maximum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Average Buying Price: 
                        </Typography>
                    </Box> */}

                    </Box>
                </Paper>

                <Paper elevation={3} style={{marginTop:"10px"}}>
                    <img
                    className="img"
                    src="https://food.unl.edu/newsletters/images/tomatoes.png"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Tomato</Typography>
                    <Box
                        sx={{display: "flex",
                             alignItems: "center"
                    }}
                    >
                        {/* <Button variant="contained" color="success" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" , marginBottom:"10px"}}>
                            Delete
                        </Button> */}

                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "17px" , marginTop:"5px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }}>
                            Delete
                        </Button> 
                        </ButtonGroup>

                        {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                            Quantity: 
                        </Typography> */}
                        
                    </Box>
                    <Box id="detailsList">

                    </Box>
                    
                    {/* <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Minimum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Maximum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Average Buying Price: 
                        </Typography>
                    </Box> */}

                    </Box>
                </Paper>

                <Paper elevation={3} style={{marginTop:"10px"}}>
                    <img
                    className="img"
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/230-health-benefits-of-beetroot_451273462.jpg"
                    alt=""
                    style={{width:"100%" , height:"10rem"}}
                    
                    />
                    <Box paddingX={1}>
                    <Typography variant="subtitles2" component="h4">Tomato</Typography>
                    <Box
                        sx={{display: "flex",
                             alignItems: "center"
                    }}
                    >
                        {/* <Button variant="contained" color="success" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , marginBottom:"10px", fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" , marginBottom:"10px"}}>
                            Delete
                        </Button> */}

                        <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "17px" , marginTop:"5px" , marginBottom:"10px"}}>
                        <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            View 
                        </Button>
                        <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px"}}>
                            Edit 
                        </Button>
                        <Button variant="contained" color="error" sx={{ fontSize:"10px" }}>
                            Delete
                        </Button> 
                        </ButtonGroup>

                        {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                            Quantity: 
                        </Typography> */}
                        
                    </Box>
                    <Box id="detailsList">

                    </Box>
                    
                    {/* <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Minimum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Maximum Buying Price: 
                        </Typography>
                    </Box>

                    <Box>
                    <Typography variant="body2" component="p" style={{color:"white"}}>
                            Average Buying Price: 
                        </Typography>
                    </Box> */}

                    </Box>
                </Paper>


            </Grid>
    
      );
      
      
    }