

import React, { Fragment, useState } from 'react';


import { useNavigate } from 'react-router-dom';


import { CssBaseline, ListItem, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import logo from '../../assets/images/logo5.png';





export default function Logo() {

  const navigate = useNavigate();

  
return (
    <Fragment>
   
      
        <CssBaseline  />
        <List component={Stack} direction="row" style={{ display: 'flex', flexDirection: 'row', padding: 0,margin:0 }}>
            <ListItem style={{alignItems:'flex-start'}}><img src={logo} style={{ width: 75 }} sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/#')}/></ListItem>
        
        {/* <ListItem style={{alignItems:'flex-end'}}> <Typography
          fontFamily={"'Lilita One', cursive"}
          color="#075E54"
          variant="h5"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          > Agri2GO
          </Typography></ListItem> */}
          </List>
     
  

         
        
          
        
     
       
  
      </Fragment>
    
  );
  
  
}