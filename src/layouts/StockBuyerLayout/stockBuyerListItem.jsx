import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AssignmentIcon from '@mui/icons-material/Assignment';

import { useNavigate } from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid';
import { STOCK_BUYER_SECTIONS } from '../../constants';



export default function StockBuyerListItems() {
  const navigate = useNavigate();

  function routeToPage(page) {
    navigate(`/stockbuyer/dash/${page}`);
  }
  return (
    <React.Fragment>
      <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.DASHBOARD)}>
        <ListItemIcon>
          <DashboardIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.MYSCHEDULE)}>
        <ListItemIcon>
          <AssignmentIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="My Schedule" />
      </ListItemButton>

      <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.ORDERS)}>
        <ListItemIcon>
          <ShoppingCartIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      {/* <Divider sx={{ my: 1 }} /> */}
      {/* <ListSubheader component="div" inset>
        Operations
      </ListSubheader> */}

      <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.TRANSACTIONS)}>
        <ListItemIcon>
          <PaidIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.REVIEWS)}>
        <ListItemIcon>
          <PaidIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Reviews" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.CHAT)}>
        <ListItemIcon>
          <PaidIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.MYPROFIT)}>
        <ListItemIcon>
          <PaidIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="My Profit" />
      </ListItemButton>
    </React.Fragment>
  );
}
