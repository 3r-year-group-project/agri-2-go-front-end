/* eslint-disable no-unused-vars */
import { Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import './wastagepref.css'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ButtonForAdd from '../OderLayout/ButtonForAdd';

import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function WastagePreferenceCard(props) {

    
  const [open, setOpen] =React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleOpenDelete = () => {
    setOpenDelete(true);
  }

  const handleCloseDelete = () => {
    setOpenDelete(false);
  }

  const handleClickOpen = () =>{
      setOpen(true);
  }

  const handleClose = () =>{
      setOpen(false);
  }

  const [category, setCategory] = React.useState('');


  const [quality, setQuality] = React.useState('');

 
  const [location, setLocation] = React.useState('');

 

  return (
    <div className='background-preference'>
        <Box 
        width="90vw"
        maxWidth="xl"
        >
          <Card style={{height:'auto', margin:'10px 30px',borderRadius:'5px',backgroundColor:'#075e54',color:'#fff',}}>
            
            <div className="topic-preference">
            <CardContent>
              <h2 style={{fontSize:'28px',fontWeight: '500'}}>Wastage Preferences</h2>
            </CardContent>
            </div>
        <Divider color='#9df58c'/>
        
            <CardContent>
            <div className='preference-data-row'>
              <List>
              
                <ListItem>
                  <div className="listitem-data-row">
                    <ListItemText style={{textAlign: 'left',}}>Preferred Category: {"\u00a0"}</ListItemText>
                    <ListItemText style={{textAlign: 'right',}}>{props.vegitable}</ListItemText>
                  </div>
                </ListItem>
                <Divider color='#9df58c'/>

                <ListItem>
                   <div className="listitem-data-row">
                    <ListItemText style={{textAlign: 'left',}}>Expected Quality Level: {"\u00a0"}</ListItemText>
                    <ListItemText style={{textAlign: 'right',}}>{props.quality}</ListItemText>
                  </div>
                </ListItem>
                <Divider color='#9df58c'/>

                {/* <ListItem>
                <div className="listitem-data-row">
                  <ListItemText style={{textAlign: 'left',}}>Preferred Location</ListItemText>
                  <ListItemText style={{textAlign: 'right',}}>Kandy</ListItemText>
                </div>
                </ListItem>
                <Divider color='#9df58c'/> */}

                <ListItem>
                <div className="listitem-data-row">
                  <ListItemText style={{textAlign: 'left',}}>Price (1kg): {"\u00a0"}</ListItemText>
                  <ListItemText style={{textAlign: 'right',}}>{props.price}</ListItemText>
                </div>
                </ListItem>
                <Divider color='#9df58c'/>

              </List>
              </div>
            </CardContent>
      
            <div className="button-pref">
            <CardActions>
              <ButtonForAdd name="Edit" action={handleClickOpen} sx={{backgroundColor: 'blue'}}/>
              <ButtonForAdd name="Delete" action={handleOpenDelete} sx={{backgroundColor: 'red'}}/>
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
                      {/* <InputLabel id="demo-simple-select-label">Preferred Category</InputLabel> */}
                      <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={top20Vegetables}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                          <li {...props}>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              style={{ marginRight: 8, color: '#fff' }}
                              checked={selected}
                            />
                            {option.title}
                          </li>
                        )}
                        style={{ width: 500, color: '#fff' }}
                        renderInput={(params) => (
                          <TextField {...params} label="Preferred Category" placeholder="Preferred Category" />
                        )}
                      />

                      {/* <Select
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
                        </Select> */}
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
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={qualityLevels}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                          <li {...props}>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              style={{ marginRight: 8, color: '#fff' }}
                              checked={selected}
                            />
                            {option.title}
                          </li>
                        )}
                        style={{ width: 500, color: '#fff' }}
                        renderInput={(params) => (
                          <TextField {...params} label="Expected Quality Level" placeholder="Expected Quality Level" />
                        )}
                      />
                        
                    </FormControl> 
                  </ListItemText>
                </ListItem>

                {/* <ListItem>
                  <ListItemText>
                    <Typography gutterBottom variant='body2' color='text.primary' style={{fontSize:'17px',marginLeft:'40px',}}>
                    Preferred Locations  :  
                    </Typography>
                  </ListItemText>

                  <ListItemText>
                  <FormControl fullWidth>
                  <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
                        options={locationsList}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, { selected }) => (
                          <li {...props}>
                            <Checkbox
                              icon={icon}
                              checkedIcon={checkedIcon}
                              style={{ marginRight: 8, color: '#fff' }}
                              checked={selected}
                            />
                            {option.title}
                          </li>
                        )}
                        style={{ width: 500, color: '#fff' }}
                        renderInput={(params) => (
                          <TextField {...params} label="Preferred Locations" placeholder="Preferred Locations" />
                        )}
                      />
                      
                  </FormControl>      
                  </ListItemText>
                </ListItem> */}

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
              <Button onClick={handleClose} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
              <Button onClick={handleClose} variant="contained" sx={{backgroundColor: 'green'}}>Save</Button>
            </DialogActions>

          </DialogContent>
        </Dialog>

        <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle style={{backgroundColor: 'white'}}>Add to schedule</DialogTitle>
        <DialogContent style={{backgroundColor: 'white', color: 'black'}}>
          <DialogContentText>
            <h3>Confirm to Decline the request</h3>
          </DialogContentText>
          </DialogContent>
        <DialogActions style={{backgroundColor: 'white'}}>
          <Button onClick={handleCloseDelete} variant="outlined" color="secondary">Cancel</Button>
          <Button variant="contained" color="error" onClick={handleCloseDelete}>Remove</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const top20Vegetables = [
  { title: 'Carrots' },
  { title: 'Eggplant'},
  { title: 'Cabbage'},
  { title: 'Cauliflower'},
 
  
 
];

const qualityLevels = [
  { title: 'Rotten' },
  { title: 'About to rot'},
  { title: 'Slurries'},
  { title: 'Animal fodder'},
  { title: 'Peels'},
 
  
 
];

