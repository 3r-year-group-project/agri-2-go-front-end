import * as React from 'react';

import TextField from '@mui/material/TextField';

function Input(props) {
  return <div>
    
  <TextField
    required
    fullWidth
    name={props.name}
    label={props.label}
    type={props.type}
    id={props.id}
    autoComplete={props.autoComplete}
  />
  </div>;
}

export default Input;