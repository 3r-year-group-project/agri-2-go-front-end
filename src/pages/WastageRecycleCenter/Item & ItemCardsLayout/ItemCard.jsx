import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box,Button, CardActionArea, CardActions } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { color } from '@mui/system';
import './item.css';
import {useNavigate } from 'react-router-dom';
import { WASTAGE_RECYCLE_CENTER_SECTIONS } from '../../../constants';

export default function ItemCard(props) {
  const navigate = useNavigate();
  function routeToPage(page) {
    navigate(`/wastageRecycleCenter/dash/${page}`);
  }
  // const navigateToDetails = () => {
  //   navigate('/wastageRecycleCenter/dash/findwastage/viewdetails');
  // };

  const color_icon = '#cf1204'
  const marg = '5px'
  const back_color='green'
  const font_color='#fff'
  return (
    <Box className='Box' width='450px'>

      <Card style={{display:'flex',flexDirection:'row', justifyContent:'space-between',flexWrap:'nowrap',borderRadius:'10px', margin: '50px 0px 50px 0px',maxWidth: '500', }}>
        <div className='image-card'>
        <CardMedia
          component="img"
          height='260vh'
          image={props.image}
          alt='carrot'
        />
        </div>

        <div className='details-card'>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
           <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',textAlign:'center',}}>
           {props.title}
           </div>
          </Typography>
          <Typography gutterBottom variant='body2' color='text.primary'>
            Quality level : {props.quality}      
          </Typography>
          <Typography gutterBottom variant='body1' color='text.primary'>
            <LocationOnIcon style={{color:color_icon,marginRight:marg,}}/> {props.location}     
          </Typography>
          <Typography gutterBottom variant='body2' color='text.primary'>
            {props.weight} kg      
          </Typography>
          <Typography gutterBottom variant='body2' sx={{color: 'red'}}>
            {props.price} LKR per 1kg    
          </Typography>


          <CardActions style={{width:'160px',justifyContent:'center',alignItems:'center',}}>
            <Button style={{backgroundColor:back_color,color:font_color,fontSize:'12px',padding:'5px 15px',fontFamily:'sans-serif',margin:'20px 0px 0px 5px',}} onClick={() => routeToPage(WASTAGE_RECYCLE_CENTER_SECTIONS.ITEMDESCRIPTION)}>View Details</Button>
          </CardActions>
        </CardContent>
        </div>
      </Card>

    </Box>
  );
}
