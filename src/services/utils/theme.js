import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#128C7E',
    // main: '#075E54',
    

    },
    secondary: {
      main: '#25D366',
    },
    
    background: {
      default: '#ffffff',
      paper: '#075E54',
    },
    text: {
      default:'#000000',
      primary: '#ffffff',
      secondary: 'gray',
    },
    //#34B7F1
    divider: {
      default:'#ffffff',
     
      secondary: 'gray',
    },
  },
  typography: {
    subtitle1: {
      fontSize: 14,
    },
    body1: {
      fontWeight: 500,
    },
    
  },
  step: {
    "& $completed": {
      color: "lightgreen"
    },
    "& $active": {
      color: "pink"
    },
    "& $disabled": {
      color: "red"
    }
  },
});

export default theme;