import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import PaymentTable from './table';

export default function Payments() {
    return(
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
           
                <PaymentTable/>
            
        </div>
    );
}