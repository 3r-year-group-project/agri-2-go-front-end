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
import ContinueRegistration from "../pages/ContinueRegistration";




export default function Router() {

  

  
  
      return(
       
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}/>
       
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/continueregistration" element={<ContinueRegistration/>}/>
        {/* <Route path="/signup" element={isAuthenticated==='0'?<SignupPage/>:<HomePage/>}/>
        <Route path="/login" element={isAuthenticated==='0'?<LoginPage/>:<HomePage/>}/>  */}
        <Route path="/admin/dash/:page" element={<AdminLayout/>}/>
        <Route path="/customer/dash/:page" element={<CustomerLayout/>}/>
        <Route path="/customer/category" element={<CategoryPage/>}/>
        <Route path="/gardener/category" element={<CategoryPage/>}/>
        <Route path="/farmer/category" element={<CategoryPage/>}/>
        <Route path="/farmer/dash/:page" element={<FarmerLayout/>}/>
        <Route path="/gardener/dash/:page" element={<GardenerLayout/>}/>
        <Route path="/stockbuyer/dash/:page" element={<StockBuyerLayout/>}/>
        <Route path="/groceryseller/dash/:page" element={<GrocerySellerLayout/>}/>
        <Route path="/transporter/dash/:page" element={<TransporterLayout/>}/>
        <Route path="/wastagerecyclecenter/dash/:page" element={<WastageRecyclecenterLayout/>}/>
        </Routes>
        </BrowserRouter>
   
      )
}