import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './title';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function preventDefault(event) {
  event.preventDefault();
}

export default function CropDetails(props) {
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
        <Typography component="p" variant="h4">
          {props.cropName}
        </Typography>
        <Typography component="p" variant="h4">
          {props.quantity}
        </Typography>
        <Typography component="p" variant="h4">
          {props.price}
        </Typography>
      </Paper>
      <center>
        <Button variant="contained" color="success">
          Resend Request
        </Button>
      </center>
    </React.Fragment>
  );
}