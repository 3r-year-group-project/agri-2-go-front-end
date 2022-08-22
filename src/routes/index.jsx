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
import AddToWastage from "../pages/StockBuyerAddToWastage";
import StockBuyerSellStocks from "../pages/StockBuyerSellStocks";
import StockBuyerSellWastageStocksDetails from '../pages/StckBuyerWastageStockSellDetails';


import CustomerAddToCart from "../pages/CustomerAddtoCartPage";
import Checkout from "../pages/Checkout"



import PageNotFound from "../pages/PageNotFound";


import FarmerRegistrationForm from "../components/RegistrationForms/Farmer";
import GardenerRegistrationForm from "../components/RegistrationForms/Gardener";
import StockBuyerRegistrationForm from "../components/RegistrationForms/StockBuyer";
import GrocerySellerRegistrationForm from "../components/RegistrationForms/GrocerySeller";
import CustomerRegistrationForm from "../components/RegistrationForms/Customer";
import WastageRecycleCenterRegistrationForm from "../components/RegistrationForms/WastageRecycleCenter";
import TransporterRegistrationForm from "../components/RegistrationForms/Transporter";
import LoginPage from "../pages/LoginPage";



import Review from '../components/Review';


export default function Router() {


  const isAuthenticated='1';
  const userRole='2';

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

        <Route path="/" element={<HomePage />}/>
        <Route path="/stockbuyer/addtowastage" element={<AddToWastage/>}/>  
        <Route path="/stockbuyer/sellstock" element={<StockBuyerSellStocks/>}/>  
        <Route path="/stockbuyer/sellwastagestocks" element={<StockBuyerSellWastageStocksDetails/>}/> 
       
        <Route path="/register/:id" element={<RegisterPage/>}/>
        <Route path="/register/farmer/:id" element={<FarmerRegistrationForm/>}/>
        <Route path="/register/gardener/:id" element={<GardenerRegistrationForm/>}/>
        <Route path="/register/stockbuyer/:id" element={<StockBuyerRegistrationForm/>}/>
        <Route path="/register/groceryseller/:id" element={<GrocerySellerRegistrationForm/>}/>
        <Route path="/register/customer/:id" element={<CustomerRegistrationForm/>}/>
        <Route path="/register/wastagerecyclecenter/:id" element={<WastageRecycleCenterRegistrationForm/>}/>
        <Route path="/register/transporter/:id" element={<TransporterRegistrationForm/>}/>
                
        <Route path="/continueregistration/:id" element={<ContinueRegistration/>}/>
        {/* <Route path="/signup" element={isAuthenticated==='0'?<SignupPage/>:<HomePage/>}/>

        <Route path="/login" element={isAuthenticated==='0'?<LoginPage/>:<HomePage/>}/>  */}
        <Route path="/admin/dash/:page" element={<AdminLayout/>}/>
        <Route path="/customer/dash/:page" element={<CustomerLayout/>}/>
        <Route path="/customer/addtocart" element={<CustomerAddToCart/>}/>
        <Route path="/customer/checkout" element={<Checkout/>}/>
        <Route path="/customer/category" element={<CategoryPage/>}/>
        <Route path="/gardener/category" element={<CategoryPage/>}/>
        <Route path="/farmer/category" element={<CategoryPage/>}/>
        <Route path="/farmer/dash/:page" element={<FarmerLayout/>}/>
        <Route path="/gardener/dash/:page" element={<GardenerLayout/>}/>
        <Route path="/stockbuyer/dash/:page" element={<StockBuyerLayout/>}/>
        <Route path="/groceryseller/dash/:page" element={<GrocerySellerLayout/>}/>
        <Route path="/transporter/dash/:page" element={<TransporterLayout/>}/>
        <Route path="/wastagerecyclecenter/dash/:page" element={<WastageRecyclecenterLayout/>}/>
        <Route path="/test" element={<Review />}/>  
        
        
        </Routes>
        </BrowserRouter>
   
      )
}