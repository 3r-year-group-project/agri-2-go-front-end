import { Typography } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import { CssBaseline} from '@mui/material';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import background from "../../assets/images/bg4.jpg"





export default function HomePage(params) {
  const navigate = useNavigate();


  const isAuthenticated='1';
  const userRole='1';


if (isAuthenticated==1) {
  switch (userRole) {
    case '0':
      navigate('/continueregistration');
      break;
    case '1':
      navigate('/admin/dash/dashboard');
      break;
    case '2':
      navigate('/customer/category');
      break;
    case '3':
      navigate('/farmer/category');
      break;
    case '4':
      navigate('/gardener/category');
      break;
    case '5':
      navigate('/stockbuyer/dash/dashboard');
      break;
    case '6':
      navigate('/groceryseller/dash/dashboard');
      break;
    case '7':
      navigate('/transporter/dash/dashboard');
      break;
    case '8':
      navigate('/wastagerecyclecenter/dash/dashboard');
      break;
    default:
      break;
  }
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
            >
             <b> TRY FOR FREE</b> 
            </Button>
            <Button
              color="secondary"
              variant="contained"
              
              sx={{ width: 200, padding: 1, marginTop: 7 ,fontSize: 20, backgroundColor: "#128C7E"}}
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