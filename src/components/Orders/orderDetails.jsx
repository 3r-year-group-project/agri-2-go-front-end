import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './title';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function preventDefault(event) {
  event.preventDefault();
}

export default function OrderDetails(props) {
  return (
    <React.Fragment>
      <Paper elevation={0} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingBottom:2
      }}>
        <Title>
          Date
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {props.marketDistance}
          </Typography>
        </Title>
        <Title>
          Description
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {props.marketDistance}
          </Typography>
        </Title>
      </Paper>
    </React.Fragment>
  );
}