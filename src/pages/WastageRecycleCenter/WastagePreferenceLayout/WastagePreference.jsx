import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FormControl from '@mui/material/FormControl';



import WastagePreferenceCard from './WastagePreferenceCard';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function WastagePreference(props) {
  const [open, setOpen] =React.useState(false);
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
  const handleClickOpen = () =>{
    setOpen(true);
}

const handleClose = () =>{
    setOpen(false);
}
  return (
    <>
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}}>
    <Typography
          sx={{ flex: '1 1 100%' }}
        //   variant="h5"
          id="tableTitle"
          component="div"
          color='#075E54'
          fontWeight='700'
          fontSize='28px'

        >
        Wastage Preference
        </Typography>
        <Button variant="contained" onClick={handleClickOpen}><AddBoxIcon/>{"\u00a0\u00a0"}Add New</Button>
      <WastagePreferenceCard 
        vegitable={["Tomato","Potato","onion"]}
        quality="Animal fod"
        price='100'

      />
      <WastagePreferenceCard 
        vegitable="Potato"
        quality="Eadable"
        price='150'
      />
      </div>
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
    </>
  );
}
    
