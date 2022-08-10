import React from "react";
import { Typography, Grid, Container, TextField} from "@mui/material";
import pic from '../../../assets/images/creditcards.png';


export default function StepTwo() {
    return(
        <div>
            <Container>
                <br />
            <Typography variant="h6" align="center" sx={{color: '#128C7E'}}>
                Enter Card Details
            </Typography>
            <br />
            <form>
                <Grid container spacing={2} justifyContent = "center" alignItems = "center">
                    <Grid item xs={10} >
                        {/* <Grid item md={12} xs={6}> */}
                        <img src={pic} width="150px" height="35px"/>
                        {/* </Grid> */}
                    <TextField
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="Card Number"
                            id="cardnumber"
                            name="cardnumber"
                            autoComplete="cardnumber"        
                    />
                    <TextField
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="Card Holder Name"
                            id="cardholdername"
                            name="cardholdername"
                            autoComplete="cardholdername"        
                    />
                    <TextField
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="Expiry Date"
                            id="expirydate"
                            name="expirydate"
                            autoComplete="expirydate" 
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                }}       
                    />
                    <TextField
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="CVV/CVC"
                            id="cvv"
                            name="cvv"
                            autoComplete="cvv"        
                    />
              
                    </Grid>
                </Grid>
            </form>
            </Container>
            
        </div>
    );
}