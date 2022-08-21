import { Button } from '@mui/material'
import { Box } from '@mui/system'
import {Card,CardContent,Divider} from '@mui/material'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from 'react'
import './myVehical.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VehicleCard from './Vehicals/VehicleCard';

export default function MyVehicals() {

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
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'2%',minHeight:'100%'}}>
         {/* <Typography style={{textAlign:'left',margin:'20px 0', color: 'green'}} gutterBottom variant='h6' color="text.primary">
                Vehical Details
        </Typography>  
        <Divider color='#9df58c'/>  */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '150px', paddingTop: '25px'}}>
        <Button variant='contained' color="success" onClick={handleClickOpen} endIcon={<AddCircleOutlineIcon/>} size="large">Add New Vehicle</Button>
        </div>

         <div className="main_container">
            <div className="vehicle-card-list">
                <VehicleCard 
                image='https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?w=740&t=st=1660934794~exp=1660935394~hmac=964f2c0d2a9c5d36e3d323cdb9715e0b1b8bd8b3a241bdc9b8309bff1682745f'
                vehicletype='Car'
                vehicleno='BHE 4512'
                drivername='E.S Ajith'
                vehiclenumber='077 2515486'
                />
                <VehicleCard 
                image='https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?w=740&t=st=1660934794~exp=1660935394~hmac=964f2c0d2a9c5d36e3d323cdb9715e0b1b8bd8b3a241bdc9b8309bff1682745f'
                vehicletype='Car'
                vehicleno='BHE 4512'
                drivername='E.S Ajith'
                vehiclenumber='077 2515486'
                />
            </div>

            <Dialog 
            open={open} 
            onClose={handleClose} 
            fullWidth
            maxWidth='sm'
            >
            <DialogTitle style={{textAlign:'left',}}>Add New Vehicle</DialogTitle>
        <Divider/>
            <div className='item-space'>
            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                    Vehicle Type
                </Typography>
                <FormControl >
                    <InputLabel id="demo-simple-select-label">Vehicle Type</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={vehicals}
                    label="Vehical Type"
                    onChange={handleChange}
                    style={{width:'250px',}}
                    
                    >
                    <MenuItem value={1}>Car</MenuItem>
                    <MenuItem value={2}>Van</MenuItem>
                    <MenuItem value={3}>Lorry</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>

            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                    Vehicle No
                </Typography>

                <TextField
                autoFocus
                margin="dense"
                id="Vehical No"
                label="Vehical No"
                type="text"
                fullWidth
                variant="outlined"
                style={{width:'250px',}}
            />
            </DialogContent>

            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                    Driver Name
                </Typography>

                <TextField
                autoFocus
                margin="dense"
                id="Driver Name"
                label="Driver Name"
                type="text"
                fullWidth
                variant="outlined"
                style={{width:'250px',}}
            />
            </DialogContent>

            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                    Contact Number
                </Typography>

                <TextField
                autoFocus
                margin="dense"
                id="Contact Number"
                label="Contact Number"
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                fullWidth
                variant="outlined"
                style={{width:'250px',}}
            />
            </DialogContent>

            <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                    Upload Image
                </Typography>
                <div className='image_upload'>
                    <input
                    type='file'
                    
                    id='files'
                    accept='image/*'
                    style={{width:'250px',}}
                    />
                    <div className="lable-container">
                    <label for='files'>
                        Choose image
                    </label>
                    </div>
                </div>
            </DialogContent>
        </div>
        <br/>
            <DialogActions>
            <Button onClick={handleClose} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
            <Button onClick={handleClose} variant="contained" sx={{backgroundColor: 'green'}}>Save</Button>
            </DialogActions>
        </Dialog>
      </div>
   
    </div>
  )
}
