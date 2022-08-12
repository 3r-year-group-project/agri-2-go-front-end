import { Typography } from '@mui/material'
import React from 'react'
import UserTabs from './userTabs'

export default function Subscription() {
  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'
  }} ><Typography variant='h5' color='#075E54'><b>Subscription Plans</b></Typography><UserTabs/></div>
  )
}
