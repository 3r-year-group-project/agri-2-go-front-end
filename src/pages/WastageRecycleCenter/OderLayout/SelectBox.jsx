import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function SelectBox() {

    
  const [status, setstatus] = React.useState('');

 const handleChange = (event) => {
    setstatus(event.target.value);
  };

  const pending = false;

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small" style={{color:'#fff'}}>Status</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={status}
        label="status"
        onChange={handleChange}
        style={{backgroundColor:'green',color:'#fff',fontWeight:'600',}}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem var value={10} style={{color:'Blue', backgroundColor: '#fff'}}>Pending</MenuItem>
        <MenuItem value={20} style={{color:'Green', backgroundColor: '#fff'}}>Completed</MenuItem>
        <MenuItem value={30} style={{color:'Red', backgroundColor: '#fff'}}>Cancelled</MenuItem>
      </Select>
      {pending && 'hello'}
    </FormControl>

    
  );
}