import React from 'react'
import error from '../../assets/images/404.png'
import { Typography } from "@mui/material";

import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import { CssBaseline} from '@mui/material';
import { Button, Stack } from '@mui/material';


export default function PageNotFound() {
  
 return(
    <React.Fragment>
           
            
           
      <CssBaseline />
    
      <div style={{ maxWidth: 'auto',   minHeight:630, backgroundImage: `url(${error})`,
  backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor:'#f5f9fb', 
  }}>
    {/* backgroundSize:'150vh', backgroundPosition:'right', */}
  <div style={{   minHeight:630,  paddingTop:450, paddingLeft:450
  }} >
      <Typography variant="h3" align="center" sx={{
              fontWeight:400,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Poppins', sans-serif",
              color: "#075E54", 
           
            // color: "primary", 
           
              
            }}style={{ lineHeight: "70px" }} > OOPS! <br/>We couldn't find that page
            </Typography>
           
            
            
           
            </div>
        </div>
      
        </React.Fragment>
    );
        }
