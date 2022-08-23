import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

 export default function RequestForm() {
  const [name, setName] = useState("");
  
  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"

    >
      <form >
     
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Vegetable"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue=""
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Amount"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue=""
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Date"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue=""
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Upload Photos of Vegetable"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        {/* <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue=""
          variant="standard"
        /> */}
        <Button variant="outlined" component="label" startIcon={<PhotoCameraIcon />} color='info'>
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Description"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          value=""
          
          
          variant="standard"
        />

      </div>
      <div/>
      
      </form>
    </Box>
   
  );}
 


 

