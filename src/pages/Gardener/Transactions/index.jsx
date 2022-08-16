import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TransactionTable from "../../../components/Transactions";

function createData(date, description, amount) {
    return { date, description, amount };
}
  
const rows = [
    createData('2022.08.25', "Description", "3700.00"),
    createData('2022.08.26', "Description blablbabla  lblalblabla lbalblabla", "2500.00"),
    createData('2022.08.27', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "1600.00"),
    createData('2022.08.28', "Description", "6000.00"),
    createData('2022.08.29', "Description blablbabla lblalblalb  lbalblabla", "1600.00"),
    createData('2022.08.30', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "3200.00"),
    createData('2022.08.31', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "9000.00"),
    createData('2022.09.01', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "10000.00"),
    createData('2022.09.02', "Description  alblalba lblalblabla lbalblabla", "2600.00"),
    createData('2022.09.03', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "2000.90"),
    createData('2022.09.04', "Description blablbabla lblalblalb ", "1700.00"),
    createData('2022.09.05', "Description blablbabla lblalblalb alblalba  lbalblabla", "1900.00"),
    createData('2022.09.06', "Description  lblalblalb alblalba lblalblabla lbalblabla", "1800.00"),
    createData('2022.09.07', "Description", "3700.00"),
    createData('2022.09.08', "Description blablbabla  lblalblabla lbalblabla", "2500.00"),
    createData('2022.09.09', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "1600.00"),
    createData('2022.09.10', "Description", "6000.00"),
    createData('2022.09.11', "Description blablbabla lblalblalb  lbalblabla", "1600.00"),
    createData('2022.09.12', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "3200.00"),
    createData('2022.09.13', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "9000.00"),
    createData('2022.09.14', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "10000.00"),
    createData('2022.09.15', "Description  alblalba lblalblabla lbalblabla", "2600.00"),
    createData('2022.09.16', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "2000.90"),
    createData('2022.09.17', "Description blablbabla lblalblalb ", "1700.00"),
    createData('2022.09.18', "Description blablbabla lblalblalb alblalba  lbalblabla", "1900.00"),
    createData('2022.09.19', "Description  lblalblalb alblalba lblalblabla lbalblabla", "1800.00"),
    createData('2022.08.20', "Description", "3700.00"),
    createData('2022.08.21', "Description blablbabla  lblalblabla lbalblabla", "2500.00"),
    createData('2022.08.22', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "1600.00"),
    createData('2022.08.23', "Description", "6000.00"),
    createData('2022.08.24', "Description blablbabla lblalblalb  lbalblabla", "1600.00"),
    createData('2022.08.25', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "3200.00"),
    createData('2022.08.26', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "9000.00"),
    createData('2022.09.27', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "10000.00"),
    createData('2022.09.28', "Description  alblalba lblalblabla lbalblabla", "2600.00"),
    createData('2022.09.29', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "2000.90"),
    createData('2022.09.30', "Description blablbabla lblalblalb ", "1700.00")
].sort((a, b) => (a.date < b.date ? -1 : 1));

export default function GardenerTransactions() {
    return(
        <Box m={2} sx={{paddingLeft: 3, paddingRight: 3}}>
            <Box m={2} sx={{paddingTop: 3, paddingBottom: 2}}>
                <center><FormLabel id="title"><font size="18"><b>Transaction Details</b></font></FormLabel></center>
            </Box>
            <TransactionTable rows={rows}/>
        </Box>
    );
}