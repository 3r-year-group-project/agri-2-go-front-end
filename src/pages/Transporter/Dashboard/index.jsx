import { Typography } from '@mui/material'
import React from 'react'
import SearchBar from '../../../components/SearchBar'
import DashboardContent from './dashboard'



export default function Dashboard() {
  return (
    <div style={{ background: 'white', padding:'5%',minHeight:'100%'
  }} ><SearchBar /><DashboardContent/></div>
  )
}

