import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TransactionTable from "../../components/Transactions";
import { Typography } from '@mui/material';

function createData(date, description, amount, status) {
    return { date, description, amount, status };
}
  
const rows = [
    
    
    createData('2022.08.27', "Kamal Fernando", "1600.00", "+ Pending"),  
    createData('2022.08.29', "Lakmal Silva", "1600.00", "- Completed"),
    createData('2022.08.30', "Nelum Peries", "3200.00", "- Pending")
    
    
].sort((a, b) => (a.date < b.date ? -1 : 1));

export default function GardenerTransactions() {
    return(
        <div style={{ background: 'white', padding:'5%',minHeight:'100%'}} >
           
       
                <Typography variant='h5' color='#075E54' marginBottom='20px'><b>Transactions</b></Typography>
              
                
        
            <TransactionTable rows={rows}/>
        </div>
    );
}