import { Typography } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import { CssBaseline} from '@mui/material';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import background from "../../assets/images/bg4.jpg"
import { CenterFocusStrong } from "@mui/icons-material";





export default function ContinueRegistration(params) {
  const navigate = useNavigate();

  return(
    <React.Fragment>
            <NavBar/>
            
           
      <CssBaseline />
    
      <div style={{ maxWidth: 'auto',   minHeight:630, backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor:'#f5f9fb', 
  }}>
    {/* backgroundSize:'150vh', backgroundPosition:'right', */}
  <div style={{ width:'100%',   minHeight:630,   background: 'rgba(255, 255, 255, 0.6)', paddingLeft:120, paddingTop:150,
  }} >
      <Typography variant="h3" sx={{
              fontWeight:600,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Poppins', sans-serif",
              color: "#075E54", 
             
            // color: "primary", 
           
              
            }}style={{ lineHeight: "70px" }} >Agri2GO for Real transactions of Vegetable crops  <br/> 
            </Typography>
            <div style={{ paddingTop:20, 
  }}>
            <Typography  sx={{
    
              fontSize:36,
              fontWeight:500,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Poppins', sans-serif",
              color: "#074C0E", 
           
            
              
            }} >
                Welcome to 'Agri2Go'. <br/>
                Click Continue to Coutinue Your Registration Process.<br/>

            </Typography>
            </div>
            
            <div>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => navigate('/register')}
              sx={{ width: 250, padding: 1, marginTop: 7 ,fontSize: 20, marginRight:4}}
            >
             <b> CONTINUE</b> 
            </Button>
           
            </div>
            </div>
        </div>
        <Footer/>
        </React.Fragment>
    );


   
}