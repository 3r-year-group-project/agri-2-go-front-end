import { Typography } from '@mui/material'
import React from 'react'
import Filter from '../../../components/FilterBar'
import SearchBar from '../../../components/SearchBar'
import UserTable from './table'

export default function Users() {
  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'
}} ><SearchBar/><Filter id='item1' options = '[{i1: "item1"}, {ti2: "item2"}, {ti3: "item3"}]' title='user type' label='user type'/><UserTable/></div>
  )
}

