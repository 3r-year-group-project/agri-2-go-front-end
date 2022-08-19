import React from 'react'
import { Button } from '@mui/material'

export default function MyButton(props) {
  return (
    <div>
      <Button variant="contained" sx={{color:'#fff',backgroundColor:'#008000',}} href={props.links} endIcon={props.icon} >{props.name}</Button>
    </div>
  )
}
