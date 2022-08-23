import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchWislist() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked sx={{color: 'blue'}}/>} label="yes" sx={{color:'#fff'}}/>
    </FormGroup>
  );
}
