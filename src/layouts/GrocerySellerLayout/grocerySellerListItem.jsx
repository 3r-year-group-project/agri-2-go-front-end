import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AssignmentIcon from '@mui/icons-material/Assignment';

import { useNavigate } from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid';
import { GROCERY_SELLER_SECTIONS } from '../../constants';



export default function GrocerySellerListItems() {
  const navigate = useNavigate();

  function routeToPage(page) {
    navigate(`/groceryseller/dash/${page}`);
  }
  return (
    <React.Fragment>
      <ListItemButton onClick={() => routeToPage(GROCERY_SELLER_SECTIONS.DASHBOARD)}>
        <ListItemIcon>
          <DashboardIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(GROCERY_SELLER_SECTIONS.MYSCHEDULE)}>
        <ListItemIcon>
          <AssignmentIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="My Schedule" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(GROCERY_SELLER_SECTIONS.ORDERS)}>
        <ListItemIcon>
          <ShoppingCartIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      
      <Divider/>
      <ListItemButton onClick={() => routeToPage(GROCERY_SELLER_SECTIONS.TRANSACTIONS)}>
        <ListItemIcon>
          <PaidIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(GROCERY_SELLER_SECTIONS.REVIEWS)}>
        <ListItemIcon>
          <PaidIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Reviews" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(GROCERY_SELLER_SECTIONS.CHAT)}>
        <ListItemIcon>
          <PaidIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(GROCERY_SELLER_SECTIONS.MYPROFIT)}>
        <ListItemIcon>
          <PaidIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="My Profit" />
      </ListItemButton>
    </React.Fragment>
  );
}
