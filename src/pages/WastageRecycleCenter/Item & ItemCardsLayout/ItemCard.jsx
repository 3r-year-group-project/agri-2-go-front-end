import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box,Button, CardActionArea, CardActions, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './item.css';
import {useNavigate } from 'react-router-dom';
import { WASTAGE_RECYCLE_CENTER_SECTIONS } from '../../../constants';

export default function ItemCard(props) {
  const navigate = useNavigate();
  function routeToPage(page) {
    navigate(`/wastageRecycleCenter/dash/${page}/${props.orderInfo.id}`);
  }


  const color_icon = '#cf1204'
  const marg = '5px'
  const back_color='green'
  const font_color='#fff'

  const [open, setOpen] =React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleOpenDelete = () => {
    setOpenDelete(true);
  }

  const handleCloseDelete = () => {
    setOpenDelete(false);
  }


  return (
    <Box className='Box' width='450px'>

      <Card style={{display:'flex',flexDirection:'row', justifyContent:'space-between',flexWrap:'nowrap',borderRadius:'10px', margin: '50px 0px 50px 0px',maxWidth: '500', }}>

        <div className='details-card'>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' color='#075E54'>
           <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',textAlign:'center',}}>
           {props.title}
           </div>
          </Typography>
          <Typography gutterBottom variant='body2' color='#075E54'>
            Quality level : {props.quality}      
          </Typography>
          <Typography gutterBottom variant='body1' color='#075E54'>
            <LocationOnIcon style={{color:color_icon,marginRight:marg,}}/> {props.location}     
          </Typography>
          <Typography gutterBottom variant='body2' color='#075E54'>
            {props.weight} kg      
          </Typography>
          <Typography gutterBottom variant='body2' sx={{color: 'red'}}>
            {props.price} LKR per 1kg    
          </Typography>


          <CardActions style={{justifyContent:'center',alignItems:'center'}}>
            <Stack direction="row"  spacing={2} sx={{mt: 2}}>
              <Button variant='outlined'color='error' onClick={handleOpenDelete}>Decline Request</Button>
              <Button variant='contained' color='success' onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.ITEMDESCRIPTION)}>View Details</Button>
            </Stack>

          </CardActions>
        </CardContent>
        </div>
                <Dialog open={openDelete} onClose={handleCloseDelete}>
                    <DialogTitle style={{backgroundColor: 'white', color: 'black'}}>Decline Confirmation</DialogTitle>
                    <DialogContent style={{backgroundColor: 'white', color: 'black'}}>
                    <DialogContentText>
                        <h3>Are you sure you want to decline this?</h3>
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions style={{backgroundColor: 'white'}}>
                    <Button onClick={handleCloseDelete} variant="outlined" color="secondary">Cancel</Button>
                    <Button variant="contained" color="error" onClick={handleCloseDelete}>Decline</Button>
                    </DialogActions>
                </Dialog>
      </Card>

    </Box>

    
  );
}
