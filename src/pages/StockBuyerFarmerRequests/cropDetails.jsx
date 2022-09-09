import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './title';
import Paper from '@mui/material/Paper';

function preventDefault(event) {
  event.preventDefault();
}

export default function CropDetails(props) {
  return (
    <React.Fragment>
      <Title>
        {props.farmerName}
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {props.farmerPlace} {props.farmerDistance}
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
          <Typography color="text.primary" sx={{ flex: 1 }}>
            Min. Advance: {props.minAdvance}
          </Typography>
        </Typography>
      </Paper>
    </React.Fragment>
  );
}