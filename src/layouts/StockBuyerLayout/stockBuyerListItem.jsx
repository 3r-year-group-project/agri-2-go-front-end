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
import { STOCK_BUYER_SECTIONS } from '../../constants';
import ChatIcon from '@mui/icons-material/Chat';
import ReviewsIcon from '@mui/icons-material/Reviews';
import InventoryIcon from '@mui/icons-material/Inventory';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';



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
      <Divider/>
      {/* <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.MYSCHEDULE)}>
        <ListItemIcon>
          <AssignmentIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="My Schedule" />
      </ListItemButton>
      <Divider/> */}
      <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.ORDERS)}>
        <ListItemIcon>
          <ShoppingCartIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <Divider/>
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
      <Divider/>
      {/* <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.REVIEWS)}>
        <ListItemIcon>
          <ReviewsIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Reviews" />
      </ListItemButton>
      <Divider/> */}
      <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.FARMERREQUESTS)}>
        <ListItemIcon>
          <ChatIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Farmer Requests" />
      </ListItemButton>
      <Divider/>
      {/* <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.FINDVEGETABLES)}>
        <ListItemIcon>
          <ManageSearchIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Find Vegetables" />
      </ListItemButton>
      <Divider/> */}
      <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.WASTAGEORDERS)}>
        <ListItemIcon>
          <AutoDeleteIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Wastage Orders" />
      </ListItemButton>
      <Divider/>
      {/* <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.DEMANDING)}>
        <ListItemIcon>
          <TrendingUpIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Demanding" />
      </ListItemButton>
      <Divider/> */}
      <ListItemButton onClick={() => routeToPage(STOCK_BUYER_SECTIONS.STOCKS)}>
        <ListItemIcon>
          <InventoryIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Stocks" />
      </ListItemButton>
    </React.Fragment>
  );
}
