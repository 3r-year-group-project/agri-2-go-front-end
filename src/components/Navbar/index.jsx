import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/images/logo5.png'
import Divider from '@mui/material/Divider';




import { Button, Stack } from '@mui/material';
import { width } from '@mui/system';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, border: (theme) => `1px solid ${theme.palette.divider}`,}} >
      <AppBar position="static" >
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
          <Stack spacing={5} direction="row">
            <Button color="inherit" onClick={() => navigate('/#')}>
              About Us
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button color="inherit" onClick={() => navigate('/#')}>
              Contact Us
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button color="inherit" onClick={() => navigate('/#')}>
              Payment Plans
            </Button>
            {/* <Button
              color="secondary"
              variant="contained"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </Button> */}
          </Stack>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}></Box>
        </Toolbar>
      </AppBar>
      
    </Box>
    
  );
}
