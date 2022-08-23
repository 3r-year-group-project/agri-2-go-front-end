import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';
import  { useState } from 'react'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
// Generate Order Data
function createData(id, name,   amount) {
  return { id, name,  amount };
}

const rows = [
  createData(
    0,
    'Carrot',
    
    
    866,
  ),
  createData(
    1,
    'Beans',
    
    
    654,
  ),
  createData(2,  'Green chilli', 355.78),
  createData(
    3,
    'Pumpkin',
  
    354,
  ),
  createData(
    4,
    'Potato',
   
   
    212,
  ),
];


function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  // the value of the search field 
const [name, setName] = useState('');

// the search result
const [foundUsers, setFoundUsers] = useState(rows);

const filter = (e) => {
  const keyword = e.target.value;

  if (keyword !== '') {
    const results = rows.filter((user) => {
      return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      // Use the toLowerCase() method to make it case-insensitive
    });
    setFoundUsers(results);
  } else {
    setFoundUsers(rows);
    // If the text field is empty, show all users
  }

  setName(keyword);
};



  return (
    <React.Fragment>
      <Title>Best Selling Items</Title>
      <Paper
    
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'100%' ,bgcolor:'white',color:'black',margin:'5px'}}>
    
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
      <Table size="small">
      
        <TableHead>
        
          <TableRow>
         
          <TableCell><b>Item No</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="right"><b>Amount</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foundUsers.map((row,index) => (
            <TableRow key={row.id}>
             <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              
             
              <TableCell align="right">{`${row.amount}kg`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="#128C7E" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Items
      </Link> */}
      
    </React.Fragment>
  );
}