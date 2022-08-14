import Button from '@mui/material/Button';
import React, { Fragment } from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '../../../components/Input/input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import 'react-tippy/dist/tippy.css';

import {
    Tooltip,
} from 'react-tippy';


export default function AddCrop() {

  const [values, setValues] = React.useState({
    totalcost: '',
    sellingprice: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      crop: data.get('crop'),
      quantity: data.get('quantity'),
    });
  };

  return (
      <Box
        sx={{
          paddingTop: 5,
          marginBottom:0,
          paddingLeft: 10,
          paddingRight: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          backgroundColor: '#DCDCDC'
        }}
        >
        <FormLabel id="title">Add Crop Details</FormLabel>

        <Container component="main" maxWidth="md">
      
        {/* <CssBaseline/> */}
        <Tooltip>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,mb:15}} >
              <Grid container spacing={3}>
                <Grid item xs={10} >
                  <Input
                    required
                    fullWidth
                    id="crop"
                    label="The Product"
                    name="crop"
                    autoComplete="The Product"
                    />
                </Grid>
          
                <Grid item xs={10}>
                  <Input
                    required
                    fullWidth
                    name="quantity"
                    label="Quantity"
                    type="number"
                    id="quantity"
                    autoComplete="Quantity"
                    />
                </Grid>

                <Grid item xs={5} >
                  <InputLabel htmlFor="startingdate">Starting Date</InputLabel>
                  <Input
                    required
                    fullWidth
                    id="startingdate"
                    name="startingdate"
                    type="date"
                    />
                </Grid>
                <Grid item xs={5} >
                  <InputLabel htmlFor="expectedenddate">Expected End Date</InputLabel>
                  <Input
                    required
                    fullWidth
                    id="expectedenddate"
                    name="expectedenddate"
                    type="date"
                    />
                </Grid>
          
                <Grid item xs={5}>
                  <InputLabel htmlFor="totalcost">Total Cost</InputLabel>
                  <OutlinedInput
                    id="totalcost"
                    value={values.amount}
                    onChange={handleChange('totalcost')}
                    startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                    />
                </Grid>

                <Grid item xs={5}>
                  <InputLabel htmlFor="sellingprice">Selling Price</InputLabel>
                  <OutlinedInput
                    id="sellingprice"
                    value={values.amount}
                    onChange={handleChange('sellingprice')}
                    startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                    />
                </Grid>


                <Grid item xs={12} >
                  <FormLabel id="advertisement">Add a Advertisement</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="advertisement"
                    defaultValue="yes"
                    name="advertisement"
                    >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" color='black' />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                  <FormHelperText>Do you want to advertise this crop?</FormHelperText>
                </Grid>

                {/* <Grid item xs={12}>
                  <DatePicker
                  label="Starting Date"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                  />
                </Grid> */}

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Submit
              </Button>
              
            </Box>
            
            
        
        </Tooltip>
      
      </Container>
     
      </Box>
    
  );
  
  
}