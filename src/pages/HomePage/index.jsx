import { Typography } from "@mui/material";
import React,{useEffect,useState} from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import { CssBaseline} from '@mui/material';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import background from "../../assets/images/bg4.jpg"
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { setApiPath } from '../../services/utils/api';




export default function HomePage(props) {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const { loginWithRedirect} = useAuth0();
  // my API url
  axios.defaults.baseURL = "http://localhost:3002";
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*' // for all requests
  if(isLoading) console.log('Loading...');
  if (isAuthenticated && !isLoading) {
    console.log(user);
    axios.get('/api/users/role/'+user.email).then(res =>{
        console.log("user role is authenticated",res.data.data[0].user_type);
        let userRole = res.data.data[0].user_type;
        // admin=1
        // customer=2
        // farmer=3
        // gardener=4
        // stock=5
        // grocery=6
        // trans=7
        // wastage=8
        console.log("user role: " + userRole);
    switch (userRole) {
      case 0:
        navigate('/continueregistration');
        break;
      case 1:
        navigate('/admin/dash/dashboard');
        break;
      case 2:
        navigate('/customer/category');
        break;
      case 3:
        navigate('/farmer/category');
        break;
      case 4:
        navigate('/gardener/category');
        break;
      case 5:
        navigate('/stockbuyer/dash/dashboard');
        break;
      case 6:
        navigate('/groceryseller/dash/dashboard');
        break;
      case 7:
        navigate('/transporter/dash/dashboard');
        break;
      case 8:
        navigate('/wastagerecyclecenter/dash/dashboard');
        break;
      default:
      break;
  }
      
  }).catch(err => {
    console.log(err);
  });
  
}
else if(!isAuthenticated && !isLoading){
  console.log("not authenticated");
  return(
    <React.Fragment>
            <NavBar/>
            
           
      <CssBaseline />
    
      <div style={{ maxWidth: 'auto',   minHeight:630, backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor:'#f5f9fb', 
  }}>
    {/* backgroundSize:'150vh', backgroundPosition:'right', */}
  <div style={{ width:'47%',   minHeight:630,   background: 'rgba(255, 255, 255, 0.6)', paddingLeft:100, paddingTop:150,
  }} >
      <Typography variant="h2" sx={{
              fontWeight:600,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Poppins', sans-serif",
              color: "#075E54", 
              
            // color: "primary", 
           
              
            }}style={{ lineHeight: "70px" }} >Agri2GO for<br/> Real transactions of<br/> Vegetable crops  <br/> 
            </Typography>
            <div style={{ paddingTop:20,
  }}>
            <Typography  sx={{
              fontSize:22,
              fontWeight:500,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Poppins', sans-serif",
              color: "#074C0E", 
           
            
              
            }} >
                Welcome to 'Agri2Go'. We are...
            </Typography>
            </div>
            
            <div>
            <Button
              color="secondary"
              variant="contained"
              
              sx={{ width: 250, padding: 1, marginTop: 7 ,fontSize: 20, marginRight:4}}
              onClick={() => loginWithRedirect()}
            >
             <b> TRY FOR FREE</b> 
            </Button>
            <Button
              color="secondary"
              variant="contained"
              
              sx={{ width: 200, padding: 1, marginTop: 7 ,fontSize: 20, backgroundColor: "#128C7E"}}
              onClick={() => loginWithRedirect()}
            >
             <b> LOGIN</b> 
            </Button>
            </div>
            </div>
        </div>
        <Footer/>
        </React.Fragment>
    );
}

   
}