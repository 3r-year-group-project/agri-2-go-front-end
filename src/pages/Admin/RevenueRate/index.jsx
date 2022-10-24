import * as React from 'react';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, List, ListItem, ListItemText, MenuItem, Select, TextField } from '@mui/material'


export default function RevenueRate() {
  const [openFarmer, setOpenFarmer] = React.useState(false);
  const [openTrans, setOpenTrans] = React.useState(false);
  const [openWrc, setOpenWrc] = React.useState(false);

  const handleClickOpenFarmer = () => {
    setOpenFarmer(true);
  };

  const handleCloseFarmer = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpenFarmer(false);
    }
  };
  const handleClickOpenTrans = () => {
    setOpenTrans(true);
  };

  const handleCloseTrans = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpenTrans(false);
    }
  };
  const handleClickOpenWrc = () => {
    setOpenWrc(true);
  };

  const handleCloseWrc = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpenWrc(false);
    }
  };
    const Item = styled(Paper)(
       
      );
    return(
        <div style={{ background: 'white', padding:'5%',minHeight:'100%'}} >
           
           <Typography variant='h5' color='#075E54'><b>Revenue rates</b></Typography>
           {/* farmer */}
           <Grid container spacing={3}>
           <Grid item xs={12} md={3} lg={3}>
           <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 180,
          backgroundColor:'white',
          color:'black',
          textAlign:'center',
          paddingTop:'60px',
          fontSize:'20px',
          marginBottom:'50px'
        },
      }}
    >
           <Paper >
            <Typography variant='h6' color='black'>Farmer <b>10%</b></Typography>
            <Button onClick={handleClickOpenFarmer}>EDIT</Button></Paper></Box>
            <Dialog 
        open={openFarmer} 
        onClose={handleCloseFarmer}
        fullWidth
        maxWidth="md"
        
        >


          <DialogContent>
            <List dense>
              <ListItem>
                <ListItemText>
                  <Typography gutterBottom variant='h5' color='text.primary' style={{fontSize:'17px',marginLeft:'40px',}}>
                 Revenue Rate (%) for farmer :  
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <TextField
                  autoFocus
                  margin="dense"
                  id="price"
                 
                  type="number"
                  placeholder='select rate'
                  
                  fullWidth
                  variant="outlined"
                  />
                </ListItemText>
                </ListItem>

            </List>
            <DialogActions>
              <Button onClick={handleCloseFarmer} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
              <Button onClick={handleCloseFarmer} variant="contained" sx={{backgroundColor: 'green'}}>Save</Button>
            </DialogActions>

          </DialogContent>
        </Dialog>
</Grid>
<Grid item xs={12} md={3} lg={3}>
        {/* Transporter */}
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 180,
          backgroundColor:'white',
          color:'black',
          textAlign:'center',
          paddingTop:'60px',
          fontSize:'20px',
          marginBottom:'50px'
        },
      }}
    >
           <Paper >
            <Typography variant='h6' color='black'>Transporter <b>10%</b></Typography>
            <Button onClick={handleClickOpenTrans}>EDIT</Button></Paper></Box>
            <Dialog 
        open={openTrans} 
        onClose={handleCloseTrans}
        fullWidth
        maxWidth="md"
        
        >


          <DialogContent>
            <List dense>
              <ListItem>
                <ListItemText>
                  <Typography gutterBottom variant='h5' color='text.primary' style={{fontSize:'17px',marginLeft:'40px',}}>
                 Revenue Rate (%) for transporter:  
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <TextField
                  autoFocus
                  margin="dense"
                  id="price"
                 
                  type="number"
                  placeholder='select rate'
                  
                  fullWidth
                  variant="outlined"
                  />
                </ListItemText>
                </ListItem>

            </List>
            <DialogActions>
              <Button onClick={handleCloseTrans} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
              <Button onClick={handleCloseTrans} variant="contained" sx={{backgroundColor: 'green'}}>Save</Button>
            </DialogActions>

          </DialogContent>
        </Dialog>
</Grid>
<Grid item xs={12} md={3} lg={3}>
        {/* WRC */}
         <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 280,
          height: 180,
          backgroundColor:'white',
          color:'black',
          textAlign:'center',
          paddingTop:'50px',
          fontSize:'20px',
          marginBottom:'50px'
        },
      }}
    >
           <Paper >
            <Typography variant='h6' color='black'>Wastage recycle center <br></br><b>10%</b></Typography>
            <Button onClick={handleClickOpenWrc}>EDIT</Button></Paper></Box>
            <Dialog 
        open={openWrc} 
        onClose={handleCloseWrc}
        fullWidth
        maxWidth="md"
        
        >


          <DialogContent>
            <List dense>
              <ListItem>
                <ListItemText>
                  <Typography gutterBottom variant='h5' color='text.primary' style={{fontSize:'17px',marginLeft:'40px',}}>
                 Revenue Rate (%) for wastage recycle center :  
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <TextField
                  autoFocus
                  margin="dense"
                  id="price"
                 
                  type="number"
                  placeholder='select rate'
                  
                  fullWidth
                  variant="outlined"
                  />
                </ListItemText>
                </ListItem>

            </List>
            <DialogActions>
              <Button onClick={handleCloseWrc} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
              <Button onClick={handleCloseWrc} variant="contained" sx={{backgroundColor: 'green'}}>Save</Button>
            </DialogActions>

          </DialogContent>
        </Dialog>
        </Grid>
        </Grid>
        </div>
    );
}





