import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import DashboardContent from './dashboard'
import {checkWord} from "../../../services/utils/FormValidation"; 


export default function LoadStocks(){

  const [data,setData] = React.useState({
    market:'',
    vegetable:'',
    quantity: 0
  });

  const [errorText, setErrorText] = React.useState({
    vegetable:'',
    market:'',
    quantity:''
  });

  const handleVegetable = (e) => {
    setData({...data,vegetable:e.target.value})
  }

  const handleMarket = (e) => {
    setData({...data,market:e.target.value})
  }

  const handleQuantity = (e) => {
    // setData({...data,quantity:e.target.value})
    let ob = checkWord(e.target.value,1,10);
        if(ob.state == true){
            setData ((prev) => {
                return({...prev, quantity : e.target.value});
            });
            setErrorText((prev) => {
                return({...prev, quantity : ""});
            });
        }else{
            setErrorText((prev) => {
                return({...prev, quantity : ob.errors});
            });
            setData ((prev) => {
                return({...prev, quantity : ""});
            });
        }
  }

  const [pData, setPData] = React.useState([]);

  const handleSubmit = (e) => {
    if(!Object.values(data).includes("")){
      axios.post('/api/farmer/viewprice/pricefluctuations', {...data})
          .then(res => {
            setPData(res.data.data);});
    }else{
      setErrorText((prev) => {
          return({...prev, totalError : "Please fill all the fields"});
      });
    }
  }

  const [markets, setMarkets] = React.useState([]);
  const [vegetables, setVegetables] = React.useState([]);
  const [insert,setInsert] = React.useState(false);
 
  React.useEffect(() => {
    axios.get('/api/farmer/viewprice/markets')
        .then(res => {
          setMarkets(res.data.data);});  
    axios.get('/api/farmer/viewprice/vegetables')
        .then(res => {
          setVegetables(res.data.data);});  
  },[insert]);
  
  return(
    
    <Fragment>
        
        <Container  component="main" maxWidth="100%">
            <Grid container spacing={1}>
                <Grid item xs={4} sx={{marginTop:"30px"}}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={markets}
                        onSelect={handleMarket}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="The Market" />}
                        sx={{input:{color:'#483838'}}}
                        
                        />
                </Grid>
                <Grid item xs={4} sx={{marginTop:"30px"}}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={vegetables}
                        onSelect={handleVegetable}
                        fullWidth
                        renderInput={(params) => <TextField {...params} label="Vegetable Name" />}
                        sx={{input:{color:'#483838'}}}
                    
                    />
                </Grid>
                <Grid item xs={4} sx={{marginTop:"30px"}}>
                    <TextField
                        id="vegetableQuantity"
                        label="Quantity"
                        placeholder="Quantity"
                        fullWidth
                        onChange={handleQuantity}
                        error={errorText.quantity}
                        helperText={errorText.quantity}
                        sx={{input:{color:'#483838'}}}
                        
                    />
                </Grid>

                <Button
                  onClick={handleSubmit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Show
                </Button>

                <Grid item xs={12} sx={{display: 'flex' , alignItems: 'center',justifyContent: 'center'}}>
                <DashboardContent pData={pData}/>
                
                </Grid>
    
            </Grid>
        </Container>
    </Fragment>
    
  );
}

