import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from './card';

const mdTheme = createTheme();

export default function CenteredGrid() {

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
                direction="column"
                justifyContent="center"
                alignItems="center"
                >
                <Card declines={7} limit={10} marketDistance="10km" marketName="Pettah" cropName="Carrot" quantity="100kg" price="Rs.100"/>
                <Card declines={6} limit={10} marketDistance="20km" marketName="Meegoda" cropName="Beetroot" quantity="100kg" price="Rs.100"/>
                <Card declines={4} limit={10} marketDistance="15km" marketName="Narahenpita" cropName="Leeks" quantity="100kg" price="Rs.100"/>
                <Card declines={3} limit={10} marketDistance="19km" marketName="Ratmalana" cropName="Tomato" quantity="100kg" price="Rs.100"/>
                <Card declines={1} limit={10} marketDistance="24km" marketName="Bokundara" cropName="Green Chillies" quantity="100kg" price="Rs.100"/>
                <Card declines={1} limit={10} marketDistance="23km" marketName="Veyangoda" cropName="Green Chillies" quantity="100kg" price="Rs.100"/>
                <Card declines={1} limit={10} marketDistance="30km" marketName="Welisara" cropName="Green Chillies" quantity="100kg" price="Rs.100"/>
            </Grid>
        </Box>
    </div>
    </ThemeProvider>
  );
}
