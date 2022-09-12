import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CropDetails from './cropDetails';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';

export default function Card(props) {
    return (
        <Grid item xs={12} md={8} lg={6}>
            <Paper elevation={0} sx={{
                display: 'flex',
                flexDirection: 'column',
                width:600,
                height:200,
                paddingBottom:1,
                paddingLeft:1
            }}>
                <CropDetails
                marketName={props.marketName}
                marketDistance={props.marketDistance}
                cropName={props.cropName}
                quantity={props.quantity}
                price={props.price}
                orderCode={props.orderCode}
                />
                <center>
                    <Button sx={{width:"50%"}} variant="contained" color="success" endIcon={<CheckIcon />}>
                        Mark as Sent
                    </Button>
                </center>
            </Paper>
        </Grid>
    );
}