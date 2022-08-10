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
import { ADMIN_SECTIONS } from '../../constants';





export default function AdminListItems() {
  const navigate = useNavigate();
/**
 * change url according to click
 * @param {@page} page 
 */
  function routeToPage(page) {
    navigate(`/admin/dash/${page}`);
  }
  return (
    <React.Fragment>
      <ListItemButton onClick={() => routeToPage(ADMIN_SECTIONS.DASHBOARD)}>
        <ListItemIcon>
          <DashboardIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(ADMIN_SECTIONS.USERS)}>
        <ListItemIcon>
          <AssignmentIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(ADMIN_SECTIONS.SUUBSCRIPTIONS)}>
        <ListItemIcon>
          <ShoppingCartIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Subscriptions" />
      </ListItemButton>
      <Divider/>
      {/* <Divider sx={{ my: 1 }} /> */}
      {/* <ListSubheader component="div" inset>
        Operations
      </ListSubheader> */}

      <ListItemButton onClick={() => routeToPage(ADMIN_SECTIONS.SCAMREPORTS)}>
        <ListItemIcon>
          <PaidIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Scam Reports" />
      </ListItemButton>
    </React.Fragment>
  );
}
