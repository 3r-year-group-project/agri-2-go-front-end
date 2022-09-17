import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './title';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

function preventDefault(event) {
  event.preventDefault();
}

export default function CropDetails(props) {
  const navigate = useNavigate();
  const resendRequestGetData =  "vegetable=" + props.cropName + "&" +
                                "ecocenter=" + props.marketName + "&" +
                                "price=" + props.price + "&" +
                                "quantity=" + props.quantity;

  return (
    <React.Fragment>
      <Title>
        {props.marketName}
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {props.marketDistance}
        </Typography>
      </Title>
      <br/>
      <Paper elevation={0} sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom:2
      }}>
        <Typography component="p" variant="h5">
          {props.cropName}
        </Typography>
        <Typography component="p" variant="h5">
          {props.quantity}kg
        </Typography>
        <Typography component="p" variant="h5">
          Rs.{props.price}
        </Typography>
      </Paper>
      <center>
        <Button variant="contained" color="success" onClick={()=>navigate(`/farmer/dash/sendrequests?${resendRequestGetData}`)}>
          Resend Request
        </Button>
      </center>
    </React.Fragment>
  );
}