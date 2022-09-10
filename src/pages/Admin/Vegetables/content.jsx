import * as React from 'react';
import { useState,useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import carrot from '../../../assets/images/carrot.jpg';
import bean from '../../../assets/images/beans.jpg';
import PopupForm from './editForm';
import Modal from '@mui/material/Modal';
import axios from 'axios';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  border: '3px solid #075E54',
  boxShadow: 24,
  p: 4,
};

export default function FormPropsTextFields() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [data,setData] = useState([]);


  async function getAllVegDetails() {
    axios.get('/api/admin/handlevegetable/getall',)
        .then(res => {
            setData(res.data.data);});

  }
  useEffect(() => {
    getAllVegDetails()
  },[])
  const  handleDelete = async (id) =>{
    await axios.get(`/api/admin/handlevegetable/delete/${id}`)
        .then(res => {
          getAllVegDetails();
           });
    

  }
  
  return (
    <Box sx={{ bgcolor: 'white', height: 'auto', color:'black', borderRadius:'10px 10px 10px 10px',marginTop:'50px',marginLeft:'50px' }} >
        
        <Button variant="contained" startIcon={<AddCircleIcon/>} color="success" onClick={handleOpen} >
        ADD NEW VEGETABLE
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PopupForm closeHandle={handleClose} getVeg={getAllVegDetails}/>
          <div>
      
  
  
      </div>
        </Box>
      </Modal>

     
       

{data.map((d)=>
    <Card sx={{ display: 'flex', margin:'10px',width:'1000px', marginLeft:'100px' }}>
    <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={d.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column',}}>
      
        <CardContent sx={{ flex: '1 0 auto' ,backgroundColor:'white',color:'black', width:'100%'}}>
          <Typography component="div" variant="h5">
           {d.name}
          </Typography>

        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1,backgroundColor:'white',color:'black', }}>
       {d.description}
          
        </Box>
      </Box>
      <CardContent sx={{ flex: '1 0 auto' ,backgroundColor:'white',color:'black',}}>
    <Stack spacing={3} direction='column'>
        {/* <Button size="medium" variant='contained'>EDIT</Button> */}
   
        <Button size="medium" variant='contained' color="error" onClick={()=>{handleDelete(d.id)}}>DELETE</Button>
        </Stack>
        </CardContent>
      
    </Card>
)}

      

      </Box>
    
  
  );
 
}
