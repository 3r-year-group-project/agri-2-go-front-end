import * as React from 'react';
import { Typography } from '@mui/material'
import UserTabs from './userTabs'

export default function Payments() {
    return(
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
           
           <Typography variant='h5' color='#075E54'><b>Payments</b></Typography><UserTabs/>
        </div>
    );
}