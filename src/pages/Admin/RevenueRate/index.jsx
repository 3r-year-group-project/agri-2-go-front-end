import * as React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


export default function RevenueRate() {
    const Item = styled(Paper)(
       
      );
    return(
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
           
           <Typography variant='h5' color='#075E54'><b>Revenue rates</b></Typography>
        
           <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 128,
          backgroundColor:'white',
          color:'black',
          textAlign:'center',
          paddingTop:'50px',
          fontSize:'20px',
          marginBottom:'50px'
        },
      }}
    >
      <Paper elevation={0} >Farmer 10%</Paper>
      
    </Box>
 
    <hr></hr>
    <Typography variant='h6' color='#075E54'><b>Add new rate</b></Typography>
           <form >
           
            <input 
            type="text" 
            value=""
            placeholder='Enter User type'
            style={{
            width: "50%",
            height:'40px',
            border:'none',
            backgroundColor:'white',
            borderRadius:'5px',
            marginLeft:'10px',
            marginTop:'20px'
             }} />
   
            <input 
            type="text" 
            value=""
            placeholder='Enter Revenue rate'
            style={{
            width: "50%",
            height:'40px',
            border:'none',
            backgroundColor:'white',
            borderRadius:'5px',
            marginLeft:'10px',
            marginTop:'7px'
            }} />
    
            <input 
            type="submit"
            style={{
            width: "25%",
            height:'40px',
            border:'none',
            backgroundColor:'#128C7E',
            borderRadius:'5px',
            marginLeft:'10px',
            marginTop:'10px',
            color:'white'
             }} />
        </form>

        </div>
    );
}





