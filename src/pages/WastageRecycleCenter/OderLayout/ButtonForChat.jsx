import React from 'react'
import { Button } from '@mui/material'

export default function ButtonForChat(props) {
  return (
    <div>
         <Button 
         variant="contained" 
         sx={{color:'#fff',backgroundColor:'#f57a38',}} 
         href={props.links} 
         endIcon={props.icon} 
         >
          {props.name}
          </Button>
    </div>
  )
}
