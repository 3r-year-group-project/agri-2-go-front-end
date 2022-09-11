import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toolbar } from '@mui/material';

export default function ChargersPage() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{color: "black"}}>
        <br />
        <h3 style={{marginLeft:10}}>Travel Chargers </h3>
        <br />
        <h5 style={{marginLeft:10}}>Pickup Radius <small>(Minimum distance you go for pickup)</small></h5>
        <TextField
          required
          id="Pickup Radius"
          label="Pickup Radius"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue='Pickup radius'
          variant="filled"
          sx={{color: "black"}}
        />
        <br />
        <h5 style={{marginLeft:10}}>Prices for trips <small>(Rs.)</small> </h5>
        <TextField
          required
          id="price-0-50km"
          label="Price for trips 0-50km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{color: "black"}}

        />
        <TextField
          required
          id="price-50-150km"
          label="Price for trips 50-150km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{color: "black"}}
        />
        <TextField
          required
          id="price-150-250km"
          label="Price for trips 150-250km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{color: "black"}}
        />
        <TextField
          required
          id="price-250-500km"
          label="Price for trips 250-500km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{color: "black"}}
        />
        <TextField
          required
          id="price-500-750km"
          label="Price for trips 500-750km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{color: "black"}}
        />
        <TextField
          required
          id="price-750-1000km"
          label="Price for trips 750-1000km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{color: "black"}}
        />
        <TextField
          required
          id="price-1000-1500km"
          label="Price for trips 1000-1500km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{color: "black"}}
        />
        <TextField
          required
          id="price-1500-2000km"
          label="Price for trips 1500-2000km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{color: "black"}}
        />
      </div>
      <Toolbar sx={{ justifyContent: "right" }}>
        <Button variant="contained" sx={{mr:20}}>Set prices</Button>
      </Toolbar>
      
    </Box>
  );
}
