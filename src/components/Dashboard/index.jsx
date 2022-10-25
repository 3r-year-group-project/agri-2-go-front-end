import { Typography } from '@mui/material'
import React from 'react'
import SearchBar from '../../components/SearchBar'
import DashboardContent from './dashboard'



export default function Dashboard() {
  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'
  }} ><DashboardContent/></div>
  )
}

