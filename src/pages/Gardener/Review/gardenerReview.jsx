import React from 'react';
import Review from '../../../components/Review/index';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';

export default function GardenerReview() {
    return(
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
            <Box m={2} sx={{paddingLeft: 3, paddingRight: 3}}>
                <Box m={2} sx={{paddingTop: 3, paddingBottom: 2}}>
                    <center><FormLabel id="title"><font size="18"><b>Reviews</b></font></FormLabel></center>
                </Box>
                <Review />
            </Box>
        </div>
    );
}