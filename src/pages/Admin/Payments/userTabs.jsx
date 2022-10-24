import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FarmerTable from './farmerTable';
import WastageTable from './wrcTable';
import TransporterTable from './transporterTable';
import StockBuyerTable from './stockBuyerTable';

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
              <Tab label="Stock Buyer" value="2" />
              <Tab label="Transporter" value="3" />
              <Tab label="Wastage Recycle Center" value="4" />
             
            </TabList>
          </Box>
          <TabPanel value="1"><FarmerTable/></TabPanel>
          <TabPanel value="2"><StockBuyerTable/></TabPanel>
          <TabPanel value="3"><TransporterTable/></TabPanel>
          <TabPanel value="4"><WastageTable/></TabPanel>
          
        </TabContext>
      </Box>
    );
  }
  