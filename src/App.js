import React from 'react';
import Router from "./routes";
import { ThemeProvider } from '@mui/material/styles';
import theme from './services/utils/theme';



function App() {
  return (
    <ThemeProvider theme={theme}>
      
  <Router/>

  </ThemeProvider>
  );
}

export default App;
