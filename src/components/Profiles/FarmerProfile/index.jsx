import React from "react";
import { Avatar, Badge, Card, CardActions, CardContent, Fab, List, ListItem, ListItemText, Stack, TextField, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Locations from "./addLocations";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import CategoryNavBar from "../../CategoryNavbar";
import axios from 'axios';
// import Joi from "joi"
// import { useValidator } from "react-joi"
import {checkWord} from "../../../services/utils/FormValidation";
import { isSameDateError } from "@mui/x-date-pickers/internals/hooks/validation/useDateValidation";


export default function FarmerProfilePage(params) {

    const {user} = useAuth0();
    const navigate = useNavigate();
    
    const [edit, setEdit] = React.useState(false);
    const [data1,setData1] = React.useState({
        
        firstName : '',
        lastName : '',
        bankName : '',
        accountNumber : '',
        branchName:'',
        accountName:''
    });
    const [data,setData] = React.useState({
        
        firstName : '',
        lastName : '',
        bankName : '',
        accountNumber : '',
        branchName:'',
        accountName:''
    });
    const [error,setError] = React.useState({
        
        firstName : '',
        lastName : '',
        bankName : '',
        accountNumber : '',
        branchName:'',
        accountName:''
    });

    const update = () => {
        setEdit(!edit);
    };
    React.useEffect(()=>{
        axios.get('/api/farmer/getFarmerDetails/'+user.email).then(res=>{
            console.log(res.data.data[0]);
            setData1({
                firstName : res.data.data[0].first_name,
                lastName : res.data.data[0].last_name,
                bankName : res.data.data[0].bank_name,
                accountNumber : res.data.data[0].account_number,
                branchName:res.data.data[0].branch_name,
                address:res.data.data[0].address,
                accountName:res.data.data[0].account_name
            })
        });
    },[edit, user.email]);

    React.useEffect(()=>{
        console.log(data);
    },[data]);
    
    
    const submitDetails = () => {
        console.log('we submitting');
        if(Object.values(error).includes("")){
            console.log({firstName:data.firstName,lastName:data.lastName,email:user.email});
            axios.post('/api/farmer/updateFarmerDetails/',{firstName:data.firstName,lastName:data.lastName,email:user.email}).then(res=>{
                axios.post('/api/farmer/updateBankDetails',{bankName:data.bankName,accountNumber:data.accountNumber,branchName:data.branchName,accountName:data.accountName,email:user.email}).then(res=>{
                    navigate('/');
                });
            }).catch((err)=>{
                console.log(err);
            });
            
        };
        
    };

    const changeFirstName = (e) => {
        console.log(e.target.value);
        let ob = checkWord(e.target.value,5,30);
        console.log(ob);
        if(!ob.state){
            if(e.target.value.length === 0){
                setData({
                    ...data,
                    firstName : ''
                });
                setError({
                    ...error,
                    firstName : ''
                });
            }
            else{
                setData({
                    ...data,
                    firstName : ''
                });
                setError({
                    ...error,
                    firstName : ob.errors
                });

            }
        }else{
            console.log('here');
            setData((old) => ({
                ...old,
                firstName: e.target.value,
            }));
            setError((old) => ({
                ...old,
                firstName: '',
            }));
        }
        
    };

    const changeLastName = (e) => {
        let ob = checkWord(e.target.value,5,30);
        if(!ob.state){
            if(e.target.value.length === 0){
                setData({
                    ...data,
                    lastName : e.target.value
                });
                setError({
                    ...error,
                    lastName : ''
                });
            }
            else{
                setData({
                    ...data,
                    lastName : ''
                });
                setError({
                    ...error,
                    lastName : ob.errors
                });

            }
        }else{
            setData((old) => ({
                ...old,
                lastName: e.target.value,
            }));
            setError((old) => ({
                ...old,
                lastName: '',
            }));
        }
    };

    const changeBankName = (e) => {
        let ob = checkWord(e.target.value,5,30);
        if(!ob.state){
            if(e.target.value.length === 0){
                setData({
                    ...data,
                    bankName : e.target.value
                });
                setError({
                    ...error,
                    bankName : ''
                });
            }
            else{
                setData({
                    ...data,
                    bankName : ''
                });
                setError({
                    ...error,
                    bankName : ob.errors
                });

            }
        }else{
            setData((old) => ({
                ...old,
                bankName: e.target.value,
            }));
            setError((old) => ({
                ...old,
                bankName: '',
            }));
        }
    };

    const changeAccountNumber = (e) => {
        let ob = checkWord(e.target.value,10,15);
        if(!ob.state){
            if(e.target.value.length === 0){
                setData({
                    ...data,
                    accountNumber : e.target.value
                });
                setError({
                    ...error,
                    accountNumber : ''
                });
            }
            else{
                setData({
                    ...data,
                    accountNumber : ''
                });
                setError({
                    ...error,
                    accountNumber : ob.errors
                });

            }
        }else{
            setData((old) => ({
                ...old,
                accountNumber: e.target.value,
            }));
            setError((old) => ({
                ...old,
                accountNumber: '',
            }));
        }
    };

    const changeBranchName = (e) => {
        let ob = checkWord(e.target.value,5,30);
        if(!ob.state){
            if(e.target.value.length === 0){
                setData({
                    ...data,
                    branchName : e.target.value
                });
                setError({
                    ...error,
                    branchName : ''
                });
            }
            else{
                setData({
                    ...data,
                    branchName : ''
                });
                setError({
                    ...error,
                    branchName : ob.errors
                });

            }
        }else{
            setData((old) => ({
                ...old,
                branchName: e.target.value,
            }));
            setError((old) => ({
                ...old,
                branchName: '',
            }));
        }
    };

    const changeAccountName = (e) => {
        let ob = checkWord(e.target.value,5,30);
        if(!ob.state){
            if(e.target.value.length === 0){
                setData({
                    ...data,
                    accountName : e.target.value
                });
                setError({
                    ...error,
                    accountName : ''
                });
            }
            else{
                setData({
                    ...data,
                    accountName : ''
                });
                setError({
                    ...error,
                    accountName : ob.errors
                });

            }
        }else{
            setData((old) => ({
                ...old,
                accountName: e.target.value,
            }));
            setError((old) => ({
                ...old,
                accountName: '',
            }));
        }
    };

    return(
        <div style={{background: 'rgba(37, 211, 102, 0.2)'}}>

          <CategoryNavBar/>

            <>
       <Container>


        <Box md={{display:"inline-block"}}>

            <Paper
    
                component="form"
                sx={{ display: 'flex', alignItems: 'center', width:'80%' ,bgcolor:'white',color:'black', marginTop: 5, marginRight: 'auto', marginLeft: 'auto'}}>

      
               
                
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} sx={{paddingX: 15, paddingY: 5, paddingBottom: 5,}}>
                    <Grid item xs={12} sx={{mb: 5}}>
                                <Box
                                    display="inline-block" 
                                    alignItems="left"
                                    justifyContent="left"
                                >
                                    <Badge 
                                    badgeContent={  
                                        <label htmlFor="upload-photo">
                                        <input
                                            style={{ display: 'none' }}
                                            id="upload-photo"
                                            name="upload-photo"
                                            type="file"
                                        />
                                        <Fab color="primary" size="small" component="span" aria-label="add">
                                            <EditIcon />
                                        </Fab>
                                        </label>} 
                                        overlap="circular" anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                                        <Avatar alt="farmer" sx={{ width: 150, height: 150, mb: 2, boxShadow: 5,}} 
                                        src={user.picture} />
                                    </Badge>
                                </Box>
                               
                                <Typography sx={{display: 'inline-block'}}>&nbsp; &nbsp; &nbsp;</Typography>
                                <Box 
                                    display="inline-block" 
                                    alignItems="left"
                                    justifyContent="left">
                                <Typography variant="h5" color="#075E54" align="left" sx={{fontFamily: 'Raleway', fontSize: 28, }}>{data1.firstName}&nbsp;{data1.lastName}&nbsp;</Typography>
                                <Typography variant="subtitle1" color="#999" align="left" >Farmer</Typography>
                                </Box>
                                </Grid>

                        <Grid item xs={12} sx={{mb: 4}}>
                            <Typography variant="h6" color="#075E54" sx={{fontFamily: 'Raleway'}}>Personal Details</Typography>
                            <Divider color="#999"/>
                        </Grid>
                                              
                        <Grid item xs={6}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>First Name             
                            <TextField
                                sx={{ input: { color: 'black' } }}
                                onChange={changeFirstName}
                                helperText={error.firstName}
                                error={error.firstName===''?false:true}
                                margin="dense"
                                type="text"
                                placeholder={data1.firstName}
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>
                        <Grid item xs={6}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Last Name             
                            <TextField
                                onChange={changeLastName}
                                sx={{ input: { color: 'black' } }}
                                helperText={error.lastName}
                                error={error.lastName===''?false:true}
                                margin="dense"
                                type="text"
                                placeholder={data1.lastName}
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>

                        {/* <Grid item xs={12}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Email Address            
                            <TextField
                                margin="dense"
                                id="price"
                                type="text"
                                placeholder='sirilperera@gmail.com'
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid> */}

                        <Grid item xs={12} sx={{mb: 2, mt: 4}}>
                            <Typography variant="h6" color="#075E54" sx={{fontFamily: 'Raleway'}}>working Location Details</Typography>
                            <Divider color="#999" sx={{mb: 2}}/>
                            <Locations update={update}/>
                        </Grid>
                        
                            <Grid item xs={8}>
                                <Card sx={{backgroundColor: '#fff'}}>
                                    <CardContent>
                                        <Typography style={{display: 'inline-block'}} variant="body1" color="#999">
                                        {data1.address}
                                        </Typography>
                                        {/* <IconButton style={{display: 'inline-block', float: 'right'}} color="error" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton> */}
                                    </CardContent>
                                </Card>
                            </Grid>

                            

                        <Grid item xs={12} sx={{mt: 4, mb: 4}}>
                            <Typography variant="h6" color="#075E54" sx={{fontFamily: 'Raleway'}}>Bank Account Details</Typography>
                            <Divider color="#999"/>
                        </Grid>
                                              
                        <Grid item xs={6}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Bank Name             
                            <TextField
                                onChange={changeBankName}
                                sx={{ input: { color: 'black' } }}
                                helperText={error.bankName}
                                error={error.bankName===''?false:true}
                                margin="dense"
                                type="text"
                                placeholder={data1.bankName}
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>
                        <Grid item xs={6}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Branch Name             
                            <TextField
                                onChange={changeBranchName}
                                sx={{ input: { color: 'black' } }}
                                helperText={error.branchName}
                                error={error.branchName===''?false:true}
                                margin="dense"
                                type="text"
                                placeholder={data1.branchName}
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>

                        <Grid item xs={12}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Account Name            
                            <TextField
                                onChange={changeAccountName}
                                sx={{ input: { color: 'black' } }}
                                helperText={error.accountName}
                                error={error.accountName===''?false:true}
                                margin="dense"
                                type="text"
                                placeholder={data1.accountName}
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>

                        <Grid item xs={12}>
                            <label style={{fontSize:'17px',marginLeft:'10px', color: '#075E54'}}>Account Number           
                            <TextField
                                onChange={changeAccountNumber}
                                sx={{ input: { color: 'black' } }}
                                helperText={error.accountNumber}
                                error={error.accountNumber===''?false:true}
                                margin="dense"
                                type="text"
                                placeholder={data1.accountNumber}
                                fullWidth
                                variant="outlined"
                                inputProps={{
                                    sx: {
                                    "&::placeholder": {
                                        color: "#075E54"
                                    }
                                    }
                                }}
                            /></label> 
                        </Grid>

                            

                           
                        <Grid item xs={12} sx={{mt: 5}}>
                           
                            <Stack spacing={2} direction="row">
                            {/* <Button variant="outlined" size="large" >Cancel</Button> */}
                            <Button variant="contained" size="large" onClick={submitDetails}>Save</Button>
                            </Stack>
                            
                        

                        </Grid>
  
                    </Grid>
                    





            </Paper>


            


        </Box>
       



        
       
   
          
         </Container>
   
         </>


           {/* <Typography color='black'>
           profile
           
     </Typography> */}


           
        
        </div>
    )
}
