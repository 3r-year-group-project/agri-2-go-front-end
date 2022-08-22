import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';

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
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
import { useNavigate } from 'react-router-dom';

function createData(productName,sellingPricePer1kg ,quantity, soldQuantity, wastedQuantity,availableQuantity,wastageEligibilityButton) {
  return {
    productName,
    sellingPricePer1kg,
    quantity,
    soldQuantity, 
    wastedQuantity,
    availableQuantity,
    wastageEligibilityButton
  };
}

const rows = [
  createData('Carrot', '200LKR', '200kg', '120kg','10kg','70kg','Add to Wastage'),
  createData('Tomatoes', '400LKR', '400kg', '320kg','10kg','50kg','Add to Wastage'),
  createData('Cabbage', '2700LKR', '250kg', '110kg','10kg','130kg','Add to Wastage'),
  createData('Beetroot', '1200LKR', '600kg', '225kg','10kg','365kg','Add to Wastage'),
  createData('Leeks', '1410LKR', '420kg', '120kg','10kg','290kg','Add to Wastage'),
  createData('Potatoes', '1120LKR', '300kg', '100kg','10kg','190kg','Add to Wastage'),
  createData('Green Chillies', '890LKR', '1200kg', '200kg','10kg','990kg','Add to Wastage'),
  
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
    id: 'productName',
    numeric: false,
    disablePadding: false,
    label: 'Name of the Product',
  },
  {
    id: 'sellingPricePer1kg',
    disablePadding: false,
    label: 'Selling Price(1 kg)',
  },
  {
    id: 'quantity',
    disablePadding: false,
    label: 'Quantity',
  },
  {
    id: 'soldQuantity',
    disablePadding: false,
    label: 'Sold Quantity',
  
  },
  {
    id: 'wastedQuantity',
    disablePadding: false,
    label: 'Wasted Quantity',
  },
  {
    id: 'availableQuantity',
    disablePadding: false,
    label: 'Available Quantity',
  },
  {
    id: 'wastageEligibilityButton',
    disablePadding: false,
    label: 'Add to Wastage?',
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
              {headCell.label}
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
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity), 
        }),
      }}
    >
      { (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h5"
          id="tableTitle"
          component="div"
        
        >
        Stocks Management
        
        </Typography>
        

        
      )}
      
      {/* {<SearchBar/>} */}

      {/* { (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon color="secondary"/>
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
    
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};


export default function loadStocks(){

  let navigate = useNavigate(); 
    const routeChangeWastageAdd = () =>{ 
    let path = `/stockbuyer/addtowastage`; 
    navigate(path);
  }

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
  return(
    <Fragment>
      <Container component="main" maxWidth="100%" >
        <Grid container spacing={1} >
        <Grid item xs={12} sx={{marginTop:"40px"}}>
        <Box sx={{ width: '100%',}}>
      <Paper sx={{ width: '100%', mb: 2,  }}>
        <EnhancedTableToolbar numSelected={selected.length} />
         
        <TableContainer  >
          <Table
       fontSize="24"
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
                        {row.productName}
                      </TableCell>
                      <TableCell align="left">{row.sellingPricePer1kg}</TableCell>
                      <TableCell align="left">{row.quantity}</TableCell>
                      <TableCell align="left">
                      {row.soldQuantity}
                    
                        {/* <Button color="secondary" variant="contained" sx={{
                         width: 150,fontSize: 13, backgroundColor: "green",color:'white', marginRight:"10px"}}>
                            {row.optionsEdit}
                        </Button>
                        <Button color="error" variant="contained" sx={{
                         width: 150,fontSize: 13, color:'white'}}>
                            {row.optionsDelete}
                        </Button> */}
                    
                    </TableCell>
                    <TableCell align="left">{row.wastedQuantity}</TableCell>
                    <TableCell align="left">{row.availableQuantity}</TableCell>
                    <TableCell align="left">
                    <Button color="secondary" variant="contained" sx={{
                         width: 150,fontSize: 12, backgroundColor: "orange",color:'white'}} onClick={routeChangeWastageAdd}>
                            {row.wastageEligibilityButton}
                        </Button>
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
      </Container>
    </Fragment>
    
  );
}

