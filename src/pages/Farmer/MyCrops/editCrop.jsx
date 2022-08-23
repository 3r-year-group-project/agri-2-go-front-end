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
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import 'react-tippy/dist/tippy.css';

import {
    Tooltip,
} from 'react-tippy';


export default function EditCrop() {

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
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
      <Box
        sx={{
          paddingTop: 5,
          marginBottom:0,
          paddingLeft: 10,
          paddingRight: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}
        >
        <center><FormLabel id="title"><font size="18"><b>Edit Crop Details</b></font></FormLabel></center>

        <Container component="main" maxWidth="md">
      
        {/* <CssBaseline/> */}
        <Tooltip>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,mb:15}} >
              <Grid container spacing={3}>
                <Grid item xs={15} >
                  <TextField
                    required
                    fullWidth
                    id="crop"
                    label="The Product"
                    name="crop"
                    defaultValue="Lorem ipsum dolor sit amet."
                    sx={{ input: { color: 'black' } }}
                    />
                </Grid>
          
                <Grid item xs={15}>
                  <TextField
                    required
                    fullWidth
                    name="quantity"
                    label="Quantity"
                    type="number"
                    id="quantity"
                    defaultValue="1234"
                    sx={{ input: { color: 'black' } }}
                    />
                </Grid>

                <Grid item xs={5} >
                  <InputLabel htmlFor="startingdate">Starting Date</InputLabel>
                  <TextField
                    required
                    fullWidth
                    id="startingdate"
                    name="startingdate"
                    type="date"
                    sx={{ input: { color: 'black' } }}
                    />
                </Grid>
                <Grid item xs={5} >
                  <InputLabel htmlFor="expectedenddate">Expected End Date</InputLabel>
                  <TextField
                    required
                    fullWidth
                    id="expectedenddate"
                    name="expectedenddate"
                    type="date"
                    sx={{ input: { color: 'black' } }}
                    />
                </Grid>
          
                <Grid item xs={5}>
                  <InputLabel htmlFor="sellingprice">Selling Price</InputLabel>
                  <OutlinedInput
                    id="sellingprice"
                    value={values.amount}
                    onChange={handleChange('sellingprice')}
                    startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                    defaultValue="1234"
                    sx={{ input: { color: 'black' } }}
                    />
                </Grid>

                <Grid item xs={5}>
                  <InputLabel htmlFor="totalcost">Total Cost</InputLabel>
                  <OutlinedInput
                    id="totalcost"
                    value={values.amount}
                    onChange={handleChange('totalcost')}
                    startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                    defaultValue="1234"
                    sx={{ input: { color: 'black' } }}
                    />
                </Grid>


                <Grid item xs={15} >
                  <FormLabel id="advertisement">Add a Advertisement</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="advertisement"
                    defaultValue="yes"
                    name="advertisement"
                    >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" sx={{ color: 'black' }}/>
                    <FormControlLabel value="no" control={<Radio />} label="No" sx={{ color: 'black' }}/>
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
              <Box
                component="span"
                m={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width:"48%", mt: 3, mb: 2 }}
                  >
                  Submit
                </Button>
                <Button 
                  variant="outlined" 
                  color="error"
                  type="submit"
                  sx={{ width:"48%", mt: 3, mb: 2 }}
                >
                Cancel
                </Button>
              </Box>
              
            </Box>
            
            
        
        </Tooltip>
      
      </Container>
     
      </Box>
    </div>
    
  );
  
  
}