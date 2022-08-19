import React from "react";
import { Typography } from "@mui/material";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import { Logout } from '@mui/icons-material/Logout';
import { useAuth0 } from "@auth0/auth0-react";





export default function CategoryPage(params) {
    const { logout } = useAuth0();
    return(
        <div>
            <NavBar/>
           <Typography color='black'>
           category
           <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
     </Typography>
        
            <Footer/>
           
        
        </div>
    )
}