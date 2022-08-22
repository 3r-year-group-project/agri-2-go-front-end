import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';

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
  return (
    <React.Fragment>
      <Title>Best Selling Items</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
          <TableCell><b>Item No</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            
           
           
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
             <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              
             
              <TableCell align="right">{`${row.amount}kg`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="#128C7E" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Items
      </Link>
    </React.Fragment>
  );
}