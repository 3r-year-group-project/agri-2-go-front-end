import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '../../../components/Orders/card';

const mdTheme = createTheme();

export default function CenteredGrid() {

  return (
    <ThemeProvider theme={mdTheme}>

    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
        <Box
        component="span"
        m={1}
        display="inline-block"
      
        >
            <CssBaseline />
            <Grid
                container
                spacing={2}
                direction="column"
               
                >
                  <Grid item xs={12} md={6}>
                    <Card orderCode="001" marketDistance="10km" marketName="Pettah" cropName="Carrot" quantity="100kg" price="Rs.100"/>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card orderCode="002" marketDistance="20km" marketName="Meegoda" cropName="Beetroot" quantity="100kg" price="Rs.100"/>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card orderCode="003" marketDistance="10km" marketName="Pettah" cropName="Carrot" quantity="100kg" price="Rs.100"/>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Card orderCode="004" marketDistance="20km" marketName="Meegoda" cropName="Beetroot" quantity="100kg" price="Rs.100"/>
                  </Grid>
                
                
                
            </Grid>
        </Box>
    </div>
    </ThemeProvider>
  );
}
