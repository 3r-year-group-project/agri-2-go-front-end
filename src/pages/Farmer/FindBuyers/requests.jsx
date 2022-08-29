import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from './card';
import Chart from './chart'
import CropDetails from './cropDetails';

const mdTheme = createTheme();

function chartData(date, amount) {
    return { date, amount };
}
  
const data = [
    chartData('04 Aug', 1),
    chartData('05 Aug', 2),
    chartData('06 Aug', 3),
    chartData('07 Aug', 4),
    chartData('08 Aug', 5),
    chartData('09 Aug', 6),
    chartData('10 Aug', 7),
    chartData('11 Aug', 8),
];

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
                <Card chartData={data} cropName="Carrot" quantity="100kg" price="Rs.100"/>
                <Card/>
                <Card/>
                <Card/>
            </Grid>
        </Box>
    </div>
    </ThemeProvider>
  );
}
