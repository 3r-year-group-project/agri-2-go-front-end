import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

export default function Locations() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="info" style={{float: 'left'}} startIcon={<AddIcon/>} onClick={handleClickOpen}>
        Add New
      </Button>
      <Dialog open={open} onClose={handleClose}
        PaperProps={{
            style: {
            backgroundColor: '#fff',
            boxShadow: 'none',
            },
        }}
       >
        <DialogTitle color="#075E54">Add New Location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add new starting location, please enter your address details here. 
          </DialogContentText>
          <TextField
          sx={{margin: '1rem 0',input: { color: 'black' }}}
            // margin="dense"
            id="addressline1"
            name="addressline1"
            label="Address Line 1"
            type="text"
            fullWidth
            variant="standard"
            required
          />

          <TextField
          sx={{margin: '1rem 0',input: { color: 'black' }}}
            // margin="dense"
            id="addressline2"
            name="addressline2"
            label="Address Line 2 (Optional)"
            type="text"
            fullWidth
            variant="standard"
            
          />

          <TextField
          sx={{margin: '1rem 0',input: { color: 'black' }}}
            // margin="dense"
            id="city"
            name="city"
            label="City"
            type="text"
            fullWidth
            variant="standard"
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
