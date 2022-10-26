import React, { Fragment, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TransactionTable from "../../../components/Transactions";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from '@mui/material';

function createData(date, description, amount, status) {
    return { date, description, amount, status };
}
  
let rows = [
    
    
    // createData('2022.08.27', "Kamal Fernando", "1600.00", "+ Pending"),  
    // createData('2022.08.29', "Lakmal Silva", "1600.00", "- Completed"),
    // createData('2022.08.30', "Nelum Peries", "3200.00", "- Pending")
    

    
    
].sort((a, b) => (a.date < b.date ? -1 : 1));


export default function FarmerTransactions() {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const[insert,setInsert] = React.useState(false);

    React.useEffect(() => {
        console.log("Running Transaction!!!!!!!!!!");
        axios.post('/api/farmer/transactions/getdetails',{email:user.email})
                .then(res => {
                    console.log(res.data.data);
                rows = []
                for(let i=0;i<res.data.data.length;i++){
                  rows.push(createData(res.data.data[i].date_time.slice(0,10),res.data.data[i].first_name.concat(" ", res.data.data[i].last_name),res.data.data[i].min_advance,res.data.data[i].status));
                  console.log(res.data.data[i])
                  setInsert(true);  
                }
                  });
                    
        
      }, [insert]);

    return(
         <div style={{ background: 'white', padding:'5%',minHeight:'100%'}} >
         
         <Typography variant='h5' color='#075E54' marginBottom='20px'><b>Transactions</b></Typography>
           
             <TransactionTable rows={rows}/>

     </div>
    );
}