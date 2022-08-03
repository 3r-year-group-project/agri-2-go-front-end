import React from "react";
import {Routes,Route,Navigate,BrowserRouter} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import AdminLayout from "../layouts/AdminLayout";
import CustomerLayout from "../layouts/CustomerLayout";
import FarmerLayout from "../layouts/FarmerLayout";
import GardenerLayout from "../layouts/GardnerLayout";
import StockBuyerLayout from "../layouts/StockBuyerLayout";
import GrocerySellerLayout from "../layouts/GrocerySellerLayout";
import TransporterLayout from "../layouts/TransporterLayout";
import WastageRecyclecenterLayout from "../layouts/WastageRecycleCenterLayout";
import CategoryPage from "../pages/CategoryPage";
import RegisterPage from "../pages/RegisterPage";

export default function Router() {
  const isAuthenticated='0';
  const userRole='0';
  // admin=1
  // customer=2
  // farmer=3
  // gardener=4
  // stock=5
  // grocery=6
  // trans=7
  // wastage=8
  
      return(
       
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        {/* <Route path="/signup" element={isAuthenticated==='0'?<SignupPage/>:<HomePage/>}/>
        <Route path="/login" element={isAuthenticated==='0'?<LoginPage/>:<HomePage/>}/> */}
        <Route path="/admin/dash/:page" element={isAuthenticated==='1' && userRole==='1'?<AdminLayout/>:<HomePage/>}/>
        <Route path="/customer/dash/:page" element={isAuthenticated==='1' && userRole==='2'?<CustomerLayout/>:<HomePage/>}/>
        <Route path="/customer/category" element={isAuthenticated==='1' && userRole==='2'?<CategoryPage/>:<HomePage/>}/>
        <Route path="/gardener/category" element={isAuthenticated==='1' && userRole==='4'?<CategoryPage/>:<HomePage/>}/>
        <Route path="/farmer/category" element={isAuthenticated==='1' && userRole==='3'?<CategoryPage/>:<HomePage/>}/>
        <Route path="/farmer/dash/:page" element={isAuthenticated==='1' && userRole==='3'?<FarmerLayout/>:<HomePage/>}/>
        <Route path="/gardener/dash/:page" element={isAuthenticated==='1' && userRole==='4'?<GardenerLayout/>:<HomePage/>}/>
        <Route path="/stockbuyer/dash/:page" element={isAuthenticated==='1' && userRole==='5'?<StockBuyerLayout/>:<HomePage/>}/>
        <Route path="/groceryseller/dash/:page" element={isAuthenticated==='1' && userRole==='6'?<GrocerySellerLayout/>:<HomePage/>}/>
        <Route path="/transporter/dash/:page" element={isAuthenticated==='1' && userRole==='7'?<TransporterLayout/>:<HomePage/>}/>
        <Route path="/wastagerecyclecenter/dash/:page" element={isAuthenticated==='1' && userRole==='8'?<WastageRecyclecenterLayout/>:<HomePage/>}/>
        </Routes>
        </BrowserRouter>
   
      )
}