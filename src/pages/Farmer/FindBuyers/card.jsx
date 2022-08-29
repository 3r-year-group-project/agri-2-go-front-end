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
                    flexDirection: 'column',
                    width:500
                }}>
                    <Chart title="Decline Rate" yAxis="Declines" data={props.chartData}/>
                </Paper>
                <Paper elevation={0} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width:500,
                    paddingBottom:1,
                    paddingLeft:1
                }}>
                    <CropDetails title="Details" 
                    cropName={props.cropName}
                    quantity={props.quantity}
                    price={props.price}
                    />
                </Paper>
            </Paper>
        </Grid>
    );
}