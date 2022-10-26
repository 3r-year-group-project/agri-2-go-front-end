import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Divider } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ChatIcon from '@mui/icons-material/Chat';
import StarIcon from '@mui/icons-material/Star';

import { useNavigate } from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid';
import { WASTAGE_RECYCLE_CENTER_SECTIONS } from '../../constants';



export default function WastageRecycleCenterListItems() {
  const navigate = useNavigate();

  function routeToPage(page) {
    navigate(`/wastageRecycleCenter/dash/${page}`);
  }
  return (
    <React.Fragment>
      <ListItemButton onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.DASHBOARD)}>
        <ListItemIcon>
          <DashboardIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.FINDWASTAGE)}>
        <ListItemIcon>
          <SearchIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Find Wastage" />
      </ListItemButton>
      <Divider/>
      <ListItemButton onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.ORDERS)}>
        <ListItemIcon>
          <ShoppingCartIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <Divider/>
      {/* <ListItemButton onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.MYSCHEDULE)}>
        <ListItemIcon>
          <AssignmentIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="My Schedule" />
      </ListItemButton>
      <Divider/>  */}
      <ListItemButton onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.WASTAGEPREFERENCES)}>
        <ListItemIcon>
          <NoteAltIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Wastage Preferences" />
      </ListItemButton>
      <Divider/>
      {/* <ListItemButton onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.CHATMEMBERSLIST)}>
        <ListItemIcon>
          <ChatIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItemButton>
      <Divider/> */}
      {/* <ListItemButton onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.WISHLIST)}>
        <ListItemIcon>
          <StarIcon  color="secondary" />
        </ListItemIcon>
        <ListItemText primary="Wishlist" />
      </ListItemButton> */}
    </React.Fragment>
  );
}
