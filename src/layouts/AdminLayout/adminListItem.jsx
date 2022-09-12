import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import ReportIcon from '@mui/icons-material/Report';
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
        <ListItemText primary="Dashboard"/>
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(ADMIN_SECTIONS.USERS)}>
        <ListItemIcon>
          <GroupIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton onClick={() => routeToPage(ADMIN_SECTIONS.VEGETABLES)}>
        <ListItemIcon>
          <InventoryIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Vegetables" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(ADMIN_SECTIONS.SUUBSCRIPTIONS)}>
        <ListItemIcon>
          <SubscriptionsIcon color="secondary" />
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
          <ReportIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Scam Reports" />
      </ListItemButton>
    </React.Fragment>
  );
}
