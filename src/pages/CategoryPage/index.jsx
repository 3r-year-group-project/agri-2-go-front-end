import React from "react";
import { Typography } from "@mui/material";
import Footer from "../../components/Footer";
import CategoryNavBar from "../../components/CategoryNavbar";







export default function CategoryPage(params) {
    return(
        <div>
            <CategoryNavBar/>
            <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100vh'
  }} ></div>
        
            <Footer/>
           
        
        </div>
    )
}