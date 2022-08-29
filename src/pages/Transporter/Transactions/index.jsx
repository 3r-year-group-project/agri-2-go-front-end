import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TransactionTable from "../../../components/Transactions";
import { Typography } from '@mui/material';

function createData(date, description, amount, contact) {
    return { date, description, amount, contact };
}
  
const rows = [
    
    
    createData('2022.08.27', "Transaction 1", "1600.00", "Seller Name"),
    
    createData('2022.08.29', "Transaction 2", "1600.00", "Seller Name"),
    createData('2022.08.30', "Transaction 3", "3200.00", "Seller Name"),
    
    createData('2022.09.01', "Transaction 4", "10000.00", "Seller Name"),
    createData('2022.09.02', "Transaction 5", "2600.00", "Seller Name"),
    createData('2022.09.03', "Transaction 6", "2000.90", "Seller Name"),
    createData('2022.09.04', "Transaction 7 ", "1700.00", "Seller Name"),
    
    createData('2022.09.06', "Transaction 8", "1800.00", "Seller Name"),
    
    
    createData('2022.09.09', "Transaction 9", "1600.00", "Seller Name"),
    
    createData('2022.09.11', "Transaction 10", "1600.00", "Seller Name"),
    createData('2022.09.12', "Transaction 11", "3200.00", "Seller Name"),
    createData('2022.09.13', "Transaction 12", "9000.00", "Seller Name"),
    createData('2022.09.14', "Transaction 13", "10000.00", "Seller Name"),
    
    createData('2022.09.16', "Transaction 14", "2000.90", "Seller Name"),
    
    
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