import React, { Fragment, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

import { Autocomplete, Avatar, ButtonGroup, CardHeader, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputLabel, List, ListItem, ListItemText, MenuItem, Select, Stack, styled, Typography } from '@mui/material';

import FormControlLabel from '@mui/material/FormControlLabel';

// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Input,FormControl} from '@mui/material';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import OrderDetails from './../../components/Orders/orderDetails';
import { Send } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SnackBarComponent from '../../components/Snackbars';
export default function StockBuyerOrders() {
  const [values, setValues] = React.useState({'item':'','date':'','quantity':'','unit_price':'','code':'','image':'','advance':''});
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState({
    type: '',
    message: '',
  });
  


    const [openDetails, setOpen] =React.useState(false);
    const [data, setData] =React.useState([]);
    const [orderDetails, setOrderDetails] =React.useState([]);
    const [farmerDetails, setFarmerDetails] =React.useState([]);
    const [farmers, setFarmersList] =React.useState([]);
    const [openReceived, setOpenReceived] =React.useState(false);
    const [openNotReceived, setOpenNotReceived] =React.useState(false);

    const [reason, setNotReceivedReason] = React.useState('');
    const handleNotReceivedReason = (event) => {
        setNotReceivedReason(event.target.value);
        
  };
    const send = async (id)=>{
    
      axios.post('/api/stockbuyer/orderhandler/recievedorderdetailsupdate',{'id':id,'email':user.email, 'reason':reason})
        .then( res => {
           getOrders()});
          
    }
    const handleClickOpen = (order,farmer) =>{

        setOpen(true);
        setOrderDetails(order)
        setFarmerDetails(farmer)
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const handleClickOpenReceived = (order,farmer) =>{
        setOpenReceived(true);
        setOrderDetails(order)
        setFarmerDetails(farmer)
    }

    const handleCloseReceived = () =>{
        setOpenReceived(false);
        
    }
    const handleClickOpenNotReceived = (order,farmer) =>{
        setOpenNotReceived(true);
        setOrderDetails(order)
        setFarmerDetails(farmer)
    }

    const handleCloseNotReceived = () =>{
        setOpenNotReceived(false);
    }
    const sendRecievedOrderDetails =(id)=>{
     console.log(id)
      axios.post('/api/stockbuyer/paymethandler/recievedorderupdate',{'id':id,'email':user.email, ...values})
      .then((res) => {
        
        if (res?.data?.statusCode==110) {
          console.log(res);
          setSnackBarMessage({
            type: 'error',
            message: res?.data?.message,
          });
          setOpenSnackBar(true);
        }
        if(res.data.url){
          window.location.href=res.data.url
         
        }
      }).catch((err)=>console.log(err.message))
    }
    
async function getOrders() {
  axios.get(`/api/stockbuyer/orderhandler/getorders/${user.email}`,)
        .then( res => {
            setData(res.data.data);
            setFarmersList(res.data.farmers);});
          

}
    useEffect( ()  =>{
 getOrders();
    },[])


    
    return (

      
        <Fragment>
        <Container component="main">
        <CssBaseline  />
        <SnackBarComponent open={openSnackBar}
        setOpen={setOpenSnackBar}
        type={snackBarMessage.type}
        message={snackBarMessage.message}  />
        <Typography variant="h5" sx={{color: '#075E54', mt: 4}}>My Orders</Typography>
        <Grid  container spacing={4} sx={{mt: 1, mb: 4}} alignItems="stretch">
        {data.map((d)=>{
          let farmer =farmers.filter((s)=>{if(s.id==d.farmer_id){return s} })[0];
        
       return  <Grid item xs={10} md={10} lg={10} sx={{display: 'flex',}}>
         
            
            <Box>
            <Card sx={{ display: 'flex', height: 200, backgroundColor: '#fff', boxShadow: 2 }}>
            <CardMedia
                component="img"
                sx={{ width: 300, height: 200}}
                image={d.image}
                alt="Lorry-Large"
                />
                <Grid container spacing={0.5}>
                    <Grid item>
                        <CardContent sx={{ flex: '2 0 auto' , pl: 10 , pt: 2 }}>
                            <Typography component="div" variant="h5" color="primary">{d?.vegetable}</Typography>
                            <Typography variant="subtitle1" color="text.secondary">{`${d?.quantity+"Kg"} from ${farmer?.first_name+" "+farmer?.last_name}`}</Typography>
                            <Typography component="div" variant="body1" sx={{color: 'red'}}>{d.order_status}</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 10, mb: 2}}>
                            <Stack direction="row" spacing={4}>
                                <Button variant="contained" color="info" size="small" sx={{padding: 1.5}} onClick={()=>handleClickOpen(d,farmer)}>
                                    Details 
                                </Button>
                                {d.order_status== 'pending' && <Button variant="contained" color="error" size="small" sx={{padding: 1.5}} startIcon={<CloseIcon />} onClick={()=>handleClickOpenNotReceived(d,farmer)}>
                                    Mark as Not Received
                                </Button>}
                                {d.order_status== 'not delivered' &&   <Typography component="div" variant="h5" color="primary">Not Delivered</Typography>}
                                
                                {d.order_status== 'pending'   && <Button variant="contained" color="success" size="small" sx={{padding: 1.5}} startIcon={<CheckIcon />}onClick={()=>handleClickOpenReceived(d,farmer)}>
                                    Mark as Received
                                </Button>}
                                {d.order_status== 'not delivered'   && <Button variant="contained" color="success" size="small" sx={{padding: 1.5}} startIcon={<CheckIcon />}onClick={()=>handleClickOpenReceived(d,farmer)}>
                                    Mark as Received
                                </Button>}
                                
                                {( d.order_status== 'delivered')    && <Typography component="div" variant="h5" color="primary">Delivered</Typography>}
                            </Stack>
                        </Box> 
                    </Grid>
                </Grid>   
            </Card>
        </Box>                  
         
                
            </Grid>
             })}
          </Grid>          
    </Container>

    <Dialog open={openDetails} onClose={handleClose} fullWidth
        maxWidth="sm" PaperProps={{
            style: {
              backgroundColor: 'white',
              boxShadow: 'none',
              color:'black',
            },
          }} >
            <DialogContent >

            <DialogTitle style={{marginLeft:'-10px',fontSize:'22px',}}>
                Order Details
            <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>            
            </DialogTitle>

                <DialogContentText style={{marginLeft:'15px',fontSize:'17px'}}>
                    Details about your order.
                </DialogContentText>
                <br />

                <List dense fullWidth>
                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Date</Typography></ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'black',}}>{orderDetails?.deal_date}</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Order Number</Typography></ListItemText>
                        <ListItemText><Typography sx={{color:'black',}}>{orderDetails?.order_id}</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Farmer Name</Typography></ListItemText>
                        <ListItemText><Typography sx={{color:'black',}}>{farmerDetails?.first_name+" "+farmerDetails?.last_name}</Typography></ListItemText>
                    </ListItem>
                    
                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}> <Typography sx={{color:'black',}}>Location</Typography></ListItemText>
                        <ListItemText> <Typography sx={{color:'black',}}>{farmerDetails?.address}</Typography> </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Category</Typography></ListItemText>
                        <ListItemText style={{color:'#666',}}><Typography sx={{color:'black',}}>{orderDetails?.vegetable}</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Quantity</Typography> </ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'black',}}>{orderDetails?.quantity+"kg"}</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Price</Typography> </ListItemText>
                        <ListItemText style={{color:'#fff',}}><Typography sx={{color:'black',}}>{orderDetails?.price+" LKR"}</Typography></ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemText style={{marginRight:'10px',marginLeft:"50px",}}><Typography sx={{color:'black',}}>Status</Typography> </ListItemText>
                        <ListItemText style={{color:'#666',}}><Typography sx={{color:'black',}}>{orderDetails?.order_status}</Typography></ListItemText>
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>

        {/* not received dialog box */}
        <Dialog open={openNotReceived} onClose={handleCloseNotReceived} fullWidth
        maxWidth="sm" PaperProps={{
            style: {
              backgroundColor: 'white',
              boxShadow: 'none',
              color:'black',
            },
          }}>
            <DialogContent>

            <DialogTitle style={{marginLeft:'-10px',fontSize:'22px',}}>
                Order Details
            <IconButton
            aria-label="close"
            onClick={handleCloseNotReceived}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>            
            </DialogTitle>
               
                <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <FormControl >
     
      <div>
      <FormControl>
      
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={reason}
        onChange={handleNotReceivedReason}
      >
        <FormControlLabel value="not received yet" control={<Radio />} label="Not received yet" />
        <FormControlLabel value="received goods are not in expected quality" control={<Radio />} label="Received goods are not in expected quality" />
      </RadioGroup>
    </FormControl>
       
      </div>
      
<br/>
      <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={()=>handleCloseNotReceived()} >CANCEL</Button>
      <Button variant="contained"  onClick={()=>{send(orderDetails.order_id);handleCloseNotReceived()}} >SEND</Button>
      
    </Stack>
      <div/>
      </FormControl>
    </Box>
                   
            </DialogContent>
        </Dialog>



        {/* received dialog box */}
        <Dialog open={openReceived} onClose={handleCloseReceived} fullWidth
        maxWidth="sm" PaperProps={{
            style: {
              backgroundColor: 'white',
              boxShadow: 'none',
              color:'black',
            },
          }}>
            <DialogContent>

            <DialogTitle style={{marginLeft:'-10px',fontSize:'22px',}}>
                Order Details
            <IconButton
            aria-label="close"
            onClick={handleCloseReceived}
            sx={{
                position: 'absolute',
                right: 8,
                top: 5,
                color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
            </IconButton>            
            </DialogTitle>

                <DialogContentText style={{marginLeft:'15px',fontSize:'17px', color: '#999'}}>
                    Fill this details about your received order.
                </DialogContentText>
            

                <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <FormControl >

      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Ordered Item"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"

         
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          defaultValue={orderDetails.vegetable}
          variant="standard"
         
        />
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
         
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Date"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"

         
        />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      
        label="Recieved Date"
        value={values.date}
        onChange={(e) => {
          setValues(previousState => {
            return { ...previousState, 'date': e }
          });
        }}
        renderInput={(params) => <TextField  sx={{margin: '1rem 0',input: { color: 'black' }}} {...params} />}
      />
    </LocalizationProvider>
 
        
      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Quantity (kg)"
          
          InputProps={{
            inputMode: 'numeric', pattern: '[0-9]*',
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"

         
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
         
          
            required="true"
          type="number"
          variant="standard"
          onChange={(e) => {
            setValues(previousState => {
              return { ...previousState, 'quantity': e.target.value }
            });
          }}
        />
      </div>
      
     
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Unit Price(LKR/kg)"
          required
          type="number"
        
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
            sx={{margin: '1rem 0',input: { color: 'black' }}}
            defaultValue={orderDetails.price}
            InputProps={{
              readOnly: true,
              disableUnderline:true,
            }}
            variant="standard"
         
          
          
        
         
           
        />

      </div>
      <div>
      <TextField
          id="standard-read-only-input"
          sx={{margin: '1rem 0',input: { color: 'black' }}}
          defaultValue="Code"
          InputProps={{
            readOnly: true,
            disableUnderline:true,
          }}
          variant="standard"
        />
        <TextField
        required
        type="number"
            sx={{margin: '1rem 0',input: { color: 'black' }}}
          id="standard-required"
         
          
          
          variant="standard"
          onChange={(e) => {
            setValues(previousState => {
              return { ...previousState, 'code': e.target.value,'item': orderDetails.vegetable,'image': orderDetails.image,'unit_price':orderDetails.price,'advance':orderDetails.min_advance }
            });
          }}
        />

      </div>
      <br/>

      <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={()=>{handleCloseReceived()}} >CANCEL</Button>
      <Button variant="contained"  onClick={()=>{sendRecievedOrderDetails(orderDetails.order_id)}} >Complete Payment</Button>
      
    </Stack>
      <div/>
      </FormControl>
    </Box>
   
            </DialogContent>
        </Dialog>




        
        
        
        
</Fragment>
        
    );
    
  
}


