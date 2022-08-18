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
import TextField from "@mui/material/TextField";
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const useStyles = makeStyles({
    input: {
      color: "white"
    }
  });

export default function ShowItemDetails(){

    const classes = useStyles();

    return(
    <>
    <NavBar/>

    <Container maxWidth="90%">
    <Grid  container spacing={2} >


    <Grid item md={6} style={{marginTop:"150px" }} fixed>
        
            <img
            className="img"
            src="https://food.unl.edu/newsletters/images/tomatoes.png"
            alt=""
            style={{width:"100%" , height:"80%"}}
                        
            />        

        <Box id="AddCartButtonBox" sx={{margin: "10px"}}>

        <Button variant="contained" color="secondary" fullWidth style={{marginBottom:"10px" , height:"50px" , fontSize:"15px" , fontWeight:"bold"}}>
            View Cart<ShoppingCartIcon/>
        </Button>

        </Box>
        
        </Grid>

        <Grid item md={6}>
        <Paper elevation={3} fixed style={{marginTop:"70px" }} sx={{ backgroundColor:"#075E54" }}>

            <Box  paddingX={1}>
                <Typography style={{fontWeight:"bold" , fontSize: "18px" , marginBottom:"10px"}}>Item Details</Typography>
            </Box>
            <Box  paddingX={1}>
                <Typography style={{fontWeight:"bold" , fontSize: "16px" , marginBottom:"10px"}}>Tomatoes</Typography>
            </Box>

            <hr/>

            <Box  paddingX={1}>
                <Typography style={{ fontSize: "16px" , marginBottom:"10px"}}>Freshly plucked from the local market with care for more than over 15 years. We provide the ultimate customer satisfaction and we are happy to hear the wonderful reviews from you. thank you!</Typography>
            </Box>

            <hr/>


            <Box  paddingX={1}>
                <Typography style={{ fontSize: "16px" , marginBottom:"10px"}}>200LKR per 1kg</Typography>
            </Box>
            <hr/>

            <Box  paddingX={1} style={{marginTop:"30px", marginBottom:"10px"}}>

            <TextField label="Quantity" color="secondary" placeholder="Enter the Quantity in Kilgorams" focused fullWidth required />

    
            </Box>

            {/* <Box  paddingX={1} style={{marginTop:"30px", marginBottom:"10px"}}>

            <TextField label="Address" color="secondary" placeholder="Enter the Delivery Address" focused fullWidth required />

    
            </Box>
            <Box  paddingX={1} style={{marginTop:"30px", marginBottom:"10px"}}>

            <TextField label="Mobile Number" color="secondary" placeholder="Enter the Mobile Number" focused fullWidth required />

    
            </Box> */}
            
            <hr/>

            <Box  paddingX={1}>
                <Typography style={{fontWeight:"bold" , fontSize: "16px" , marginBottom:"10px"}}>Ratings and Reviews</Typography>

                <Box id="details">

                       <Typography variant="body1" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Phungsukh Wangdu</Typography>
                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px" , marginBottom:"0px"}}>A fresh product. really satisfied</Typography>
                       <Rating name="read-only" value={3.5} precision={0.5} readOnly style={{ marginBottom:"5px"}} />

                       <Typography variant="body1" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Namal Wijesinghe</Typography>
                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px" , marginBottom:"0px"}}>really satisfied</Typography>
                       <Rating name="read-only" value={4.5} precision={0.5} readOnly style={{ marginBottom:"5px"}} />

                       <Typography variant="body1" component="legend"  style={{color:"white" , marginLeft:"0px"}}>Venushka Chandrarathna</Typography>
                       <Typography variant="body2" component="legend"  style={{color:"white" , marginLeft:"0px" , marginBottom:"0px"}}>Not upto the quality I expected</Typography>
                       <Rating name="read-only" value={1} precision={0.5} readOnly style={{ marginBottom:"10px"}} />
                       </Box>
            </Box>

            <hr/>
            <Box id="AddCartButtonBox" sx={{margin: "10px"}}>

            <Button variant="contained" color="success" fullWidth style={{marginBottom:"10px" , height:"50px" , fontSize:"15px"}}>
                Add To Cart<AddShoppingCartOutlinedIcon/>
            </Button>

            </Box>
            <Box sx={{margin: "10px"}}>

                <Button fullWidth variant="contained" color="info" style={{marginBottom:"10px" , height:"50px" , fontSize:"15px"}}>
                    Checkout <ShoppingCartCheckoutOutlinedIcon/>
                </Button>

                </Box>
        </Paper>
        </Grid>

        </Grid>
    </Container>
        
    </>
    );
}