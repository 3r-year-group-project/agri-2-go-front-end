import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import im from '../../assets/images/bg2.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#35BD79',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#1A2027',
  }));
  

export default function Review(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} justifyContent = "center" alignItems = "center">
            <Grid item xs={8}>
              <Item>
                <h4>Sarath Dassnayake</h4>
                 <Grid container  justifyContent = "center" alignItems = "center">
                    <Grid item xs={3}>
                      <img src={im} alt="Carat" style={{width:'80%',height:'80%'}}/>
                      <h6>pumpkin</h6>
                    </Grid>
                    <Grid item xs={3}>
                      <img src={im} alt="Carat" style={{width:'80%',height:'80%'}}/>
                      <h6>Carat</h6>
                    </Grid>
                    <Grid item xs={3}>
                      <img src={im} alt="Carat" style={{width:'80%',height:'80%'}}/>
                      <h6>Carat</h6>
                    </Grid>
                 </Grid>
                
                <br/>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <p> This is a good product</p>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <h4>Sarath Dassnayake</h4>
                <Grid container  justifyContent = "center" alignItems = "center">
                <Grid item xs={3}>
                      <img src={im} alt="Carat" style={{width:'80%',height:'80%'}}/>
                      <h6>Carat</h6>
                    </Grid>
                    <Grid item xs={3}>
                      <img src={im} alt="Carat" style={{width:'80%',height:'80%'}}/>
                      <h6>Carat</h6>
                    </Grid>
                 </Grid>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <p> This is a good product</p>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <h4>Sarath Dassnayake</h4>
                <Grid container spacing={2} justifyContent = "center" alignItems = "center">
                <Grid item xs={3}>
                      <img src={im} alt="Carat" style={{width:'80%',height:'80%'}}/>
                      <h6>Carat</h6>
                    </Grid>
                 </Grid>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <p> This is a good product</p>
              </Item>
            </Grid>
            <Grid item xs={8}>
            <Item>
                <h4>Sarath Dassnayake</h4>
                <Grid container  justifyContent = "center" alignItems = "center">
                <Grid item xs={3}>
                      <img src={im} alt="Carat" style={{width:'80%',height:'80%'}}/>
                      <h6>Carat</h6>
                    </Grid>
                 </Grid>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <p> This is a good product</p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      );
}