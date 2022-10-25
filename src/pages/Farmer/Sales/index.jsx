import * as React from 'react';
import { Typography } from '@mui/material';
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

export default function FarmerSales() {
    return(
        <div style={{ background: 'white', padding:'5%',minHeight:'100%'}} >
           
            <Typography variant='h5' color='#075E54' marginBottom='20px'><b>Sales</b></Typography>
            <SalesTable rows={rows}/>
   
        </div>
    );
}