import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import SwitchWislis from './SwitchWislist'
import './wislist.css';

export default function WisTableData(props) {
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

    return (
    <div>
        <List dense>
            <ListItem>
                <ListItemText><Typography sx={{color:'#fff'}}>{props.SellerName}</Typography></ListItemText>
                <ListItemText><Typography sx={{color:'#fff'}}>{props.SellerLocation}</Typography></ListItemText>
                <ListItemText><SwitchWislis/></ListItemText>
                <ListItemText><Button variant="contained" sx={{color:'#fff',backgroundColor:'red',}} onClick={handleOpenDelete}>Remove</Button>

                <Dialog open={openDelete} onClose={handleCloseDelete}>
                    <DialogTitle style={{backgroundColor: 'white', color: 'black'}}>Delete Confirmation</DialogTitle>
                    <DialogContent style={{backgroundColor: 'white', color: 'black'}}>
                    <DialogContentText>
                        <h3>Are you sure you want to remove this?</h3>
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions style={{backgroundColor: 'white'}}>
                    <Button onClick={handleCloseDelete} variant="outlined" color="secondary">Cancel</Button>
                    <Button variant="contained" color="error" onClick={handleCloseDelete}>Delete</Button>
                    </DialogActions>
                </Dialog>

                </ListItemText>
            </ListItem>
            <Divider color='#9df58c'/>
        </List>


    </div>
  )
}
