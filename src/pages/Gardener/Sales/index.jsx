import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import SalesTable from '../../../components/Sales';

function createData(name, price, quantity) {
    return {
      name,
      price,
      quantity,
      history: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          amount: 3,
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          amount: 1,
        },
      ],
    };
}

const rows = [
    createData('Carrot', 300, 6.0),
    createData('Tomato', 500, 9.0),
    createData('Beetroot', 180, 6.0),
    createData('Leeks', 420, 3.7),
    createData('Green Chillies', 770, 3.0)
];

export default function GardenerSales() {
    return(
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
            <Box m={2} sx={{paddingLeft: 3, paddingRight: 3}}>
                <Box m={2} sx={{paddingTop: 3, paddingBottom: 2}}>
                    <center><FormLabel id="title"><font size="18"><b>Sales Details</b></font></FormLabel></center>
                </Box>
                <SalesTable rows={rows}/>
            </Box>
        </div>
    );
}