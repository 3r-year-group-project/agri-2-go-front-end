import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AssignmentIcon from '@mui/icons-material/Assignment';

import { useNavigate } from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid';
import { GARDENER_SECTIONS } from '../../constants';
import ChatIcon from '@mui/icons-material/Chat';
import RateReviewIcon from '@mui/icons-material/RateReview';
import RateReview from '@mui/icons-material/RateReview';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ViewListIcon from '@mui/icons-material/ViewList';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';

export default function GardenerListItems() {
  const navigate = useNavigate();

  function routeToPage(page) {
    navigate(`/gardener/${page}`);
  }
  return (
    <React.Fragment>
      <ListItemButton onClick={() => routeToPage(GARDENER_SECTIONS.DASHBOARD)}>
        <ListItemIcon>
      <Tooltip title="Dashboard">
        <DashboardIcon color="secondary" />
      </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(GARDENER_SECTIONS.FINDSELLER)}>
        <ListItemIcon>
        <Tooltip title="Find Sellers">
        <SearchIcon color="secondary" />
      </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Find Sellers" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(GARDENER_SECTIONS.ADDCART)}>
        <ListItemIcon>
        <Tooltip title="Cart">
        <ShoppingCartIcon color="secondary" />
      </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Cart" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(GARDENER_SECTIONS.MYCROP)}>
        <ListItemIcon>
        <Tooltip title="My Crops">
        <AssignmentIcon  color="secondary" />
      </Tooltip>          
        </ListItemIcon>
        <ListItemText primary="My Crops" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(GARDENER_SECTIONS.SALES)}>
        <ListItemIcon>
          <Tooltip title="Sales"><ReceiptIcon color="secondary" /></Tooltip>          
        </ListItemIcon>
        <ListItemText primary="Sales" />
      </ListItemButton>

      <ListItemButton onClick={() => routeToPage(GARDENER_SECTIONS.ORDERS)}>
        <ListItemIcon>
          <Tooltip title="Orders">
          <ViewListIcon color="secondary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      {/* <Divider sx={{ my: 1 }} /> */}
      {/* <ListSubheader component="div" inset>
        Operations
      </ListSubheader> */}

      <ListItemButton onClick={() => routeToPage(GARDENER_SECTIONS.TRANSACTIONS)}>
        <ListItemIcon>
          <Tooltip title="Transactions">
          <PaidIcon  color="secondary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(GARDENER_SECTIONS.CHAT)}>
        <ListItemIcon>
          <Tooltip title="Chats">
        <ChatIcon color="secondary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(GARDENER_SECTIONS.REVIEWS)}>
        <ListItemIcon>
          <Tooltip title="Reviews">
          <RateReview  color="secondary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Reviews" />
      </ListItemButton>
      
    </React.Fragment>
  );
}
