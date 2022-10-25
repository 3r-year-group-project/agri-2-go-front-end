import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(props) {
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
          {props.best_selling_data.map((row, index) => (
            <TableRow key={index + 1}>
             <TableCell>{index + 1}</TableCell>
              <TableCell>{row.vegetable}</TableCell>
              
             
              <TableCell align="right">{`${row.total_sales}kg`}</TableCell>
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