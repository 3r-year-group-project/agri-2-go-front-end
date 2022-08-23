import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TransactionTable from "../../../components/Transactions";

function createData(date, description, amount, contact) {
    return { date, description, amount, contact };
}
  
const rows = [
    
    
    createData('2022.08.27', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "1600.00", "Seller Name"),
    
    createData('2022.08.29', "Description blablbabla lblalblalb  lbalblabla", "1600.00", "Seller Name"),
    createData('2022.08.30', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "3200.00", "Seller Name"),
    
    createData('2022.09.01', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "10000.00", "Seller Name"),
    createData('2022.09.02', "Description  alblalba lblalblabla lbalblabla", "2600.00", "Seller Name"),
    createData('2022.09.03', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "2000.90", "Seller Name"),
    createData('2022.09.04', "Description blablbabla lblalblalb ", "1700.00", "Seller Name"),
    
    createData('2022.09.06', "Description  lblalblalb alblalba lblalblabla lbalblabla", "1800.00", "Seller Name"),
    
    
    createData('2022.09.09', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "1600.00", "Seller Name"),
    
    createData('2022.09.11', "Description blablbabla lblalblalb  lbalblabla", "1600.00", "Seller Name"),
    createData('2022.09.12', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "3200.00", "Seller Name"),
    createData('2022.09.13', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "9000.00", "Seller Name"),
    createData('2022.09.14', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "10000.00", "Seller Name"),
    
    createData('2022.09.16', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "2000.90", "Seller Name"),
    
    
    
    
    
    
    
    createData('2022.08.24', "Description blablbabla lblalblalb  lbalblabla", "1600.00", "Seller Name"),
    
    
    
    createData('2022.09.28', "Description  alblalba lblalblabla lbalblabla", "2600.00", "Seller Name")
    
    
].sort((a, b) => (a.date < b.date ? -1 : 1));

export default function TransporterTransactions() {
    return(
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
            <Box m={2} sx={{paddingLeft: 3, paddingRight: 3}}>
                <Box m={2} sx={{paddingTop: 3, paddingBottom: 2}}>
                    <center><FormLabel id="title"><font size="18"><b>Transaction Details</b></font></FormLabel></center>
                </Box>
                <TransactionTable rows={rows}/>
            </Box>
        </div>
    );
}