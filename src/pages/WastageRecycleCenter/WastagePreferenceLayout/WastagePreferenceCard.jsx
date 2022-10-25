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
import axios from "axios";
import { PrintTwoTone } from '@mui/icons-material';
import swal from 'sweetalert';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function WastagePreferenceCard(props) {

  const [top20Vegetables, setVeg] = React.useState(props.items);
  const [open, setOpen] =React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [category, setCategory]= React.useState(  getCategory());
  const [level, setLevel]= React.useState(getLevel());
  const [price, setPrice]= React.useState(props.price);

  function getCategory() {
   var vegArray= props.vegitable.split(',');
   var lvlArray= props.quality.split(',');
   var res = [];
   for (let i = 0; i < vegArray.length; i++) {
    res.push({title: vegArray[i]});
   }
   return res;
  }

  function getLevel() {    
    var lvlArray= props.quality.split(',');
    var res = [];
    for (let i = 0; i < lvlArray.length; i++) {
     res.push({title: lvlArray[i]});
    }
    return res;
   }

  const handleOpenDelete = () => {
    setOpenDelete(true);
  }

  const handleCloseDelete = () => {
    setOpenDelete(false);
  }

  const Printt = (val) => {
    console.log(val,"val");
  }

  const handleDeleteCall = () => {
    axios.delete('/api/wrc/wastage/'+props.id).then((res)=>{                  
      setOpenDelete(false);
      swal("Successful!", "You deleted wastage preference!", "success"); 
      // alert("Wastage Category Removed Successfully!");
    });  
    
  }

  const handleClickOpen = () =>{
      setOpen(true);     
  }

  const handleUpdate = () =>{
    var catString = Array.prototype.map.call(category, function(cat) { return cat.title; }).join(",");
    var levelString = Array.prototype.map.call(level, function(lvl) { return lvl.title; }).join(",");
    const wastage = {price : price, category:catString , level:levelString};
    axios.post('/api/wrc/wastage/'+props.id, wastage).then((res)=>{  
      swal("Successful!", "You updated wastage preference!", "success");                       
      // alert("Wastage Category Updated Successfully!");
      setOpen(false); 
    });
  }

  const handleClose = () =>{
      setOpen(false);
  }

  
  const [quality, setQuality] = React.useState('');

 
  const [location, setLocation] = React.useState('');

 

  return (
    <div className='background-preference'>
        <Box 
        width="60vw"
        maxWidth="xl"
        >
          <Card style={{height:'auto', margin:'10px 30px',borderRadius:'5px',backgroundColor:'#075e54',color:'#fff',}}>
            
            <div className="topic-preference">
            <CardContent>
              <h2 style={{fontSize:'22px',fontWeight: '500'}}>My Preferences</h2>
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
              {/* <ButtonForAdd name="Edit" action={handleClickOpen} sx={{backgroundColor: 'blue'}}/> */}
              <Button variant="contained" onClick={handleClickOpen} color="info">Edit</Button>
              <Button variant="contained" onClick={handleOpenDelete} color="error">Delete</Button>
              
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
                        value={category}
                        onChange={(event, value) => setCategory(value)}
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
                        onChange={(event, value) => setLevel(value)}
                        value={level}
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
                  onChange={(event) => setPrice(event.target.value)}
                  value={price}
                  fullWidth
                  variant="outlined"
                  />
                </ListItemText>
                </ListItem>

            </List>
            <DialogActions>
              <Button onClick={handleClose} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
              <Button onClick={handleUpdate} variant="contained" sx={{backgroundColor: 'green'}}>Save</Button>
            </DialogActions>

          </DialogContent>
        </Dialog>

        <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle style={{backgroundColor: 'white', color: 'black'}}>Delete Confirmation</DialogTitle>
        <DialogContent style={{backgroundColor: 'white', color: 'black'}}>
          <DialogContentText>
            <h3>Are you sure you want to delete this?</h3>
          </DialogContentText>
          </DialogContent>
        <DialogActions style={{backgroundColor: 'white'}}>
          <Button onClick={handleCloseDelete} variant="outlined" color="secondary">Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteCall}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}



const qualityLevels = [
  { title: 'Rotten' },
  { title: 'About to rot'},
  { title: 'Slurries'},
  { title: 'Animal fodder'},
  { title: 'Peels'},
 
  
 
];

