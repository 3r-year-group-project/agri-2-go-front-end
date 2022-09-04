import {Box, Button, Card,CardMedia,CardActions, CardContent,CardActionArea, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import React from 'react'
import './vehicalCard.css'

export default function VehicleCard(props) {

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
        <Box width='50vw'>
            <Card className='main_container'>
                <div className="image_container">
                    <CardMedia
                    component="img"
                    height='300vh'
                    image={props.image}
                    alt='vehicle'/>
                </div>

                <div className="details_container">
                   

                    <div className="description_row">
                        <CardContent>
                            <List>
                                <ListItem>
                                    <ListItemText>Vehicle Type : </ListItemText>
                                    <ListItemText>{props.vehicletype}</ListItemText>
                                </ListItem>

                                <ListItem>
                                    <ListItemText>capacity : </ListItemText>
                                    <ListItemText>{props.capacity} &nbsp;Kg</ListItemText>
                                </ListItem>

                                <ListItem>
                                    <ListItemText>Vehicle No : </ListItemText>
                                    <ListItemText>{props.vehicleno}</ListItemText>
                                </ListItem>

                                <ListItem>
                                    <ListItemText>Driver Name : </ListItemText>
                                    <ListItemText>{props.drivername}</ListItemText>
                                </ListItem>

                                <ListItem>
                                    <ListItemText>Contact Number : </ListItemText>
                                    <ListItemText>{props.vehiclenumber}</ListItemText>
                                </ListItem>
                            </List>
                        </CardContent>
                    </div>

                    <div className="button_row">
                        <CardContent>
                            <Button variant='contained' onClick={handleClickOpen} style={{backgroundColor:'#3333ff',marginLeft:'0px'}}>Edit</Button>
                            {/* <Button variant='contained' style={{backgroundColor:'red',marginLeft:'0px'}}>Delete</Button> */}
                        </CardContent>
                    </div>
                </div>
            </Card>
        </Box>

        <Dialog 
        open={open} 
        onClose={handleClose} 
        fullWidth
        maxWidth='sm'
        >
        <DialogTitle style={{textAlign:'left',}}>Edit Vehicle Details</DialogTitle>
    <Divider/>
        <div className='item-space'>
        <DialogContent style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography style={{width:'150px',}} gutterBottom variant='body1' color="text.primary">
                Vehical Type
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
                <MenuItem value={1}>Motorcycle</MenuItem>
                <MenuItem value={2}>Three Wheeler</MenuItem>
                <MenuItem value={3}>Car</MenuItem>
                <MenuItem value={4}>Van</MenuItem>
                <MenuItem value={5}>Lorry</MenuItem>
                <MenuItem value={6}>Other</MenuItem>
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
                    size='small'
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
  )
}
