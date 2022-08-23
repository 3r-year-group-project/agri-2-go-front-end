import React from "react";
import { Typography } from "@mui/material";

import Button from '@mui/material/Button';



import { useNavigate } from 'react-router-dom';

import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';


import FormControlLabel from '@mui/material/FormControlLabel';

// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';

import Input from '../../components/Input/input';


import Footer from "../../components/Footer";
import NavBar from '../../components/Navbar';
import Logo from '../../components/Logo/logo';
import VegDetails from '../../components/VegetableCard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ButtonGroup from "@mui/material/ButtonGroup";
import Paper from '@mui/material/Paper';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from "@mui/material/Select";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { fontWeight } from "@mui/system";
import Rating from "@mui/material/Rating";
import LoginPage from '../../pages/LoginPage';
import CategoryNavBar from '../../components/CategoryNavbar'





export default function CategoryPage(params) {

    const [filterBy, setFilter] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value);
  };

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/customer/addtocart`; 
    navigate(path);
  }

    return(
        <div style={{background: 'rgba(37, 211, 102, 0.2)'}}>
          <CategoryNavBar/>
           
            <>
       <Container>


        <Box md={{display:"inline-block"}}>

            <Paper
    
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'100%' ,bgcolor:'white',color:'black', marginTop:"25px" , marginBottom:"25px"}}>

            <InputBase

                sx={{ ml: 1, flex: 1,color:'black' }}
                placeholder="Search Here"
                inputProps={{ 'aria-label': 'search google maps' }}/>
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />


                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small" md={{marginLeft:"15%"}}>Filter By</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={filterBy}
                label="Filter By"
                onChange={handleChange}>
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={"Price"}>Price</MenuItem>
                <MenuItem value={"Distance"}>Distance</MenuItem>
            
            </Select>
            </FormControl>

            </Paper>


            


        </Box>
       



        
       
   
           <Grid  container spacing={5} >
               {/* <VegDetails/> */}
               <Grid item md={3}>
                <div onClick={routeChange}>
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
                          
   
                           {/* <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "15px" , marginTop:"8px" , marginBottom:"10px"}}>
                           <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold"}}>
                               Add to Cart <AddShoppingCartIcon/>
                           </Button>
                           <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold" }}>
                               Checkout <ShoppingCartCheckoutIcon/>
                           </Button>
                    
                           </ButtonGroup> */}
   
                           {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                               Quantity: 
                           </Typography> */}
                           
                       </Box>
                       <Box id="detailsList">

                       <Typography variant="body1" component="p" style={{color:"white"  , marginBottom:"2px" , marginTop:"5px" , fontWeight:"bold"}}>
                               200LKR per 1kg
                        </Typography>

                       </Box>
                       <Box id="details">

                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Seller Ratings</Typography>

                       <Rating name="read-only" value={3.5} precision={0.5} readOnly />

                       </Box>
                       
   
                       </Box>
                   </Paper>
                   </div>
               </Grid>


               <Grid item md={3}>
                <Paper elevation={3} style={{marginTop:"10px"}}>
                       <img
                       className="img"
                       src="https://food.unl.edu/newsletters/images/tomatoes.png"
                       alt=""
                       style={{width:"100%" , height:"10rem"}}
                       
                       />
                       <Box paddingX={1}>
                       <Typography variant="subtitles2" component="h4">Tomatoes</Typography>
                       <Box
                           sx={{display: "flex",
                                alignItems: "center"
                       }}
                       >
                          
   
                           {/* <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "15px" , marginTop:"8px" , marginBottom:"10px"}}>
                           <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold"}}>
                               Add to Cart <AddShoppingCartIcon/>
                           </Button>
                           <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold" }}>
                               Checkout <ShoppingCartCheckoutIcon/>
                           </Button>
                    
                           </ButtonGroup> */}
   
                           {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                               Quantity: 
                           </Typography> */}
                           
                       </Box>
                       <Box id="detailsList">

                       <Typography variant="body1" component="p" style={{color:"white"  , marginBottom:"2px" , marginTop:"5px" , fontWeight:"bold"}}>
                               450LKR per 1kg
                        </Typography>

                       </Box>
                       <Box id="details">

                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Seller Ratings</Typography>

                       <Rating name="read-only" value={4.5} precision={0.5} readOnly />

                       </Box>
                       
   
                       </Box>
                   </Paper>
               </Grid>

               <Grid item md={3}>
                <Paper elevation={3} style={{marginTop:"10px"}}>
                       <img
                       className="img"
                       src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/230-health-benefits-of-beetroot_451273462.jpg"
                       alt=""
                       style={{width:"100%" , height:"10rem"}}
                       
                       />
                       <Box paddingX={1}>
                       <Typography variant="subtitles2" component="h4">Beetroot</Typography>
                       <Box
                           sx={{display: "flex",
                                alignItems: "center"
                       }}
                       >
                          
   
                           {/* <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "15px" , marginTop:"8px" , marginBottom:"10px"}}>
                           <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold"}}>
                               Add to Cart <AddShoppingCartIcon/>
                           </Button>
                           <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold" }}>
                               Checkout <ShoppingCartCheckoutIcon/>
                           </Button>
                    
                           </ButtonGroup> */}
   
                           {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                               Quantity: 
                           </Typography> */}
                           
                       </Box>
                       <Box id="detailsList">

                       <Typography variant="body1" component="p" style={{color:"white"  , marginBottom:"2px" , marginTop:"5px" , fontWeight:"bold"}}>
                               175LKR per 1kg
                        </Typography>

                       </Box>
                       <Box id="details">

                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Seller Ratings</Typography>

                       <Rating name="read-only" value={2} precision={0.5} readOnly />

                       </Box>
                       
   
                       </Box>
                   </Paper>
               </Grid>


               <Grid item md={3}>
                <Paper elevation={3} style={{marginTop:"10px"}}>
                       <img
                       className="img"
                       src="https://www.allaboutgardening.com/wp-content/uploads/2022/01/Garden-Vegetable-Roots.jpg"
                       alt=""
                       style={{width:"100%" , height:"10rem"}}
                       
                       />
                       <Box paddingX={1}>
                       <Typography variant="subtitles2" component="h4">Leeks</Typography>
                       <Box
                           sx={{display: "flex",
                                alignItems: "center"
                       }}
                       >
                          
   
                           {/* <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "15px" , marginTop:"8px" , marginBottom:"10px"}}>
                           <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold"}}>
                               Add to Cart <AddShoppingCartIcon/>
                           </Button>
                           <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold" }}>
                               Checkout <ShoppingCartCheckoutIcon/>
                           </Button>
                    
                           </ButtonGroup> */}
   
                           {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                               Quantity: 
                           </Typography> */}
                           
                       </Box>
                       <Box id="detailsList">

                       <Typography variant="body1" component="p" style={{color:"white"  , marginBottom:"2px" , marginTop:"5px" , fontWeight:"bold"}}>
                               220LKR per 1kg
                        </Typography>

                       </Box>
                       <Box id="details">

                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Seller Ratings</Typography>

                       <Rating name="read-only" value={3} precision={0.5} readOnly />

                       </Box>
                       
   
                       </Box>
                   </Paper>
               </Grid>


               <Grid item md={3}>
                <Paper elevation={3} style={{marginTop:"10px"}}>
                       <img
                       className="img"
                       src="https://c.ndtvimg.com/2019-03/k5ngm26o_green-chilli_625x300_08_March_19.jpg"
                       alt=""
                       style={{width:"100%" , height:"10rem"}}
                       
                       />
                       <Box paddingX={1}>
                       <Typography variant="subtitles2" component="h4">Green Chillies</Typography>
                       <Box
                           sx={{display: "flex",
                                alignItems: "center"
                       }}
                       >
                          
   
                           {/* <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "15px" , marginTop:"8px" , marginBottom:"10px"}}>
                           <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold"}}>
                               Add to Cart <AddShoppingCartIcon/>
                           </Button>
                           <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold" }}>
                               Checkout <ShoppingCartCheckoutIcon/>
                           </Button>
                    
                           </ButtonGroup> */}
   
                           {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                               Quantity: 
                           </Typography> */}
                           
                       </Box>
                       <Box id="detailsList">

                       <Typography variant="body1" component="p" style={{color:"white"  , marginBottom:"2px" , marginTop:"5px" , fontWeight:"bold"}}>
                               665LKR per 1kg
                        </Typography>

                       </Box>
                       <Box id="details">

                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Seller Ratings</Typography>

                       <Rating name="read-only" value={1} precision={0.5} readOnly />

                       </Box>
                       
   
                       </Box>
                   </Paper>
               </Grid>


               <Grid item md={3}>
                <Paper elevation={3} style={{marginTop:"10px"}}>
                       <img
                       className="img"
                       src="https://gardenerspath.com/wp-content/uploads/2020/02/White-and-Purple-Eggplants.jpg.webp"
                       alt=""
                       style={{width:"100%" , height:"10rem"}}
                       
                       />
                       <Box paddingX={1}>
                       <Typography variant="subtitles2" component="h4">Brinjal</Typography>
                       <Box
                           sx={{display: "flex",
                                alignItems: "center"
                       }}
                       >
                          
   
                           {/* <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "15px" , marginTop:"8px" , marginBottom:"10px"}}>
                           <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold"}}>
                               Add to Cart <AddShoppingCartIcon/>
                           </Button>
                           <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold" }}>
                               Checkout <ShoppingCartCheckoutIcon/>
                           </Button>
                    
                           </ButtonGroup> */}
   
                           {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                               Quantity: 
                           </Typography> */}
                           
                       </Box>
                       <Box id="detailsList">

                       <Typography variant="body1" component="p" style={{color:"white"  , marginBottom:"2px" , marginTop:"5px" , fontWeight:"bold"}}>
                               1020LKR per 1kg
                        </Typography>

                       </Box>
                       <Box id="details">

                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Seller Ratings</Typography>

                       <Rating name="read-only" value={2} precision={0.5} readOnly />

                       </Box>
                       
   
                       </Box>
                   </Paper>
               </Grid>

               <Grid item md={3}>
                <Paper elevation={3} style={{marginTop:"10px"}}>
                       <img
                       className="img"
                       src="https://media.istockphoto.com/photos/pile-of-fresh-cucumbers-lying-diagonally-picture-id147058947?k=20&m=147058947&s=612x612&w=0&h=s6336g9Z1YOVxfjT7_7z_X7TOLu0tHTFS6e6QfFbx7c="
                       alt=""
                       style={{width:"100%" , height:"10rem"}}
                       
                       />
                       <Box paddingX={1}>
                       <Typography variant="subtitles2" component="h4">Cucumber</Typography>
                       <Box
                           sx={{display: "flex",
                                alignItems: "center"
                       }}
                       >
                          
   
                           {/* <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "15px" , marginTop:"8px" , marginBottom:"10px"}}>
                           <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold"}}>
                               Add to Cart <AddShoppingCartIcon/>
                           </Button>
                           <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold" }}>
                               Checkout <ShoppingCartCheckoutIcon/>
                           </Button>
                    
                           </ButtonGroup> */}
   
                           {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                               Quantity: 
                           </Typography> */}
                           
                       </Box>
                       <Box id="detailsList">

                       <Typography variant="body1" component="p" style={{color:"white"  , marginBottom:"2px" , marginTop:"5px" , fontWeight:"bold"}}>
                               525LKR per 1kg
                        </Typography>

                       </Box>
                       <Box id="details">

                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Seller Ratings</Typography>

                       <Rating name="read-only" value={5} precision={0.5} readOnly />

                       </Box>
                       
   
                       </Box>
                   </Paper>
               </Grid>


               <Grid item md={3}>
                <Paper elevation={3} style={{marginTop:"10px"}}>
                       <img
                       className="img"
                       src="https://media.istockphoto.com/photos/white-cabbage-on-wooden-table-picture-id1328561636?b=1&k=20&m=1328561636&s=612x612&w=0&h=rDGSj3aaN4VC71HZCdT4SvmggS8fmazkup_pXdkm5h0="
                       alt=""
                       style={{width:"100%" , height:"10rem"}}
                       
                       />
                       <Box paddingX={1}>
                       <Typography variant="subtitles2" component="h4">Cabbage</Typography>
                       <Box
                           sx={{display: "flex",
                                alignItems: "center"
                       }}
                       >
                          
   
                           {/* <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "15px" , marginTop:"8px" , marginBottom:"10px"}}>
                           <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold"}}>
                               Add to Cart <AddShoppingCartIcon/>
                           </Button>
                           <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold" }}>
                               Checkout <ShoppingCartCheckoutIcon/>
                           </Button>
                    
                           </ButtonGroup> */}
   
                           {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                               Quantity: 
                           </Typography> */}
                           
                       </Box>
                       <Box id="detailsList">

                       <Typography variant="body1" component="p" style={{color:"white"  , marginBottom:"2px" , marginTop:"5px" , fontWeight:"bold"}}>
                               285LKR per 1kg
                        </Typography>

                       </Box>
                       <Box id="details">

                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Seller Ratings</Typography>

                       <Rating name="read-only" value={2} precision={0.5} readOnly />

                       </Box>
                       
   
                       </Box>
                   </Paper>
               </Grid>


               <Grid item md={3}>
                <Paper elevation={3} style={{marginTop:"10px"}}>
                       <img
                       className="img"
                       src="https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_960_720.jpg"
                       alt=""
                       style={{width:"100%" , height:"10rem"}}
                       
                       />
                       <Box paddingX={1}>
                       <Typography variant="subtitles2" component="h4">Potatoes</Typography>
                       <Box
                           sx={{display: "flex",
                                alignItems: "center"
                       }}
                       >
                          
   
                           {/* <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "15px" , marginTop:"8px" , marginBottom:"10px"}}>
                           <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold"}}>
                               Add to Cart <AddShoppingCartIcon/>
                           </Button>
                           <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold" }}>
                               Checkout <ShoppingCartCheckoutIcon/>
                           </Button>
                    
                           </ButtonGroup> */}
   
                           {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                               Quantity: 
                           </Typography> */}
                           
                       </Box>
                       <Box id="detailsList">

                       <Typography variant="body1" component="p" style={{color:"white"  , marginBottom:"2px" , marginTop:"5px" , fontWeight:"bold"}}>
                               445LKR per 1kg
                        </Typography>

                       </Box>
                       <Box id="details">

                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Seller Ratings</Typography>

                       <Rating name="read-only" value={4} precision={0.5} readOnly />

                       </Box>
                       
   
                       </Box>
                   </Paper>
               </Grid>


               <Grid item md={3}>
                <Paper elevation={3} style={{marginTop:"10px"}}>
                       <img
                       className="img"
                       src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/green-beans-1296x728-header.jpg?w=1575"
                       alt=""
                       style={{width:"100%" , height:"10rem"}}
                       
                       />
                       <Box paddingX={1}>
                       <Typography variant="subtitles2" component="h4">Green Beans</Typography>
                       <Box
                           sx={{display: "flex",
                                alignItems: "center"
                       }}
                       >
                          
   
                           {/* <ButtonGroup variant="text" aria-label="text button group" sx={{marginLeft: "15px" , marginTop:"8px" , marginBottom:"10px"}}>
                           <Button variant="contained" color="success" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold"}}>
                               Add to Cart <AddShoppingCartIcon/>
                           </Button>
                           <Button variant="contained" color="info" sx={{marginRight:"10px" , fontSize:"10px" , fontWeight:"bold" }}>
                               Checkout <ShoppingCartCheckoutIcon/>
                           </Button>
                    
                           </ButtonGroup> */}
   
                           {/* <Typography variant="body2" component="p" style={{color:"white"}}>
                               Quantity: 
                           </Typography> */}
                           
                       </Box>
                       <Box id="detailsList">

                       <Typography variant="body1" component="p" style={{color:"white"  , marginBottom:"2px" , marginTop:"5px" , fontWeight:"bold"}}>
                               690LKR per 1kg
                        </Typography>

                       </Box>
                       <Box id="details">

                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Seller Ratings</Typography>

                       <Rating name="read-only" value={2.5} precision={0.5} readOnly />

                       </Box>
                       
   
                       </Box>
                   </Paper>
               </Grid>


            
               
   
           </Grid>
   
         </Container>
   
         </>
        
            
           
        
        </div>
    )
}