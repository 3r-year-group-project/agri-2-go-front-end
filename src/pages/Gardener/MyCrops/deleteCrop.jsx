import Button from '@mui/material/Button';
import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import 'react-tippy/dist/tippy.css';

import {
    Tooltip,
} from 'react-tippy';


export default function DeleteCrop(props) {

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
        <center><FormLabel id="title"><font size="18"><b>Delete Crop</b></font></FormLabel></center>

        <Container component="main" maxWidth="md">
      
        {/* <CssBaseline/> */}
        <Tooltip>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,mb:15}} >
              <Grid container spacing={3}>
                <Grid item xs={15} >
                <FormLabel id="title">Are you sure you want to delete {props.name}</FormLabel><br /><br />
                  <TextField
                    required
                    fullWidth
                    id="crop"
                    label="Enter Crop Name Here"
                    name="crop"
                    sx={{ input: { color: 'black' } }}
                    />
                </Grid>
              </Grid>
            
              <Grid container spacing={3}>
                <Grid item xs={3} >
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Delete
                    </Button>
                </Grid>
                <Grid item xs={3} >
                    <Button
                        type="reset"
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Cancel
                    </Button>
                </Grid>
              </Grid>
            </Box>
            
            
        
        </Tooltip>
      
      </Container>
     
      </Box>
    </div>
    
  );
  
  
}