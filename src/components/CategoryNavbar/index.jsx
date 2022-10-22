import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { Button } from '@mui/material';
import LoginPage from '../../pages/LoginPage';

import logo from '../../assets/images/logo5.png';

import UserProfileIcon from '../UserProfileIcon';
import {Stack } from '@mui/material';
import { FARMER_SECTIONS } from '../../constants';


const drawerWidth = 240;





const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
   
    
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



export default function CategoryNavBar(Props) {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
 
  const location = useLocation();


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
         
        >
          
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <Toolbar sx={{ width: '100%', maxWidth: 1470, mx: 'auto' }}>
            <img src={logo} style={{ width: 60 }} sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/#')}/>
          <Typography
          fontFamily={"'Lilita One', cursive"}
       
          color="#fdb61d"
          
          variant="h5"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Agri2GO
          </Typography>
          <Box sx={{ flexGrow: 1}} />
          <Stack spacing={3} direction="row">
            {/* <Button color="inherit" onClick={() => navigate('/#')}> */}
            <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={1} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
            {/* </Button> */}
           
            
            <UserProfileIcon item2="Category"/>
          </Stack>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}></Box>
        </Toolbar>
          </Typography>
          
        </Toolbar>
      </AppBar>
        
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
         
          overflow: 'auto',
        }}
      >
        <Toolbar />
    
      </Box>
    </Box>
  );
}