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
import SearchBar from '../../../components/SearchBar';
import Filter from '../../../components/FilterBar'
import SearchB from '../../../components/SearchBar';

function createData(name, type, block, view) {
  return {
    name,
    type,
    block, 
    view
  };
}

const rows = [
  createData('Sethni Disanayaka', 'Customer', 'BLOCK', 'VIEW PROFILE'),
  createData('Saman Perera', 'Farmer', 'BLOCK', 'VIEW PROFILE'),
  createData('Kamal Perera', 'Customer', 'BLOCK', 'VIEW PROFILE'),
  createData('Lihini Disanayaka', 'Gardener', 'BLOCK', 'VIEW PROFILE'),
  createData('Nimal De Silva', 'Stock Buyer', 'BLOCK', 'VIEW PROFILE'),
  createData('Amara Dasanayaka', 'Customer', 'BLOCK', 'VIEW PROFILE'),
  createData('S.D.Upul', 'Grocery Seller', 'BLOCK', 'VIEW PROFILE'),
  
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
    label: 'Name of the User',
  },
  {
    id: 'type',
    numeric: false,
    disablePadding: false,
    label: 'User Type',
  },
  {
    id: 'block',
    numeric: false,
  
    disablePadding: false,
    label: 'Block',
  },
  {
    id: 'view',
    numeric: false,
  
    disablePadding: false,
    label: 'View',
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
          variant="h4"
          id="tableTitle"
          component="div"
          color='#075E54'
          fontWeight='700'
        >
        Users
        </Typography>
      )}

    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function OrderTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const navigate = useNavigate();

  const navigateToProfile = () => {
    // 👇️ navigate to /contacts
    navigate('/admin/dash/dashboard');
  };
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
   

    <Box sx={{ width: '100%',}}>
       
       <EnhancedTableToolbar numSelected={selected.length} />
      <Paper sx={{ width: '100%', mb: 2,  }}>
        
        <TableContainer  >
        
      <Paper
    
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:'70%' ,bgcolor:'white',color:'black',margin:'5px'}}
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
                 
              {foundUsers.slice().sort(getComparator(order, orderBy)) 
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
                        <Typography fontSize='24'  color='white'> {row.name}</Typography>
                      </TableCell>
                      <TableCell align="left">
                      <Typography fontSize='24'  color='white'>{row.type}</Typography>
                      </TableCell>
                      <TableCell align="left"><Button id="myButton1" color="secondary" variant="contained" sx={{
                         width: 'auto',fontSize: 16, backgroundColor: "#f57a38",color:'white'}} >
                            {row.block}
                        </Button ></TableCell>
                      <TableCell align="left">
                        <Button color="secondary" variant="contained" sx={{
                         width: 200,fontSize: 16, backgroundColor: "green",color:'white'}} onClick={navigateToProfile}>
                            {row.view}
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
  );
}
