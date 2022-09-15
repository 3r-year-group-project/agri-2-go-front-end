import * as React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CropDetails from './cropDetails';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { CardMedia, Stack } from '@mui/material';
import bean from '../../assets/images/beans.jpg'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import SlideShow from './slideShow';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



    
// const itemData = [
//   {
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Filoma-Kohl_vor_der_Ernte.jpg/1280px-Filoma-Kohl_vor_der_Ernte.jpg',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Raphanus_sativus.jpg/1280px-Raphanus_sativus.jpg',
//     title: 'Burger',
//   },
  
//   {
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/7carrots.jpg/1920px-7carrots.jpg',
//     title: 'Carrot',
//   },
//   {
//     img: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Bohne_z01.JPG',
//     title: 'Carrot',
//   },
  
  
// ];


export default function Card(props) {
  const navigate =useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user, isAuthenticated, isLoading } = useAuth0();
  const handleDecline =async (id) => {
    axios.post('/api/stockbuyer/requesthandler/decline',{'id':id,'email':user.email})
    .then(res => {
      props.getFarmerRequest();
      
      });
  }


  const handleAccept = async (id)=>{
    axios.post('/api/stockbuyer/paymethandler/pay',{'id':id,'email':user.email, 'cropName':props.cropName,'minAdvance':props.minAdvance,'images':props.itemData , 'farmerid':props.farmerid})
    .then((res) => {
      if(res.data.url){
        window.location.href=res.data.url
       
      }
    }).catch((err)=>console.log(err.message))
  }
    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper sx={{
                display: 'flex',
                flexDirection: 'column',
                // height: 250
            }}>
                <Stack spacing={2} direction='row'>
                
      <ImageList sx={{ width: 400, height: 250 }} cols={1} rowHeight={400}>
      {props.itemData.map((item) => (
     
        <ImageListItem key={item.id} onClick={handleOpen} >
          <img
            src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.id}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SlideShow  imagesList={props.itemData}/>
      </Modal>
      
      
      <div>
                <Paper elevation={0} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // width:600,
                    paddingBottom:1,
                    paddingLeft:1
                }}>
                    <CropDetails
                    farmerName={props.farmerName}
                    farmerDistance={props.farmerDistance}
                    farmerPlace={props.farmerPlace}
                    cropName={props.cropName}
                    quantity={props.quantity}
                    price={props.price}
                    minAdvance={props.minAdvance}
                    date={props.date}
                    />
                </Paper>
                <Paper elevation={0} justifyContent="space-between" sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    //  width:700,
                    paddingBottom:2,
                    paddingLeft:'350px'
                    
                }}>
                    <Stack direction='row' spacing={5} >
                    <Button variant="contained" onClick={()=>{handleAccept(props.id)}} color="success" startIcon={<CheckIcon />}>
                        Accept
                    </Button>
                    <Button variant="outlined" color="error" onClick={()=>{handleDecline(props.id)}} endIcon={<ClearIcon />}>
                        Decline
                    </Button>
                    </Stack>
                </Paper>
                </div>
                </Stack>
            </Paper>
        </Grid>
    );
}