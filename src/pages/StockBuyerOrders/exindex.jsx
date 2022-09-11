import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import OrderTable from '../../components/Orders';

function createData(date, description, status, contact) {
    return { date, description, status, contact };
}
  
const rows = [
    createData('2022.08.25', "Description", "Pending", "Seller Name"),
    createData('2022.08.26', "Description blablbabla  lblalblabla lbalblabla", "Pending", "Seller Name"),
    createData('2022.08.27', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Completed", "Seller Name"),
    createData('2022.08.28', "Description", "Pending", "Seller Name"),
    createData('2022.08.29', "Description blablbabla lblalblalb  lbalblabla", "Completed", "Seller Name"),
    createData('2022.08.30', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Completed", "Seller Name"),
    createData('2022.08.31', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Pending", "Seller Name"),
    createData('2022.09.01', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Completed", "Seller Name"),
    createData('2022.09.02', "Description  alblalba lblalblabla lbalblabla", "Completed", "Seller Name"),
    createData('2022.09.03', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Completed", "Seller Name"),
    createData('2022.09.04', "Description blablbabla lblalblalb ", "Completed", "Seller Name"),
    createData('2022.09.05', "Description blablbabla lblalblalb alblalba  lbalblabla", "Pending", "Seller Name"),
    createData('2022.09.06', "Description  lblalblalb alblalba lblalblabla lbalblabla", "Completed", "Seller Name"),
    createData('2022.09.07', "Description", "Pending", "Seller Name"),
    createData('2022.09.08', "Description blablbabla  lblalblabla lbalblabla", "Pending", "Seller Name"),
    createData('2022.09.09', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Completed", "Seller Name"),
    createData('2022.09.10', "Description", "Pending", "Seller Name"),
    createData('2022.09.11', "Description blablbabla lblalblalb  lbalblabla", "Completed", "Seller Name"),
    createData('2022.09.12', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Completed", "Seller Name"),
    createData('2022.09.13', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Completed", "Seller Name"),
    createData('2022.09.14', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Completed", "Seller Name"),
    createData('2022.09.15', "Description  alblalba lblalblabla lbalblabla", "Pending", "Seller Name"),
    createData('2022.09.16', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Completed", "Seller Name"),
    createData('2022.09.17', "Description blablbabla lblalblalb ", "Pending", "Seller Name"),
    createData('2022.09.18', "Description blablbabla lblalblalb alblalba  lbalblabla", "Pending", "Seller Name"),
    createData('2022.09.19', "Description  lblalblalb alblalba lblalblabla lbalblabla", "Pending", "Seller Name"),
    createData('2022.08.20', "Description", "Pending", "Seller Name"),
    createData('2022.08.21', "Description blablbabla  lblalblabla lbalblabla", "Pending", "Seller Name"),
    createData('2022.08.22', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Pending", "Seller Name"),
    createData('2022.08.23', "Description", "Pending", "Seller Name"),
    createData('2022.08.24', "Description blablbabla lblalblalb  lbalblabla", "Completed", "Seller Name"),
    createData('2022.08.25', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Pending", "Seller Name"),
    createData('2022.08.26', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Pending", "Seller Name"),
    createData('2022.09.27', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Pending", "Seller Name"),
    createData('2022.09.28', "Description  alblalba lblalblabla lbalblabla", "Completed.", "Seller Name"),
    createData('2022.09.29', "Description blablbabla lblalblalb alblalba lblalblabla lbalblabla", "Pending", "Seller Name"),
    createData('2022.09.30', "Description blablbabla lblalblalb ", "Pending", "Seller Name")
].sort((a, b) => (a.date < b.date ? -1 : 1));

export default function StockBuyerOrders() {
    return(
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
            <Box m={2} sx={{paddingLeft: 3, paddingRight: 3}}>
                <Box m={2} sx={{paddingTop: 3, paddingBottom: 2}}>
                    <center><FormLabel id="title"><font size="18"><b>Order Details</b></font></FormLabel></center>
                </Box>
                <OrderTable rows={rows}/>
            </Box>
        </div>
    );
}