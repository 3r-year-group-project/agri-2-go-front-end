import React, {useState, useEffect} from "react";
import Router from "./routes";
import { ThemeProvider } from '@mui/material/styles';
import theme from './services/utils/theme';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import {setApiEndPoint} from './services/utils/axios';
import { setApiEndPoint } from './services/utils/api/index';


function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userType, setUserType] = useState(0);
  useEffect(()=>{
    if (isAuthenticated) {
      axios.get(setApiEndPoint(`/user?userId=${user.user_id}`)).then(res =>{
          setUserType(res.userType);
      }).catch(err => {
        console.log(err);
      });
    }
  }, isAuthenticated);
  return (
    <ThemeProvider theme={theme}>
      
  <Router/>

  </ThemeProvider>
  );
}

export default App;
