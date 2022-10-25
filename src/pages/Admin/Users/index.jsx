import { Typography } from '@mui/material'
import React from 'react'

import SearchBar from '../../../components/SearchBar'
import UserTable from './table'

export default function Users() {
  return (
    <div style={{ background: 'white', padding:'5%',minHeight:'100%'
}} ><UserTable/></div>
  )
}

