import {Box, Button, Card,CardMedia,CardActions, CardContent,CardActionArea, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import React from 'react'
import '../../Transporter/My Vehicle/myVehical.css'

import { Container } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormPropsTextFields from './content'

import { borderRadius, padding } from '@mui/system';

import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';


export default function Vegetables(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const [vehicals, setvehical] = React.useState('');
  
    const handleChange = (event) => {
      setvehical(event.target.value);
    };

  return (
    <div>
        <Box width='50vw' backgroundColor='white'>
       
      <FormPropsTextFields/>
  
            
        </Box>

        
    <br/>
        
     
    </div>
  )
}