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
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ChatIcon from '@mui/icons-material/Chat';
import EuroIcon from '@mui/icons-material/Euro';



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
          <ReviewsIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Reviews" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(GROCERY_SELLER_SECTIONS.CHAT)}>
        <ListItemIcon>
          <ChatIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(GROCERY_SELLER_SECTIONS.MYPROFIT)}>
        <ListItemIcon>
          <EuroIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="My Profit" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(GROCERY_SELLER_SECTIONS.FINDVEGETABLES)}>
        <ListItemIcon>
          <ManageSearchIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Find Vegetables" />
      </ListItemButton>
    </React.Fragment>
  );
}
