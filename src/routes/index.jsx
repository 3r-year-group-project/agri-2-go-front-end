
import React from "react";

import {Routes,Route,Navigate,BrowserRouter} from 'react-router-dom';
import HomePage from "../pages/HomePage";

import LoginPage from "../pages/LoginPage";

import AdminLayout from "../layouts/AdminLayout";
import CustomerLayout from "../layouts/CustomerLayout";
import FarmerLayout from "../layouts/FarmerLayout";
import GardnerLayout from "../layouts/GardnerLayout";
import StockBuyerLayout from "../layouts/StockBuyerLayout";
import GrocerySellerLayout from "../layouts/GrocerySellerLayout";
import TransporterLayout from "../layouts/TransporterLayout";
import WastageRecyclecenterLayout from "../layouts/WastageRecycleCenterLayout";

export default function Router() {
  
      return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin/:page" element={<AdminLayout/>}/>
        <Route path="/customer/:page" element={<CustomerLayout/>}/>
        <Route path="/farmer/:page" element={<FarmerLayout/>}/>
        <Route path="/gardener/:page" element={<GardnerLayout/>}/>
        <Route path="/stockbuyer/:page" element={<StockBuyerLayout/>}/>
        <Route path="/groceryseller/:page" element={<GrocerySellerLayout/>}/>
        <Route path="/transporter/:page" element={<TransporterLayout/>}/>
        <Route path="/wastagerecyclecenter/:page" element={<WastageRecyclecenterLayout/>}/>
        </Routes>
        </BrowserRouter>
   
      )
}