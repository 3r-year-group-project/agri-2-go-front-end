import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
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

import { visuallyHidden } from '@mui/utils';
import DoneIcon from '@mui/icons-material/Done';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function createData( name, accountNumber, bankName, branch, amount, markRelease) {
    return {
      name,
      accountNumber, 
      bankName,
      branch,
      amount,
      markRelease,
    };
  }
  
  const rows = [
    createData('Boralu Perera', '11122263537', 'BOC','Kandy', '2000LKR', 'Mark as Released'),
    createData('Boralu Perera', '11122263537', 'BOC','Kandy', '2000LKR', 'Mark as Released'),
    createData('Boralu Perera', '11122263537', 'BOC','Kandy', '2000LKR', 'Mark as Released'),
    createData('Boralu Perera', '11122263537', 'BOC','Kandy', '2000LKR', 'Mark as Released'),

    
  ];
  
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  
  Array.prototype.sort()
  
  const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: false,
      label: 'Name',
    },
    {
      id: 'accountnumber',
      disablePadding: false,
      label: 'Account Number',
    
    },
    {
        id: 'bankname',
        disablePadding: false,
        label: 'Bank Name',
      
      },
    {
        id: 'branch',
        disablePadding: false,
        label: 'Branch',
      
    },
    {
        id: 'amount',
        disablePadding: false,
        label: 'Amount',
      
    },
    {
      id: '',
      numeric: false,
    
      disablePadding: false,
      label: 'Status',
    },
    
  ];
  
  function EnhancedTableHead(props) {
    const {  order, orderBy,  onRequestSort } =
      props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                <Typography variant='h6'fontWeight='700'  color='white'>{headCell.label}</Typography>
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
  
    return (
        <div>
        
           
         
      {/* <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity), 
          }),
        }}
      >
       
        {(
          <Button color="secondary" variant="contained" sx={{
            width: 200,fontSize: 12, backgroundColor: "green",color:'white' , fontWeight:"bold" , margin:"10px 10px 0 0"}}>
                            Add a Vegetable<AddIcon/>
          </Button>
        )}
       </Toolbar> */}
      </div>
      
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };
  



const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    marginTop:"60px",
    marginLeft:"30px",
  };


export default function StockBuyerTable() {
    //handle dialog box
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


return (
    <Fragment>
   
   
                
           
    <Container component="main" maxWidth="100%" >
      
        
          
          <Box >
            <Grid container spacing={4}>
              
            <Grid item xs={12} sx={{marginTop:"5px"}}>
              
            <Box sx={{ width: '100%',}}>
        
            <Paper sx={{ width: '100%', mb: 2,  }}>
        <EnhancedTableToolbar numSelected={selected.length} />
         
        <TableContainer  >
          <Table
       fontSize="28"
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={ 'large'}
          >
            <EnhancedTableHead
               
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
            //   onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody >
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {rows.slice().sort(getComparator(order, orderBy)) 
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    
                    <TableRow>
                      
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="50px"
                        align='left'
                        
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.accountNumber}</TableCell>
                      <TableCell align="left">{row.bankName}</TableCell>
                      <TableCell align="left">{row.branch}</TableCell>
                      <TableCell align="left">{row.amount}</TableCell>
                      <TableCell align="left">
                    
                        <Button color="info" variant="contained" startIcon={<DoneIcon/>} onClick={handleClickOpen} sx={{
                         width: 200,fontSize: 13, color:'white'}}>
                            {row.markRelease}
                        </Button>

                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                            {"Confirm Payment"}
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Are you sure you want to release the payment?
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button variant="outlined" onClick={handleClose}>No</Button>
                            <Button variant="contained" onClick={handleClose} autoFocus>
                                Yes
                            </Button>
                            </DialogActions>
                        </Dialog>
                    
                    </TableCell>
                      
                    </TableRow>
                  );
                })}
              
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      
    </Box>
                
                </Grid>
        
            </Grid>
            

 


            
          </Box>
          
          
        
      
      </Container>
    
    
     
      </Fragment>
     
    
  );
  
  
}