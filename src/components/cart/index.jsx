import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { red } from '@mui/material/colors';

import im from '../../assets/images/bg1.jpg';



export default function Cart() {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(id, images, productName, quantity ,price) {
        return { id, images, productName, quantity ,price };
      }
      
      const rows = [
        createData("1","../../assets/images/bg4.jpg", "carrot", "1", "100"),
        createData("2","../../assets/images/bg2.jpg", "pumpkins", "2", "300"),
      ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="left">Image</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;(Rs)</StyledTableCell>
            <StyledTableCell align="right">Quantity&nbsp;(Kg)</StyledTableCell>
            <StyledTableCell align="right">Total&nbsp;(Rs)</StyledTableCell>
            <StyledTableCell align="right">Total payment <br/> <b style={{color: "green"}}>Rs.{rows.reduce((r1, r2) => r1.price*r1.quantity + r2.price*r2.quantity)}</b></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="left">{row.productName} </StyledTableCell>
              <StyledTableCell align="left" height="10%" width="10%"><img src={im} alt={row.productName} height="100%" width="100%"/></StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">
                <TextField
                    id="outlined-number"
                    type="number"
                    min={1}
                    value={row.quantity}
                />
              </StyledTableCell>
              <StyledTableCell align="right">{row.quantity * row.price}</StyledTableCell>
              <StyledTableCell align="right">               
                    <DeleteForeverSharpIcon sx={{ color: red[500] }}/> 
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
