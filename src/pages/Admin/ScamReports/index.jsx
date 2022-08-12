import React from 'react'
import { Typography } from '@mui/material'
import ReportTabs from './reports'

export default function ScamReports() {
  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'
  }} ><ReportTabs data="[id: 1, name: 'John Doe']"/></div>
  )
}

