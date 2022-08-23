import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Review from '../../../components/Review';
import { Typography } from '@mui/material';

export function GardenerReviews(){
    return(
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'0.5%',minHeight:'100%'}} >
            <Box m={2} sx={{paddingLeft: 3, paddingRight: 3}}>
                <Box m={2} sx={{paddingTop: '20px', paddingBottom: 2}}>
                   
                <Typography
          sx={{ flex: '1 1 100%' }}
        //   variant="h5"
          id="tableTitle"
          component="div"
          color='#075E54'
          fontWeight='700'
          fontSize='28px'

        >
        My Reviews
        </Typography>
                </Box>
                <Review/>
            </Box>
        </div>
    );
}