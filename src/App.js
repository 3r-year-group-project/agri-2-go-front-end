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
          /**
           * TODO: add codes what needs to be done after user type is found
           */
      }).catch(err => {
        console.log(err);
      });
    }else{
      /***
       * TODO: add code what needs to be done if user is not authenticated
       */
    }
  }, isAuthenticated);
  return (
    <ThemeProvider theme={theme}>
      
  <Router/>

  </ThemeProvider>
  );
}

export default App;
