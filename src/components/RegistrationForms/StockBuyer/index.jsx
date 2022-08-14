import React, { useState } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Box, CssBaseline, Typography } from "@mui/material";

import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";

import Logo from "../../Logo/logo";
import CongratsMessage from "./congrats";
import { Link } from "react-router-dom";


export default function StockBuyerRegistrationForm() {
       //REACT HOOKS
    const [activeStep, setActiveStep] = useState(0);

    function getSteps() {
        return ["", "", ""];
        // return ["CHOOSE PLAN", "PAYMENT DETAILS", "PERSONAL DETAILS"];
    }

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const steps = getSteps();

    function getStepsContent(stepIndex) {
        switch(stepIndex) {
            case 0:
                return <StepOne/>;
            case 1:
                return <StepTwo/>;
            case 2:
                return <StepThree/>;
            default: return "Unknown Step";
        }
    } 
    return (
        <div>
            <CssBaseline  />
            <Box
            sx={{
                width: '50%',
                m: '6rem auto',
                border: '1px solid #FFFFFF',
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
            }}
            >
            <Box
                sx={{
                mt: 2,
                mb: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            > 
            <Logo />
            </Box>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
  
            </Stepper>
            <>
            {activeStep === steps.length ? <CongratsMessage/> : (
                <>
                    {getStepsContent(activeStep)}

                    <Box
                    m={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    >
                        <Button size="medium" onClick={handleBack}>
                            {/* Back */}
                            {activeStep === 0 ? <Link to={'/register'} style={{ textDecoration: 'none' }}>Back</Link> : "Back"}
                        </Button>

                        <Button variant="contained" size="medium" onClick={handleNext}>
                            {activeStep === steps.length ? "Finish" : "Next"}
                        </Button>
                    </Box>
                </>
            )}
            </>
            </Box>            
        </div>
        
    );
}