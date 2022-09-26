import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CropDetails from './cropDetails';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/material';
import {useNavigate } from 'react-router-dom';
import { FARMER_SECTIONS } from '../../constants';

export default function Card(props) {
    const navigate = useNavigate();
    function routeToPage(page) {
      navigate(`/farmer/dash/${page}`);}

    return (
        <Grid item xs={12} md={8} lg={6}>
            <Paper elevation={0} sx={{
                display: 'flex',
                flexDirection: 'column',
                width:800,
                height:220,
                padding:3,

            }}>
                <CropDetails
                marketName={props.marketName}
                marketDistance={props.marketDistance}
                cropName={props.cropName}
                quantity={props.quantity}
                price={props.price}
                orderCode={props.orderCode}
                />
                <Stack spacing={8} direction="row" alignItems="flex-end" sx={{mb: 5}}>
                    <Button sx={{width:"30%"}} variant="contained" color="info" startIcon={<AddIcon />} onClick={() => routeToPage(FARMER_SECTIONS.ADDTRANSPORTER)}>
                        Add Transporter
                    </Button>
                    <Button sx={{width:"30%"}} variant="contained" color="success" startIcon={<CheckIcon />}>
                        Mark as Sent
                    </Button>
                </Stack>
            </Paper>
        </Grid>
    );
}