import * as React from 'react';
import { Typography, Grid, Card, Toolbar } from "@mui/material";
import tempImage from '../../../assets/images/rice.png';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import 'react-tippy/dist/tippy.css';
import Filter from '../../../components/FilterBar';

import {
    Tooltip,
} from 'react-tippy';

export default function Sellers() {
  const [crops, setcrops] = React.useState(30);

  function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }

  const jsx = `
<Grid container spacing={2}>
`;

  return (
    <div>
        <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            // sx={boxDefault}
            >
            <Filter id="filter-sellers" label="Filter" options={[{title: "By Distance"}, {title: "By Crop"}]}/>
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
                            <img src={tempImage} alt="seller" width="150" height="150"/>
                            <Typography align="left" variant="body2" sx={{color:'#000000'}}>Seller {value}</Typography>
                            <Typography align="left" variant="body2" sx={{color:'#000000'}}>Distance: ___km</Typography>
                        </Card>
                    </label>
                </Tooltip>
                </Grid>
            ))}
            </Grid>
        </Grid>
    </div>
  );
}
