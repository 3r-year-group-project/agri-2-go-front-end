import { Typography } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import { CssBaseline} from '@mui/material';
import { Button, Stack } from '@mui/material';

import background from "../../assets/images/bg4.jpg"





export default function HomePage(params) {
    const isAuthenticated='0';
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