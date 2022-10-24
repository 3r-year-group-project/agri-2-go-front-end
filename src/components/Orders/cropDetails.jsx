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
      <Paper elevation={0} sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom:2
      }}>
        <Title>
          {props.marketName}
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {props.marketDistance}
          </Typography>
        </Title>
        <Title>
          Deal date
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {props.dealDate}
          </Typography>
        </Title>
        <Title>
          Order Code
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {props.orderCode}
          </Typography>
        </Title>
      </Paper>
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
          {props.quantity}kg
        </Typography>
        <Typography component="p" variant="h4">
          Rs.{props.price}
        </Typography>
      </Paper>
    </React.Fragment>
  );
}