import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Cart from '../../../components/cart';

export function FarmerCart(){
    return(
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
            <Box m={2} sx={{paddingLeft: 3, paddingRight: 3}}>
                <Box m={2} sx={{paddingTop: 3, paddingBottom: 2}}>
                    <center><FormLabel id="title"><font size="18"><b>My Cart</b></font></FormLabel></center>
                </Box>
                <Cart/>
            </Box>
        </div>
    );
}