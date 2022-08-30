import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CropDetails from './cropDetails';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function Card(props) {
    return (
        <Grid item xs={12} md={8} lg={6}>
            <Paper sx={{
                display: 'flex',
                flexDirection: 'column',
                // height: 250
            }}>
                <Paper elevation={0} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // width:500,
                    paddingBottom:1,
                    paddingLeft:1
                }}>
                    <CropDetails
                    farmerName={props.farmerName}
                    farmerDistance={props.farmerDistance}
                    farmerPlace={props.farmerPlace}
                    cropName={props.cropName}
                    quantity={props.quantity}
                    price={props.price}
                    minAdvance={props.minAdvance}
                    />
                </Paper>
                <Paper elevation={0} justifyContent="space-between" sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    // width:400,
                    paddingBottom:2,
                    justifyContent: 'space-evenly'
                }}>
                    <Button variant="contained" color="success" startIcon={<CheckIcon />}>
                        Accept
                    </Button>
                    <Button variant="outlined" color="error" endIcon={<ClearIcon />}>
                        Decline
                    </Button>
                </Paper>
            </Paper>
        </Grid>
    );
}