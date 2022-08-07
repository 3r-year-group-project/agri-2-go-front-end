import React from "react";
import { Typography, Grid, Container, TextField} from "@mui/material";
import { styled } from "@mui/material";




export default function StepThree() {
    return(
        <div>
            <Container>
                <br />
            <Typography variant="h6" align="center" sx={{color: '#128C7E'}}>
                Enter Personal Details
            </Typography>
            <br />
            <form>
                <Grid container spacing={2} justifyContent = "center" alignItems = "center">
                    <Grid item xs={10} >
                    <TextField
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="First Name"
                            id="firstname"
                            name="firstname"
                            autoComplete="firstname"        
                    />
                    <TextField
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="Last Name"
                            id="lastname"
                            name="lastname"
                            autoComplete="lastname"        
                    />
                    <TextField
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="Address Line 1"
                            id="addressline-1"
                            name="addressline-1"
                            autoComplete="addressline-1"        
                    />
                    <TextField
                            sx={{margin: '1rem 0'}}
                            fullWidth
                            label="Address Line 2 (Optional)"
                            id="addressline-2"
                            name="addressline-2"
                            autoComplete="addressline-2"        
                    />
                    <TextField
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="City"
                            id="city"
                            name="city"
                            autoComplete="city"        
                    />
                   
                
              
                    </Grid>
                </Grid>
            </form>
            </Container>
            
        </div>
    );
}