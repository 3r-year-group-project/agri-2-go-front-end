import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import Alert from '@mui/material/Alert';
import swal from 'sweetalert';


import WastagePreferenceCard from './WastagePreferenceCard';
import dxTabPanel from 'devextreme/ui/tab_panel';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function WastagePreference(props) {
  const [open, setOpen] =React.useState(false);
  const [top20Vegetables, setVeg] = React.useState([]);
  const [category, setCategory]= React.useState([]);
  const [level, setLevel]= React.useState([]);
  const [price, setPrice]= React.useState(0);
   const [dt, setData] =React.useState([]);

   const runner = axios.get('/api/wrc/wastage').then((res)=>{                  
          setData(res.data.data);
    });
    getVegetables();
    function getVegetables() {    
      axios.post('/api/farmer/sellrequest/getVegetableList').then((res)=>{                          
        var tempArray = [];
        for (let i = 0; i < res.data.data.length; i++) {
          tempArray.push({title: res.data.data[i].name});
         }
         setVeg(tempArray);
      });    
     }
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
  
const handleCreate = () =>{
  var catString = Array.prototype.map.call(category, function(cat) { return cat.title; }).join(",");
  var levelString = Array.prototype.map.call(level, function(lvl) { return lvl.title; }).join(",");
  const wastage = {price : price, category:catString , level:levelString};
  axios.post('/api/wrc/wastage/', wastage).then((res)=>{  
    
      
    swal("Successful!", "You added wastage preference!", "success");                
    // alert("Wastage Category Created Successfully!");
    setOpen(false); 
  });
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
        <Box
          m={1}

          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        
        >
        <Button variant="contained" size="large" onClick={handleClickOpen}  startIcon={<AddIcon/>} sx={{backgroundColor: '#075E54'}}>Add New</Button>
        </Box>

        <>{dt != null ? dt.map (item => (<WastagePreferenceCard 
          vegitable={item.category}
          quality={item.quality_level}
          price={item.price}
          id={item.id}
          items={top20Vegetables}
        />)) : null} </>
      
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
                        onChange={(event, value) => setCategory(value)}
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
                        onChange={(event, value) => setLevel(value)}
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
                  
                  fullWidth
                  variant="outlined"
                  />
                </ListItemText>
                </ListItem>

            </List>
            <DialogActions>
              <Button onClick={handleClose} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
              <Button onClick={handleCreate} variant="contained" sx={{backgroundColor: 'green'}}>Save</Button>
            </DialogActions>

          </DialogContent>
        </Dialog>
    </>
  );
}
    
