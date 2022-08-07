import React, { Fragment } from "react";
import Container from '@mui/material/Container';


import Footer from "../../components/Footer";
import NavBar from '../../components/Navbar';
import Logo from '../../components/Logo/logo';
import UserRoleSelector from "../../components/UserRoleSelector";



export default function RegisterPage() {
    return (
            <Fragment>
                <UserRoleSelector/>

                
            {/* <NavBar/> */}
            {/* <Container component="main" maxWidth="xs" > */}
            {/* <RegistrationForm/> */}
            {/* </Container> */}
            {/* <Footer/> */}
            </Fragment>
        
    );
}