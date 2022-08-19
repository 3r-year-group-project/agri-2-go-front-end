import { Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import './wastagepref.css'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ButtonForAdd from '../OderLayout/ButtonForAdd';

export default function WastagePreference(props) {

    
  const [open, setOpen] =React.useState(false);

  const handleClickOpen = () =>{
      setOpen(true);
  }

  const handleClose = () =>{
      setOpen(false);
  }

  const [category, setCategory] = React.useState('');

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const [quality, setQuality] = React.useState('');

  const handleChangeQuality = (event) => {
    setQuality(event.target.value);
  };
 
  const [location, setLocation] = React.useState('');

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
 

  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}}>
    <div className='background-preference'>
        <Box 
        width="90vw"
        maxWidth="xl"
        >
          <Card style={{height:'auto', margin:'10px  80px',borderRadius:'5px',backgroundColor:'#075e54',color:'#fff',}}>
            
            <div className="topic-preference">
            <CardContent>
              <h2 style={{fontSize:'35px',fontWeight: '500'}}>Wastage Preference</h2>
            </CardContent>
            </div>
        <Divider color='#9df58c'/>
        
            <CardContent>
            <div className='preference-data-row'>
              <List>
              
                <ListItem>
                  <div className="listitem-data-row">
                    <ListItemText style={{textAlign: 'left',}}>Preference Category</ListItemText>
                    <ListItemText style={{textAlign: 'right',}}>Pumkin</ListItemText>
                  </div>
                </ListItem>
                <Divider color='#9df58c'/>

                <ListItem>
                   <div className="listitem-data-row">
                    <ListItemText style={{textAlign: 'left',}}>Expected Quality Level</ListItemText>
                    <ListItemText style={{textAlign: 'right',}}>Animal fodder</ListItemText>
                  </div>
                </ListItem>
                <Divider color='#9df58c'/>

                <ListItem>
                <div className="listitem-data-row">
                  <ListItemText style={{textAlign: 'left',}}>Preference Location</ListItemText>
                  <ListItemText style={{textAlign: 'right',}}>Kandy</ListItemText>
                </div>
                </ListItem>
                <Divider color='#9df58c'/>

                <ListItem>
                <div className="listitem-data-row">
                  <ListItemText style={{textAlign: 'left',}}>Price (1kg)</ListItemText>
                  <ListItemText style={{textAlign: 'right',}}>150.00</ListItemText>
                </div>
                </ListItem>
                <Divider color='#9df58c'/>

              </List>
              </div>
            </CardContent>
      
            <div className="button-pref">
            <CardActions>
              <ButtonForAdd name="Edit" action={handleClickOpen}/>
            </CardActions>
            </div>
          </Card>
        </Box>

        <Dialog 
        open={open} 
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        >

          <DialogTitle style={{fontSize:'25px',}}>Wastage Data</DialogTitle>
          <Divider style={{marginBottom:'20px',}}/>

          <DialogContent>
            <List dense>

                <ListItem>
                  <ListItemText>
                    <Typography gutterBottom variant='body2' color='text.primary' style={{fontSize:'17px',marginLeft:'40px',}}>
                        Preferred Category  :  
                    </Typography>
                  </ListItemText>

                  <ListItemText>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Preferred Category</InputLabel>
                      <Select
                        id="prference-category"
                        label="Preference Category"
                        value={category}
                        onChange={handleChangeCategory}
                        fullWidth
                        Width='305px'
                        >
                          <MenuItem value="all">All</MenuItem>
                          <MenuItem value="1">Carrot</MenuItem>
                          <MenuItem value="2">Tomato</MenuItem>
                          <MenuItem value="3">Pumkin</MenuItem>
                        </Select>
                      </FormControl>
                  </ListItemText>
                </ListItem>
                
                <ListItem>
                  <ListItemText>
                    <Typography gutterBottom variant='body2' color='text.primary' style={{fontSize:'17px',marginLeft:'40px',}}>
                    Expected Quality Level  :  
                    </Typography>
                  </ListItemText>

                  <ListItemText>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Expected Quality Level</InputLabel>
                        <Select
                        id='expected-quality-level'
                        label='Expected Quality Level'
                        value={quality}
                        onChange={handleChangeQuality}
                        placeholder="Qulity level"
                        fullWidth
                        Width='305px'
                        >
                          <MenuItem value="rotten">Rotten</MenuItem>
                          <MenuItem value="about-to-rot">About to rot</MenuItem>
                          <MenuItem value="slurries">Slurries</MenuItem>
                          <MenuItem value="animal-fodder"> Animal fodder</MenuItem>
                          <MenuItem value="slurries">Peels</MenuItem>
                        </Select>
                    </FormControl> 
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemText>
                    <Typography gutterBottom variant='body2' color='text.primary' style={{fontSize:'17px',marginLeft:'40px',}}>
                    Preferred Locations  :  
                    </Typography>
                  </ListItemText>

                  <ListItemText>
                  <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Preferred Locations</InputLabel>
                      <Select
                        id="preference-location"
                        label="Preference Location"
                        value={location}
                        onChange={handleChangeLocation}
                        >
                          <MenuItem value="colombo">Colombo</MenuItem>
                          <MenuItem value="Gampaha">Gampaha</MenuItem>
                          <MenuItem value="Kalutara">Kalutara</MenuItem>
                          <MenuItem value="Kandy">Kandy</MenuItem>
                          <MenuItem value="Matale">Matale</MenuItem>
                          <MenuItem value="Nuwara Eliya">Nuwara Eliya</MenuItem>
                          <MenuItem value="Galle">Galle</MenuItem>
                          <MenuItem value="Matara">Matara</MenuItem>
                          <MenuItem value="Hambantota">Hambantota</MenuItem>
                          <MenuItem value="Jaffna">Jaffna</MenuItem>
                          <MenuItem value="Kilinochchi">Kilinochchi</MenuItem>
                          <MenuItem value="Mannar">Mannar</MenuItem>
                          <MenuItem value="Badulla">Badulla</MenuItem>
                          <MenuItem value="Moneragala">Moneragala</MenuItem>
                          <MenuItem value="Vavuniya">Vavuniya</MenuItem>
                          <MenuItem value="Mullaitivu">Mullaitivu</MenuItem>
                          <MenuItem value="Kegalle">Kegalle</MenuItem>
                          <MenuItem value="Ratnapura">Ratnapura</MenuItem>
                          <MenuItem value="Polonnaruwa">Polonnaruwa</MenuItem>
                          <MenuItem value="Anuradhapura">Anuradhapura</MenuItem>
                          <MenuItem value="Puttalam">Puttalam</MenuItem>
                          <MenuItem value="Kurunegala">Kurunegala</MenuItem>
                          <MenuItem value="Trincomalee">Trincomalee</MenuItem>
                          <MenuItem value="Ampara">Ampara</MenuItem>
                          <MenuItem value="Batticaloa">Batticaloa</MenuItem>
                        </Select>
                  </FormControl>      
                  </ListItemText>
                </ListItem>

                <ListItem>
                <ListItemText>
                  <Typography gutterBottom variant='body2' color='text.primary' style={{fontSize:'17px',marginLeft:'40px',}}>
                  Price (1kg) :  
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <TextField
                  autoFocus
                  margin="dense"
                  id="price"
                  label="Price"
                  type="number"
                  placeholder='Price here'
                  
                  fullWidth
                  variant="outlined"
                  />
                </ListItemText>
                </ListItem>

            </List>
            <DialogActions>
              <Button onclick={handleClose} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
              <Button onclick={handleClose} variant="contained" sx={{backgroundColor: 'green'}}>Save</Button>
            </DialogActions>

          </DialogContent>
        </Dialog>
    </div>
    </div>
  )
}
