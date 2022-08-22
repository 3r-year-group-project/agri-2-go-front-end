import Button from '@mui/material/Button';

import React, { Fragment, useState } from 'react';


import { useNavigate } from 'react-router-dom';

import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

import { CssBaseline, Stack, Typography } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';

// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

import Container from '@mui/material/Container';

import Input from '../../components/Input/input';


import Footer from "../../components/Footer";
import NavBar from '../../components/Navbar';
import Logo from '../../components/Logo/logo';

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

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
// import SearchBar from '../../../components/SearchBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';

    function createData(productName,quantity,quality,availabilityButton) {
    return {
      productName,
      quantity,
      quality,
      availabilityButton,
    };
  }
  
  const rows = [
    createData('Carrot', '200LKR','Animal Fodder','Sell Wastage Stock'),
    createData('Tomatoes', '400LKR','Slurries','Sell Wastage Stock'),
    createData('Cabbage', '2700LKR','Peels','Sell Wastage Stock'),
    createData('Beetroot', '1200LKR','About to Rot','Sell Wastage Stock'),
    createData('Leeks','1410LKR','Peels','Sell Wastage Stock'),
    createData('Potatoes', '1120LKR', 'Rotten','Sell Wastage Stock'),
    createData('Green Chillies','890LKR','Rotten','Sell Wastage Stock'),
    
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
      id: 'quantity',
      disablePadding: false,
      label: 'Quantity',
    },
    {
      id: 'quality',
      disablePadding: false,
      label: 'Quality',
    
    },
    
    {
      id: 'availabilityButton',
      disablePadding: false,
      label: 'Sell the Stock?',
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
          Wastage Stocks Management
          
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




export default function loadWastageStocks() {
    let navigate = useNavigate(); 
    const routeChangeSellWastageStocks = () =>{ 
    let path = `/stockbuyer/sellwastagestocks`; 
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
return (
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
                      <TableCell align="left">{row.quantity}</TableCell>
                    <TableCell align="left">{row.quality}</TableCell>
                    <TableCell align="left">
                    <Button color="secondary" variant="contained" sx={{
                         width: 180,fontSize: 11, backgroundColor: "orange",color:'white'}} onClick={routeChangeSellWastageStocks} >
                            {row.availabilityButton}
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