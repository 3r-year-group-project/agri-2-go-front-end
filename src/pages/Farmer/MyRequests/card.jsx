import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './chart'
import CropDetails from './cropDetails';

export default function Card(props) {
    return (
        <Grid item xs={12} md={8} lg={6}>
            <Paper sx={{
                display: 'flex',
                flexDirection: 'row',
                height: 200
            }}>
                <Paper elevation={0} sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width:400,
                    paddingBottom:2
                }}>
                    <Chart declines={props.declines} limit={props.limit}/>
                </Paper>
                <Paper elevation={0} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width:600,
                    paddingBottom:1,
                    paddingLeft:1
                }}>
                    <CropDetails
                    marketName={props.marketName}
                    marketDistance={props.marketDistance}
                    cropName={props.cropName}
                    quantity={props.quantity}
                    price={props.price}
                    />
                </Paper>
            </Paper>
        </Grid>
    );
}