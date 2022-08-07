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
import { TRANSPORTER_SECTIONS } from '../../constants';



export default function TransporterListItems() {
  const navigate = useNavigate();

  function routeToPage(page) {
    navigate(`/transporter/dash/${page}`);
  }
  return (
    <React.Fragment>
      <ListItemButton onClick={() => routeToPage(TRANSPORTER_SECTIONS.DASHBOARD)}>
        <ListItemIcon>
          <DashboardIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(TRANSPORTER_SECTIONS.TRIPSCHEDULE)}>
        <ListItemIcon>
          <AssignmentIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Trip Schedule" />
      </ListItemButton>
      <Divider/>

      <ListItemButton onClick={() => routeToPage(TRANSPORTER_SECTIONS.CHAT)}>
        <ListItemIcon>
          <ShoppingCartIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>
      <Divider/>
      {/* <Divider sx={{ my: 1 }} /> */}
      {/* <ListSubheader component="div" inset>
        Operations
      </ListSubheader> */}

      <ListItemButton onClick={() => routeToPage(TRANSPORTER_SECTIONS.TRANSACTIONS)}>
        <ListItemIcon>
          <PaidIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(TRANSPORTER_SECTIONS.REVIEWS)}>
        <ListItemIcon>
          <PaidIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Reviews" />
      </ListItemButton>
      
      
    </React.Fragment>
  );
}
