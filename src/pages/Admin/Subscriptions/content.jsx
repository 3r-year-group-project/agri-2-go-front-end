import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Typography from '@material-ui/core/Typography';

export default function FormPropsTextFields() {
  return (
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"

    >
     
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Subscription Plan Name"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue="Basic Plan"
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Duration"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue="1 Year"
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Price"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue="$69.00"
          variant="standard"
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Discounts"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
          
          defaultValue="$00.00"
          variant="standard"
        />
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
          
          defaultValue=""
          variant="standard"
        />
      </div>
    </Box>
  );
}
