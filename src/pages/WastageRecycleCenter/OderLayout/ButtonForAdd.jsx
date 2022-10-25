import React from 'react'
import { Button } from '@mui/material'

export default function ButtonForAdd(props) {
  return (
    <div> <Button 
    onClick={props.action} 
    variant="contained" 
    sx={{color:'#fff',backgroundColor:'blue',}} 
    href={props.links} 
    endIcon={props.icon} >
      {props.name}</Button>
    </div>
  )
}
