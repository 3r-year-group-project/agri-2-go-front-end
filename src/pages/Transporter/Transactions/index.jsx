import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TransactionTable from "../../../components/Transactions";
import { Typography } from '@mui/material';

function createData(date, description, amount, status) {
    return { date, description, amount, status };
}
  
const rows = [
    
    
    createData('2022.08.27', "Kamal Fernando", "1600.00", "+ Pending"),  
    createData('2022.08.29', "Lakmal Silva", "1600.00", "- Completed"),
    createData('2022.08.30', "Nelum Peries", "3200.00", "- Pending")
    
    
].sort((a, b) => (a.date < b.date ? -1 : 1));

export default function TransporterTransactions() {
    return(
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'0.5%',minHeight:'100%'}} >
            <Box m={2} sx={{paddingLeft: 3, paddingRight: 3}}>
                <Box m={2} sx={{paddingTop: 3, paddingBottom: 2}}>
                    
                   <Typography sx={{fontSize:'28px', color:'#075E54'}}><b>Transaction Details</b></Typography>
                </Box>
                <TransactionTable rows={rows}/>
            </Box>
        </div>
    );
}