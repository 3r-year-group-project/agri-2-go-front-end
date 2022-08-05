
import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AssignmentIcon from '@mui/icons-material/Assignment';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid';
import { CUSTOMER_SECTIONS } from '../../constants';
import ChatIcon from '@mui/icons-material/Chat';
import ViewListIcon from '@mui/icons-material/ViewList';
import { ViewList } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';


export default function CustomerListItems() {
  const navigate = useNavigate();

  function routeToPage(page) {
    navigate(`/customer/dash/${page}`);
  }
  return (
    <React.Fragment>
      <ListItemButton onClick={() => routeToPage(CUSTOMER_SECTIONS.DASHBOARD)}>
        <ListItemIcon>
          <Tooltip title="Dashboard">
          <DashboardIcon color="secondary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(CUSTOMER_SECTIONS.CART)}>
        <ListItemIcon>
          <Tooltip title="Cart">
          <ShoppingCartIcon color="secondary" />
          </Tooltip>
        </ListItemIcon>
       <ListItemText primary="Cart" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(CUSTOMER_SECTIONS.ORDERS)}>
        <ListItemIcon>
          <Tooltip title="Orders">
          <ViewListIcon color="secondary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <Divider/>

      {/* <Divider sx={{ my: 1 }} /> */}
      {/* <ListSubheader component="div" inset>
        Operations
      </ListSubheader> */}
      <ListItemButton onClick={() => routeToPage(CUSTOMER_SECTIONS.CHAT)}>
        <ListItemIcon>
          <Tooltip title="Chat">
          <ChatIcon  color="secondary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>
      <Divider/>

      <ListItemButton onClick={() => routeToPage(CUSTOMER_SECTIONS.TRANSACTIONS)}>
        <ListItemIcon>
          <Tooltip title="Transactions">
          <PaidIcon  color="secondary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton>
    </React.Fragment>
  );
}