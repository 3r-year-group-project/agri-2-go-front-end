import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ScamReport from './scamReport';
import UserApeal from './userAppeals';

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
            <Tab label="Scam Reports" value="1" />
            <Tab label="User Apeals" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1"><ScamReport/></TabPanel>
        <TabPanel value="2"><UserApeal/></TabPanel>
        
      </TabContext>
    </Box>
  );
}
