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




export default function HomePage(props) {
  const { user, isAuthenticated, isLoading,loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // loginWithRedirect({
      //    appState: {
      //      targetUrl: window.location.href,
      //    },
      //  });
     }
    
  }, [isLoading, isAuthenticated]);

  if (!isLoading && isAuthenticated) {
    const email = user.email;
  axios.get('/api/users/role/'+ email).then(res =>{
      let userRole = res.data.data[0].user_type;
      let id = res.data.data[0].id;
      console.log("hello world");
      console.log({userRole,id});
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
      navigate('/continueregistration/'+id);
      break;
    case 1:
      navigate('/admin/dash/dashboard');
      break;
    case 2:
      navigate('/customer/category');
      break;
    case 3:
      navigate('/farmer/dash/dashboard');
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
  else if(isLoading){
    return <div>Loading...</div>;
  }
  else{  
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
    <div style={{ paddingTop:18, paddingLeft:5,
  }}>
            <Typography  sx={{
              
              
              display: { xs: 'flex', md: 'flex' },
              fontFamily: "'Poppins', sans-serif",
              color: "#074C0E", 
              fontSize: {xs: '24px', md: '22px'},
              fontWeight: {xs: 600, md: 500}
           
            
              
            }} >
                Welcome to 'Agri2Go'. 
            </Typography>
            </div>
      <Typography variant="h3" sx={{
              fontWeight:600,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Poppins', sans-serif",
              color: "#075E54", 
              
              
            // color: "primary", 
           
              
            }}style={{ lineHeight: "70px" }} >Agri2GO for<br/> Real Transactions of<br/> Vegetable crops  <br/> 
            </Typography>
            
            
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
   