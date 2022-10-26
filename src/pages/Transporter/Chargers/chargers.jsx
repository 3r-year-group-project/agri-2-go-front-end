import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toolbar,Typography  } from '@mui/material';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import Joi from "joi"
import { useValidator } from "react-joi";


export default function ChargersPage() {
  const [insert, setInsert] = React.useState(false);
  const [existCode,setExistCode] = React.useState(false);
  const [chargers, setChargers] = React.useState({
        pickUpRadius: '',
        price0To50: '',
        price50To150: '',
        price150To250: '',
        price250To500:'',
        price500To750: '',
        price750To1000: '',
        price1000To1500: '',
        price1500To2000: '',
  });
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { state, setData, setExplicitField, validate } = useValidator({
    initialData: {
        pickUpRadius: null,
        price0To50: null,
        price50To150: null,
        price150To250: null,
        price250To500:null,
        price500To750: null,
        price750To1000: null,
        price1000To1500: null,
        price1500To2000: null,

    },
    schema: Joi.object({
        pickUpRadius: Joi.number().required().min(1),
        price0To50: Joi.number().required().min(1),
        price50To150: Joi.number().required().min(1),
        price150To250: Joi.number().required().min(1),
        price250To500: Joi.number().required().min(1),
        price500To750: Joi.number().required().min(1),
        price750To1000: Joi.number().required().min(1),
        price1000To1500: Joi.number().required().min(1),
        price1500To2000: Joi.number().required().min(1),
    }),
    explicitCheck: {
        pickUpRadius: false,
        price0To50: false,
        price50To150: false,
        price150To250: false,
        price250To500:false,
        price500To750: false,
        price750To1000: false,
        price1000To1500: false,
        price1500To2000: false,
    },
    validationOptions: {
        abortEarly: true,
    },
})
  React.useEffect(() => {
    axios.get('/api/transporter/chargers/exist/'+user.email).then((res) => {
      console.log('log',res.data);
    setExistCode(res.data.code);
    if(res.data.code){
      setData({
        pickUpRadius: res.data.data[0].pickup_radius,
        price0To50: res.data.data[0].cost_0_50,
        price50To150: res.data.data[0].cost_50_150,
        price150To250: res.data.data[0].cost_150_250,
        price250To500: res.data.data[0].cost_250_500,
        price500To750: res.data.data[0].cost_500_750,
        price750To1000: res.data.data[0].cost_750_1000,
        price1000To1500: res.data.data[0].cost_1000_1500,
        price1500To2000: res.data.data[0].cost_1500_2000   
      });
    }
    });
  }, [insert]);

  const changeRadius = (e) => {
    setData((old) => ({
      ...old,
      pickUpRadius: e.target.value,
  }));
  };
  const changePrice0To50 = (e) => {
    setData((old) => ({
      ...old,
      price0To50: e.target.value,
    }));
  };
  const changePrice50To150 = (e) => {
    setData((old) => ({
      ...old,
      price50To150: e.target.value,
    }));
  };
  const changePrice150To250 = (e) => {
    setData((old) => ({
      ...old,
      price150To250: e.target.value,
    }));
  };
  const changePrice250To500 = (e) => {
    setData((old) => ({
      ...old,
      price250To500: e.target.value,
    }));
  };
  const changePrice500To750 = (e) => {
    setData((old) => ({
      ...old,
      price500To750: e.target.value,
    }));
  };
  const changePrice750To1000 = (e) => {
    setData((old) => ({
      ...old,
      price750To1000: e.target.value,
    }));
  };
  const changePrice1000To1500 = (e) => {
    setData((old) => ({
      ...old,
      price1000To1500: e.target.value,
    }));
  };
  const changePrice1500To2000 = (e) => {
    setData((old) => ({
      ...old,
      price1500To2000: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if(Object.values(state.$data).includes(null) || Object.values(state.$data).includes(null)){
      alert("Please fill all the fields");   
    }else{
      axios.post('/api/transporter/Chargers/setcharges', {email:user.email, ...state.$data,existCode:existCode})
        .then((res) => {
          setInsert(!insert);
        });
    }
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ background: 'white', padding:'5%',minHeight:'100%'}} >
        <br />
        <Typography variant='h5' color='#075E54' ><b>Travel Chargers</b></Typography>
        <br />
        <h5 style={{marginLeft:10, color:'#075E54'}}>Pickup Radius <small>(Minimum distance you go for pickup Km.)</small></h5>
        <TextField
          required
          id="Pickup Radius"
          label="Pickup Radius"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue='Pickup radius'
          variant="filled"
          sx={{ input:{ color: 'black' }}}
          onChange={changeRadius}
          error={state.$errors.pickUpRadius.map((data) => data.$message).join(",")}
          helperText={state.$errors.pickUpRadius.map((data) => data.$message).join(",")}
          value={state.$data.pickUpRadius}
          
        />
        <br />
        <h5 style={{marginLeft:10}}>Prices for trips <small>(Rs.)</small> </h5>
        <TextField
          required
          id="price-0-50km"
          label="Price for trips 0-50km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{ input:{ color: 'black' }}}
          onChange={changePrice0To50}
          onBlur={() => setExplicitField("price0To50", true)}
          error={state.$errors.price0To50.map((data) => data.$message).join(",")}
          helperText={state.$errors.price0To50.map((data) => data.$message).join(",")}
          value={state.$data.price0To50}
        />
        <TextField
          required
          id="price-50-150km"
          label="Price for trips 50-150km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{ input:{ color: 'black' }}}
          onChange={changePrice50To150}
          onBlur={() => setExplicitField("price50To150", true)}
          error={state.$errors.price50To150.map((data) => data.$message).join(",")}
          helperText={state.$errors.price50To150.map((data) => data.$message).join(",")}
          value={state.$data.price50To150}
        />
        <TextField
          required
          id="price-150-250km"
          label="Price for trips 150-250km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{ input:{ color: 'black' }}}
          onChange={changePrice150To250}
          onBlur={() => setExplicitField("price150To250", true)}
          error={state.$errors.price150To250.map((data) => data.$message).join(",")}
          helperText={state.$errors.price150To250.map((data) => data.$message).join(",")}
          value={state.$data.price150To250}
        />
        <TextField
          required
          id="price-250-500km"
          label="Price for trips 250-500km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{ input:{ color: 'black' }}}
          onChange={changePrice250To500}
          onBlur={() => setExplicitField("price250To500", true)}
          error={state.$errors.price250To500.map((data) => data.$message).join(",")}
          helperText={state.$errors.price250To500.map((data) => data.$message).join(",")}
          value={state.$data.price250To500}
        />
        <TextField
          required
          id="price-500-750km"
          label="Price for trips 500-750km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{ input:{ color: 'black' }}}
          onChange={changePrice500To750}
          onBlur={() => setExplicitField("price500To750", true)}
          error={state.$errors.price500To750.map((data) => data.$message).join(",")}
          helperText={state.$errors.price500To750.map((data) => data.$message).join(",")}
          value={state.$data.price500To750}
        />
        <TextField
          required
          id="price-750-1000km"
          label="Price for trips 750-1000km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{ input:{ color: 'black' }}}
          onChange={changePrice750To1000}
          onBlur={() => setExplicitField("price750To1000", true)}
          error={state.$errors.price750To1000.map((data) => data.$message).join(",")}
          helperText={state.$errors.price750To1000.map((data) => data.$message).join(",")}
          value={state.$data.price750To1000}
        />
        <TextField
          required
          id="price-1000-1500km"
          label="Price for trips 1000-1500km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{ input:{ color: 'black' }}}
          onChange={changePrice1000To1500}
          onBlur={() => setExplicitField("price1000To1500", true)}
          error={state.$errors.price1000To1500.map((data) => data.$message).join(",")}
          helperText={state.$errors.price1000To1500.map((data) => data.$message).join(",")}
          value={state.$data.price1000To1500}
        />
        <TextField
          required
          id="price-1500-2000km"
          label="Price for trips 1500-2000km"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          sx={{ input:{ color: 'black' }}}
          onChange={changePrice1500To2000}
          onBlur={() => setExplicitField("price1500To2000", true)}
          error={state.$errors.price1500To2000.map((data) => data.$message).join(",")}
          helperText={state.$errors.price1500To2000.map((data) => data.$message).join(",")}
          value={state.$data.price1500To2000}
        />
      </div>
      {console.log('chargers', chargers)}
      <Toolbar sx={{ justifyContent: "right" }}>
        <Button variant="contained" onClick={()=>{handleSubmit();}} sx={{mr:20}}>Set prices</Button>
      </Toolbar>
      {/* <code>
        <pre style={{color:"black"}}>{JSON.stringify(state.$data, null, 2)}</pre>
      </code> */}
    </Box>
  );
}
