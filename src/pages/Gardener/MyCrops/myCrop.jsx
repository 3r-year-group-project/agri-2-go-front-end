import * as React from 'react';
import { Typography, Grid, Card, Toolbar } from "@mui/material";
import tempImage from '../../../assets/images/rice.png';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom"
import 'react-tippy/dist/tippy.css';

import {
    Tooltip,
} from 'react-tippy';

export default function MyCrop() {
    const navigate = useNavigate();
    const [crops, setcrops] = React.useState(30);

    function range(start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    const jsx = `
    <Grid container spacing={2}>
    `;

  return (
    <Box m={3}>
        <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
        >
            <IconButton aria-label="addCrop" size="large" onClick={()=>navigate("/gardener/dash/addcrop")}>
                <AddCircleOutlineIcon />
            </IconButton>
        </Box>
        <Grid item xs={12}>
            <Grid container justifyContent="left" spacing={3}>
            {range(0, crops).map((value) => (
                <Grid key={value} item>
                <Tooltip
                    title="My name is chikki"
                    theme="light"
                >
                    <label>
                        <Card  
                        sx={{
                            padding: '10px 3px',
                            border: '1px solid',
                            borderRadius: 2,
                            backgroundColor: '#FFFFFF', 
                            boxShadow: '1',
                            "&:hover": {
                            backgroundColor: "#EAEAEA",},
                        }}>
                            <img src={tempImage} alt="crop" width="150" height="150"/>
                            <Typography align="left" variant="body2" sx={{color:'#000000'}}>Crop {value}</Typography>
                            <Typography align="left" variant="body2" sx={{color:'#000000'}}>Rs. ___</Typography>
                        </Card>
                    </label>
                </Tooltip>
                </Grid>
            ))}
            </Grid>
        </Grid>
    </Box>
  );
}
