import { Box, Button, Card, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SelectBox from './SelectBox';
import ButtonForChat from './ButtonForChat';
import ButtonForAdd from './ButtonForAdd';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';



export default function OrderComponent(props) {


    const [open2, setOpen2] =React.useState(false);

    const handleClickOpen2 = () =>{
        setOpen2(true);
    }

    const handleClose2 = () =>{
        setOpen2(false);
    }


  return (
    <div>
    {/* <Box width='70vw' margin="auto">
        <Card style={{padding:'10px',width:'96.2%',backgroundColor:'#075e54', color:'#fff',}}> */}
       <div className='table-row'>
        <List dense>
            <ListItem>
                <ListItemText><Typography sx={{color:'#fff'}}>{props.date}</Typography></ListItemText>
                <ListItemText><Typography sx={{color:'#fff'}}>{props.orderName}</Typography></ListItemText>
                <ListItemText><Typography sx={{color:'#fff'}}>{props.pickupDate}</Typography></ListItemText>
                <ListItemText><Typography sx={{color:'#fff'}}>{props.status}</Typography></ListItemText>
                
                {/* <ListItemText>
                    <SelectBox/>
                </ListItemText> */}
                
                {/* <ListItemText><ButtonForChat name='Start Chat' links='/' icon={<QuestionAnswerIcon/>}/></ListItemText> */}
                {/* <ListItemText><Button variant='contained' endIcon={<ControlPointOutlinedIcon/>} onClick={handleClickOpen} sx={{backgroundColor: 'blue'}}>Add Details</Button></ListItemText> */}
                <ListItemText><ButtonForAdd name='View' action={handleClickOpen2}/></ListItemText>
                {/* <ListItemText><Button variant='contained' sx={{backgroundColor: 'red'}}>Remove</Button></ListItemText> */}
            </ListItem>
            <Divider color='#9df58c'/>

        </List>
        
    </div>
    {/* </Card>
  </Box>   */}


        <Dialog open={open2} onClose={handleClose2} fullWidth
        maxWidth="sm">
            <DialogContent>

            <DialogTitle style={{marginLeft:'-10px',fontSize:'28px',}}>Order Details</DialogTitle>

                <DialogContentText style={{marginLeft:'15px',fontSize:'17px', color: '#999'}}>
                    Details about your order.
                </DialogContentText>
                <br />

                <List dense fullWidth>
                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Seller Name</Typography></ListItemText>
                        <ListItemText><Typography sx={{color:'#ffff',}}>K.U. Ashmitha</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Order Name</Typography> </ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'#ffff',}}>{props.orderName}</Typography></ListItemText>
                    </ListItem>                    

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}> <Typography sx={{color:'#ffff',}}>Location</Typography></ListItemText>
                        <ListItemText> <Typography sx={{color:'#ffff',}}>32/C, Mirissa Rd, Kandy</Typography> </ListItemText>
                    </ListItem>


                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Waste Quality</Typography></ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'#ffff',}}>Rotten</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Quantity</Typography> </ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'#ffff',}}>2kg</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Price</Typography> </ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'#ffff',}}>200LKR</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Order Date</Typography> </ListItemText>
                        <ListItemText style={{color:'#666',}}><Typography sx={{color:'#ffff',}}>{props.date}</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Pickup Date</Typography> </ListItemText>
                        <ListItemText style={{color:'#666',}}><Typography sx={{color:'#ffff',}}>{props.pickupDate}</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'#ffff',}}>Status</Typography> </ListItemText>
                        <ListItemText style={{color:'#666',}}><Typography sx={{color:'#ffff',}}>Pending</Typography></ListItemText>
                    </ListItem>
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose2} variant="outlined" sx={{color: '#fff'}}>Cancel</Button>
            </DialogActions> 
        </Dialog>
    
</div>
  )
}
