import React, { Fragment } from "react";
import Container from '@mui/material/Container';


import Footer from "../../components/Footer";
import NavBar from '../../components/Navbar';
import Logo from '../../components/Logo/logo';
import RegistrationForm from "../../components/RegistrationForm/registrationForm";



export default function RegisterPage() {
    return (
            <Fragment>
                
            {/* <NavBar/> */}
            {/* <Container component="main" maxWidth="xs" > */}
            <RegistrationForm/>
            {/* </Container> */}
            {/* <Footer/> */}
            </Fragment>
        
    );
}