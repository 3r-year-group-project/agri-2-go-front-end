import React from "react";
import { Typography, Grid, Card, Button, Container} from "@mui/material";
import 'react-tippy/dist/tippy.css';
 
import farmer from '../../assets/images/farmer.png';
import gardener from '../../assets/images/gardener.png';
import stockbuyer from '../../assets/images/stockbuyer.png';
import groceryseller from '../../assets/images/groceryseller.png';
import wastagecenter from '../../assets/images/recyclecenter.png';
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


export default function StepOne() {
        return (
            <div>
                <Container>
                <br /> 
                    <Typography variant="h6" align="center" sx={{color: '#128C7E'}}>
                        Select User Role
                    </Typography>
                    <br />

                    <Grid item container pr={5} pl={5} spacing={4} direction="row" alignItems="center" justifyContent="center" display="flex">        
                   
                            <Grid item xs={12} md={4}>
                                <Tooltip
                                    title="My name is chikki"
                                    theme="light"
                                >
                                    <label>
                                        <Card  
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Farmer</Typography>
                                            <input type="radio" name="test" value="farmer" checked/>
                                            <img src={farmer} alt="farmer" width="100" height="100"/>
                                        </Card>
                                    </label>
                                </Tooltip>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Tooltip
                                    title="My name is chikki"
                                    theme="light"
                                >
                                    <label>
                                        <Card  
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Gardner</Typography>
                                            <input type="radio" name="test" value="gardner" checked/>
                                            <img src={gardener} alt="gardner" width="100" height="100"/>
                                        </Card>
                                    </label>
                                </Tooltip>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Tooltip
                                    title="My name is chikki"
                                    theme="light"
                                >
                                    <label>
                                        <Card  
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Stock Buyer</Typography>
                                            <input type="radio" name="test" value="stockbuyer" checked/>
                                            <img src={stockbuyer} alt="stockbuyer" width="100" height="100"/>
                                        </Card>
                                    </label>
                                </Tooltip>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Tooltip
                                    title="My name is chikki"
                                    theme="light"
                                >
                                    <label>
                                        <Card  
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Grocery Seller</Typography>
                                            <input type="radio" name="test" value="groceryseller" checked/>
                                            <img src={groceryseller} alt="groceryseller" width="100" height="100"/>
                                        </Card>
                                    </label>
                                </Tooltip>
                            </Grid>

                            <Grid item xs={12} md={4}>
                            <Tooltip
                                title="My name is chikki"
                                theme="light"
                            >
                                <label>
                                    <Card  
                                    sx={{
                                        padding: '10px 35px',
                                        border: '1px solid',
                                        borderRadius: 2,
                                        backgroundColor: '#FFFFFF', 
                                        boxShadow: '1',
                                        "&:hover": {
                                        backgroundColor: "#EAEAEA",},
                                    }}>
                                        <Typography align="center" variant="body2" sx={{color:'#000000'}}>Customer</Typography>
                                        <input type="radio" name="test" value="customer" checked/>
                                        <img src={customer} alt="customer" width="100" height="100"/>
                                    </Card>
                                </label>
                                </Tooltip>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Tooltip
                                    title="My name is chikki"
                                    theme="light"
                                >
                                    <label>
                                        <Card  
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Wastage Recycle</Typography>
                                            <input type="radio" name="test" value="wastagecenter" checked/>
                                            <img src={wastagecenter} alt="wastagecenter" width="100" height="100"/>
                                        </Card>
                                    </label>
                                </Tooltip>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Tooltip
                                    title="My name is chikki"
                                    theme="light"
                                >
                                    <label>
                                        <Card  
                                        sx={{
                                            padding: '10px 35px',
                                            border: '1px solid',
                                            borderRadius: 2,
                                            backgroundColor: '#FFFFFF', 
                                            boxShadow: '1',
                                            "&:hover": {
                                            backgroundColor: "#EAEAEA",},
                                        }}>
                                            <Typography align="center" variant="body2" sx={{color:'#000000'}}>Transporter</Typography>
                                            <input type="radio" name="test" value="transporter" checked/>
                                            <img src={transporter} alt="transporter" width="100" height="100"/>
                                        </Card>
                                    </label>
                                </Tooltip>
                            </Grid>    
                        </Grid>
                    {/* <Button sx={{mt:4, width: 400, align:"center"}} variant="contained"  component={Link} to={'/register/form'}>CONFIRM USER ROLE</Button> */}
         
            </Container>
            
        </div>
    );
}