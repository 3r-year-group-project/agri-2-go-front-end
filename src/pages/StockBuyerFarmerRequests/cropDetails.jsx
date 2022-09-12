import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './title';
import Paper from '@mui/material/Paper';
import { CardMedia, Stack } from '@mui/material';
import Button from '@mui/material/Button';

function preventDefault(event) {
  event.preventDefault();
}

export default function CropDetails(props) {
  return (
    <React.Fragment>
    

      <Stack direction='row' spacing='auto'>
       <div style={{paddingTop:'30px',paddingRight:'20px'}}>
       <Typography variant="h6" sx={{ flex: 1 , color:'black', }}>
          {props.date} 
        </Typography>
        <br/>
        <Typography component="p" variant="h4">
          {props.cropName}
        </Typography>
        <Typography color="text.secondary" variant="h6" sx={{ flex: 1 }}>
        {props.farmerName}
        </Typography>
        <Typography color="text.secondary" variant="h6" sx={{ flex: 1 }}>
          {props.farmerPlace} {props.farmerDistance}
        </Typography>
        </div>
        <div>
        
 
      <br/>
      <Paper elevation={0} sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom:1,
        paddingTop:3
      }}>
        <Stack direction='row' spacing={4}>
        <Button variant="contained" color="inherit" style={{ textTransform: 'none' }}>
        <Typography component="p" variant="h4">
          {props.quantity+" kg"}
        </Typography>
        </Button>
        <Button variant="contained" color="inherit" style={{ backgroundColor: 'transparent',textTransform: 'none' }}>
        <Typography component="p" variant="h4">
          {props.price+" LKR/kg"}
          <Typography color="text.primary" sx={{ flex: 1 }}>
            Min. Advance: {props.minAdvance+" LKR/kg"}
          </Typography>
        </Typography>
        </Button>
        </Stack>
      </Paper>
      </div>
      </Stack>
    </React.Fragment>
  );
}