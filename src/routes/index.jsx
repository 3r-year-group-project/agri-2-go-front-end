import React from "react";
import {Routes,Route,Navigate,BrowserRouter} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import AdminLayout from "../layouts/AdminLayout";
import FarmerLayout from "../layouts/FarmerLayout";
import StockBuyerLayout from "../layouts/StockBuyerLayout";
import TransporterLayout from "../layouts/TransporterLayout";
import WastageRecyclecenterLayout from "../layouts/WastageRecycleCenterLayout";
import CategoryPage from "../pages/CategoryPage";
import RegisterPage from "../pages/RegisterPage";
import ContinueRegistration from "../pages/ContinueRegistration";
import AddToWastage from "../pages/StockBuyerAddToWastage";
import StockBuyerSellStocks from "../pages/StockBuyerSellStocks";
import StockBuyerSellWastageStocksDetails from '../pages/StckBuyerWastageStockSellDetails';

//test
import TransportationRequest from "../components/TransporterSchedule/transporterSchedule";
import MapContainer from "../pages/test/index";

//test imports end here


import Checkout from "../pages/Checkout"



import PageNotFound from "../pages/PageNotFound";


import FarmerRegistrationForm from "../components/RegistrationForms/Farmer";
import GardenerRegistrationForm from "../components/RegistrationForms/Gardener";
import StockBuyerRegistrationForm from "../components/RegistrationForms/StockBuyer";
import CustomerRegistrationForm from "../components/RegistrationForms/Customer";
import WastageRecycleCenterRegistrationForm from "../components/RegistrationForms/WastageRecycleCenter";
import TransporterRegistrationForm from "../components/RegistrationForms/Transporter";

import LoginPage from "../pages/LoginPage";




import Review from '../components/Review';
// import ItemDescription from "../pages/WastageRecycleCenter/ItemDescriptionLayout/ItemDescription";


import FarmerProfilePage from "../components/Profiles/FarmerProfile";
import TransporterProfilePage from "../components/Profiles/TransporterProfile";
import StockBuyerProfilePage from "../components/Profiles/StockBuyerProfile";
import WastageRecycleCenterProfilePage from "../components/Profiles/WastageRecycleCenterProfile";


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
        <Route path="/stockbuyer/addtowastage/:id" element={<AddToWastage/>}/>  
        <Route path="/stockbuyer/sellstock/:id" element={<StockBuyerSellStocks/>}/>  
        <Route path="/stockbuyer/sellwastagestocks" element={<StockBuyerSellWastageStocksDetails/>}/> 
       
        <Route path="/register/:id" element={<RegisterPage/>}/>
        <Route path="/register/farmer/:id" element={<FarmerRegistrationForm/>}/>
        <Route path="/register/gardener/:id" element={<GardenerRegistrationForm/>}/>
        <Route path="/register/stockbuyer/:id" element={<StockBuyerRegistrationForm/>}/>
        <Route path="/register/customer/:id" element={<CustomerRegistrationForm/>}/>
        <Route path="/register/wastagerecyclecenter/:id" element={<WastageRecycleCenterRegistrationForm/>}/>
        <Route path="/register/transporter/:id" element={<TransporterRegistrationForm/>}/>
                
        <Route path="/continueregistration/:id" element={<ContinueRegistration/>}/>
        {/* <Route path="/signup" element={isAuthenticated==='0'?<SignupPage/>:<HomePage/>}/>
        <Route path="/login" element={isAuthenticated==='0'?<LoginPage/>:<HomePage/>}/>  */}
        <Route path="/admin/dash/:page" element={<AdminLayout/>}/>
        <Route path="/farmer/category" element={<CategoryPage/>}/>
        <Route path="/farmer/dash/:page" element={<FarmerLayout/>}/>
        <Route path="/stockbuyer/dash/:page" element={<StockBuyerLayout/>}/>
        <Route path="/transporter/dash/:page" element={<TransporterLayout/>}/>
        <Route path="/wastagerecyclecenter/dash/:page" element={<WastageRecyclecenterLayout/>}/>

        //<Route path="/test" element={<TransportationRequest />}/> 


        <Route path="/farmer/profile" element={<FarmerProfilePage/>}/>
        <Route path="/transporter/profile" element={<TransporterProfilePage/>}/>
        <Route path="/stockbuyer/profile" element={<StockBuyerProfilePage/>}/>
        <Route path="/stockbuyer/profile" element={<WastageRecycleCenterProfilePage/>}/>

        <Route path="/test" element={<MapContainer/>}/> 

        {/* <Route path="/wastageRecycleCenter/dash/findwastage/viewdetails" element={<ItemDescription/>}/>    */}
        </Routes>
        </BrowserRouter>
   
      )
}