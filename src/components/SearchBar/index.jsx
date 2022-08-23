import * as React from 'react';
import  { useState } from 'react'
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import { useNavigate} from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';




export default function OrderTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  // const [users, setFoundUsers] = useState(rows);

  const filter = (e) => {
    const keyword = e.target.value;

    // if (keyword !== '') {
    //   const results = rows.filter((user) => {
    //     return user.name.toLowerCase().startsWith(keyword.toLowerCase());
    //     // Use the toLowerCase() method to make it case-insensitive
    //   });
    //   setFoundUsers(results);
    // } else {
    //   setFoundUsers(rows);
    //   // If the text field is empty, show all users
    // }

    setName(keyword);
  };



  return (
   

    <Box sx={{ width: '100%',}}>
       
     
      <Paper sx={{ width: '70%', mb: 2, bgcolor:'white' }}>
        
        {/* <TableContainer  > */}
        
      <Paper
    
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'100%' ,bgcolor:'white',color:'black',margin:'5px'}}
  >
    
    <InputBase
  type="search"
  value={name}
  onChange={filter}
      sx={{ ml: 1, flex: 1,color:'black' }}
      placeholder="Search Name Here"
      inputProps={{ 'aria-label': 'search google maps' }}
      
    />
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    
  </Paper>
          
        {/* </TableContainer> */}
       
      </Paper>
      
    </Box>
  );
}
