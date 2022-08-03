import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import check from '../../assets/images/check.png';

export default function CongratsMessage(){
    return(
        <div>
        <Container>
        <br />
        <Typography variant="h6" align="center" sx={{m: 2, color: '#128C7E'}}>
            Congratulations, You Have Successfuly Registered 
        </Typography>
        <br />
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Box>
            <img src={check} height="80" width="80"/>
            </Box>
            <Button sx={{mt:4, width: 400}} variant="contained" fullWidth component={Link} to={'/login'}>FINISH</Button>  
        </Grid>     
        </Container>
        
    </div>
    );
}