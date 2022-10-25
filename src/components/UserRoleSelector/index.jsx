import React, { useState } from "react";
import { Link, Route, useNavigate,useParams } from "react-router-dom";
import { Typography, Grid, Card, Button, Container, CssBaseline, Box, FormControl} from "@mui/material";
import 'react-tippy/dist/tippy.css';
import Logo from "../Logo/logo";
 
import farmer from '../../assets/images/farmer.png';
import gardener from '../../assets/images/gardener.png';
import stockbuyer from '../../assets/images/stockbuyer.png';
import groceryseller from '../../assets/images/groceryseller.png';
import wastagerecyclecenter from '../../assets/images/wastagerecyclecenter.png';
import transporter from '../../assets/images/transporter.png';
import customer from '../../assets/images/customer.png';


import {
    Tooltip,
} from 'react-tippy';


const inputStyles = {
    opacity: 0,
    position: 'fixed',
    width: 0,
};


export default function UserRoleSelector(props) {
    const [selected, setSelected] = useState('farmer');
    const handleChange=(e)=>{
        setSelected( e.target.value);
     }

    const navigate = useNavigate();

    const redirect = () => {
        switch(selected) {
            case 'farmer':
                return navigate('/register/farmer/'+props.id);    
            case 'gardener':
                return navigate('/register/gardener/'+props.id);   
            case 'stockbuyer':
                return navigate('/register/stockbuyer/'+props.id);
            case 'groceryseller':
                return navigate('/register/groceryseller/'+props.id);    
            case 'customer':
                return navigate('/register/customer/'+props.id);
            case 'wastagerecyclecenter':
                return navigate('/register/wastagerecyclecenter/'+props.id); 
            case 'transporter':
                return navigate('/register/transporter/'+props.id);               
            default: return "Unknown Step";
        }
    } 

           return (
            <div style={{ background: '#128C7E', padding:'0.5%',minHeight:'100%'}} >
            <CssBaseline  />
            <Box
            sx={{
                width: '50%',
                m: '6rem auto',
                border: '1px solid #FFFFFF',
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                background: '#fff'
                
            }}
            >
                <Box
                sx={{
                mt: 2,
                mb: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
                > 
                <Logo />
                </Box>
                    <Typography variant="h6" align="center" sx={{color: '#128C7E'}}>
                        Select User Role
                    </Typography>
                    <br />
                    <form>
                    <Grid item container pr={5} pl={5} spacing={4} direction="row" alignItems="center" justifyContent="center" display="flex">        
                   
                            <Grid item xs={12} md={4}>
                                {/* <Tooltip
                                    title="My name is chikki"
                                    theme="light"
                                > */}
                                    <label>
                                        <Card
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            cursor: 'pointer',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Farmer</Typography>
                                            <input type="radio" name="user" value="farmer" onChange={handleChange}/>
                                            <img src={farmer} alt="farmer" width="100" height="100"/>
                                        </Card>
                                    </label>
                                {/* </Tooltip> */}
                            </Grid>

                            {/* <Grid item xs={12} md={4}>
                               
                                    <label>
                                        <Card
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            cursor: 'pointer',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Gardener</Typography>
                                            <input type="radio" name="user" value="gardener" onChange={handleChange}/>
                                            <img src={gardener} alt="gardener" width="100" height="100"/>
                                        </Card>
                                    </label>
                                
                            </Grid> */}

                            <Grid item xs={12} md={4}>
                                {/* <Tooltip
                                    title="My name is chikki"
                                    theme="light"
                                > */}
                                    <label>
                                        <Card  
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            cursor: 'pointer',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Stock Buyer</Typography>
                                            <input type="radio" name="user" value="stockbuyer" onChange={handleChange}/>
                                            <img src={stockbuyer} alt="stockbuyer" width="100" height="100"/>
                                        </Card>
                                    </label>
                                {/* </Tooltip> */}
                            </Grid>

                            {/* <Grid item xs={12} md={4}>
                               
                                    <label>
                                        <Card  
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            cursor: 'pointer',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Grocery Seller</Typography>
                                            <input type="radio" name="user" value="groceryseller" onChange={handleChange}/>
                                            <img src={groceryseller} alt="groceryseller" width="100" height="100"/>
                                        </Card>
                                    </label>
                             
                            </Grid> */}

                            {/* <Grid item xs={12} md={4}>
                           
                                <label>
                                    <Card  
                                    sx={{
                                        padding: '10px 35px',
                                        border: '1px solid',
                                        cursor: 'pointer',
                                        borderRadius: 2,
                                        backgroundColor: '#FFFFFF', 
                                        boxShadow: '1',
                                        "&:hover": {
                                        backgroundColor: "#EAEAEA",},
                                    }}>
                                        <Typography align="center" variant="body2" sx={{color:'#000000'}}>Customer</Typography>
                                        <input type="radio" name="user" value="customer" onChange={handleChange}/>
                                        <img src={customer} alt="customer" width="100" height="100"/>
                                    </Card>
                                </label>
                               
                            </Grid> */}

                            <Grid item xs={12} md={4}>
                                {/* <Tooltip
                                    title="My name is chikki"
                                    theme="light"
                                > */}
                                    <label>
                                        <Card  
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            cursor: 'pointer',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Wastage Recycle Center</Typography>
                                            <input type="radio" name="user" value="wastagerecyclecenter" onChange={handleChange}/>
                                            <img src={wastagerecyclecenter} alt="wastagerecyclecenter" width="100" height="100"/>
                                        </Card>
                                    </label>
                                {/* </Tooltip> */}
                            </Grid>

                            <Grid item xs={12} md={4}>
                                {/* <Tooltip
                                    title="My name is chikki"
                                    theme="light"
                                > */}
                                    <label>
                                        <Card  
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            cursor: 'pointer',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Transporter</Typography>
                                            <input type="radio" name="user" value="transporter" onChange={handleChange}/>
                                            <img src={transporter} alt="transporter" width="100" height="100"/>
                                        </Card>
                                    </label>
                                {/* </Tooltip> */}
                            </Grid>    
                        </Grid>
                        {/* <p>You role is {selected}</p> */}
                    <Button type='submit' sx={{mt:4}} fullWidth variant="contained"  onClick={redirect}>CONFIRM USER ROLE</Button>
                    </form>
                    </Box>
               
        </div>
    );
}