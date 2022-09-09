import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from './card';

const mdTheme = createTheme();

export default function FarmerRequests() {

  return (
    <ThemeProvider theme={mdTheme}>

    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
        <Box
        component="span"
        m={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        >
            <CssBaseline />
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Card farmerPlace="Dambulla" farmerDistance="10km" farmerName="Gunapala" cropName="Carrot" quantity="100kg" price="Rs.100" minAdvance="Rs.30"/>
                <Card farmerPlace="Dambulla" farmerDistance="20km" farmerName="Gunapala" cropName="Beetroot" quantity="100kg" price="Rs.100" minAdvance="Rs.30"/>
                <Card farmerPlace="Dambulla" farmerDistance="15km" farmerName="Gunapala" cropName="Leeks" quantity="100kg" price="Rs.100" minAdvance="Rs.30"/>
                <Card farmerPlace="Dambulla" farmerDistance="19km" farmerName="Gunapala" cropName="Tomato" quantity="100kg" price="Rs.100" minAdvance="Rs.30"/>
                <Card farmerPlace="Dambulla" farmerDistance="24km" farmerName="Gunapala" cropName="Green Chillies" quantity="100kg" price="Rs.100" minAdvance="Rs.30"/>
                <Card farmerPlace="Dambulla" farmerDistance="23km" farmerName="Gunapala" cropName="Green Chillies" quantity="100kg" price="Rs.100" minAdvance="Rs.30"/>
                <Card farmerPlace="Dambulla" farmerDistance="30km" farmerName="Gunapala" cropName="Green Chillies" quantity="100kg" price="Rs.100" minAdvance="Rs.30"/>
            </Grid>
        </Box>
    </div>
    </ThemeProvider>
  );
}
