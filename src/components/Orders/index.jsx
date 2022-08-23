import * as React from 'react';
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
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import SearchBar from '../SearchBar';

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
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'status',
    numeric: false,
  
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'contact',
    numeric: false,
  
    disablePadding: false,
    label: 'Contact',
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
        Orders
        </Typography>
      )}
     
      {<SearchBar/>}

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

export default function OrderTable(props) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const rows = props.rows

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
                  const isItemSelected = isSelected(row.date);
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
                        {row.date}
                      </TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="left">
                          {row.status}
                      </TableCell>
                      <TableCell align="left">
                        <Button color="secondary" variant="contained" sx={{
                         width: 200,fontSize: 16, backgroundColor: "green",color:'white'}}>
                            {row.contact}
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
