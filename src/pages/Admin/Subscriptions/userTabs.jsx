import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Sub from './subscription'

export default function ReportTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} >
              <Tab label="Farmer" value="1" />
              <Tab label="Gardener" value="2" />
              <Tab label="Stock Buyer" value="3" />
              <Tab label="Grocery Seller" value="4" />
              <Tab label="Transporter" value="5" />
              <Tab label="Wastage Recycle Center" value="6" />
             
            </TabList>
          </Box>
          <TabPanel value="1"><Sub/></TabPanel>
          <TabPanel value="2"><Sub/></TabPanel>
          <TabPanel value="3"><Sub/></TabPanel>
          <TabPanel value="4"><Sub/></TabPanel>
          <TabPanel value="5"><Sub/></TabPanel>
          <TabPanel value="6"><Sub/></TabPanel>
          
        </TabContext>
      </Box>
    );
  }
  