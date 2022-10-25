import  React,{ useEffect,useState} from 'react';

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
import axios from 'axios';



function createData(id,name, type, block, view) {
  return {
    id,
    name,
    type,
    block,
  
    view
  };
}

const rows = [
  createData('1','Sethni Disanayaka', 'Customer', true, 'VIEW PROFILE'),
  createData('2','Saman Perera', 'Farmer', false, 'VIEW PROFILE'),
  createData('3','Kamal Perera', 'Customer', false, 'VIEW PROFILE'),
  createData('4','Lihini Disanayaka', 'Gardener', true, 'VIEW PROFILE'),
  createData('5','Nimal De Silva', 'Stock Buyer', false, 'VIEW PROFILE'),
  createData('6','Amara Dasanayaka', 'Customer', false, 'VIEW PROFILE'),
  createData('7','S.D.Upul', 'Grocery Seller', false, 'VIEW PROFILE'),
  
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
  const [userList,setUserList] = useState([]);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const navigate = useNavigate();

  const navigateToProfile = () => {
    //  navigate to profile
    navigate('/admin/dash/dashboard');
  };
 
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [users, setFoundUsers] = useState(rows);

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

  const[blockedUser,setBlockedUser]=useState(users)

 

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


async function getUserList() {
 await  axios.get('/api/admin/handluser/userlist').then((res)=>{
    setUserList(res.data.data);
    
    });
}
async function handleblockUser(id) {
  console.log('sethni',id)
  await  axios.get(`/api/admin/handluser/blockuser/${id}`).then((res)=>{
     getUserList();
     
     });
 }
 async function handleunblockUser(id) {
  console.log('sethni',id)
  await  axios.get(`/api/admin/handluser/unblockuser/${id}`).then((res)=>{
     getUserList();
     
     });
 }
useEffect(()=>{
       
  getUserList();


},[])
  
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
    <Filter id="order-filter-status" label="User Type" width="30%" options={[{title:"Customer"}, {title:"Farmer"},{title:"Farmer"},{title:"Gardener"},{title:"Wastage"},{title:"Grocery Seller"},{title:"Stock Buyer"}]}/>
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
                 
              {userList.slice().sort(getComparator(order, orderBy)) 
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
              
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  let userType='';
                  switch (row.user_type) {
                    // case 2:
                    //   userType='Customer';
                    //   break;
                    case 3:
                      userType='Farmer';
                      break;
                    case 4:
                      userType='Gardener';
                      break;
                    case 5:
                      userType='Stock Buyer';
                      break;
                    case 7:
                      userType='Transporter';
                      break;
                    case 8:
                      userType='Wastage Recycle Center';
                      break;
                    default:
                      break;
                  }
                  return (
                    <TableRow>
                      
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="50px"
                        align='left'
                        
                      >
                        <Typography fontSize='24'  color='white'> {row.first_name}</Typography>
                      </TableCell>
                      <TableCell align="left">
                      <Typography fontSize='24'  color='white'>{userType}</Typography>
                      </TableCell>
                      <TableCell align="left">
                            {row.user_status=='UNBLOCKED' &&  <Button id="myButton1" color="secondary" variant="contained" sx={{
                         width: 120,fontSize: 16, backgroundColor: "#f57a38",color:'white'}} onClick={()=>{handleblockUser(row.id)}}>BLOCK  </Button >} 
                      
                        
                            {row.user_status=='BLOCKED' && <Button id="myButton2" color="secondary" variant="contained" sx={{
                         width: 120,fontSize: 16, backgroundColor: "green",color:'white'}}  onClick={()=>{handleunblockUser(row.id)}}  > UNBLOCK</Button >}
                        </TableCell>
                      <TableCell align="left">
                        <Button color="secondary" variant="contained" sx={{
                         width: 200,fontSize: 16, backgroundColor: "green",color:'white'}} onClick={navigateToProfile}>
                            {'VIEW'}
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
