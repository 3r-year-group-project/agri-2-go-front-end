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

import axios from 'axios';

export default function GardenerRegistrationForm() {
       //REACT HOOKS
    const [activeStep, setActiveStep] = useState(0);

    //form state
    const [stepState,setStepState] = useState([false,false,false]);
    function getSteps() {
        return ["", "", ""];
        // return ["CHOOSE PLAN", "PAYMENT DETAILS", "PERSONAL DETAILS"];
    }

    const handleSubmitComponent1 = (ob) => {
        console.log("handleSubmitComponent1 called");
        axios.post('/api/farmer/registration/paymentPlan',ob).then(res => {
            if(res){
                setStepState((prev) => {
                    return [
                        true,
                        ...prev.slice(1, prev.length - 1),
                    ]
                   });
                console.log("successfully updateDatabase")
            }
       });
    };
    const handleSubmitComponent2 = (ob) => {
        console.log("handleSubmitComponent2 called");
        axios.post('/api/gardener/registration/cardDetails',ob).then((res)=>{
            setStepState((prev) => {
                return [
                  prev[0],
                  true,
                  prev[2],
               ]
              });
        });  
    };
    const handleSubmitComponent3 = (ob) => {
        console.log("handleSubmitComponent3 called");
        axios.post('/api/gardener/registration/personDetails',ob).then((res)=>{
            setStepState((prev) => {
                return [
                   prev[0],
                   prev[1],
                   true,
                ]
            });
        });
    };

    const handleNext = () => {
        if(stepState[activeStep])
            setActiveStep(prevActiveStep => prevActiveStep + 1)
        else
            alert("finish the form first");
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const steps = getSteps();

    function getStepsContent(stepIndex) {
        switch(stepIndex) {
            case 0:
                return <StepOne handleSubmitComponent1={handleSubmitComponent1}/>;
            case 1:
                return <StepTwo handleSubmitComponent2={handleSubmitComponent2}/>;
            case 2:
                return <StepThree handleSubmitComponent3={handleSubmitComponent3}/>;
            default: return "Unknown Step";
        }
    } 
    return (
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'0.5%',minHeight:'100%'}} >
            <CssBaseline  />
            <Box
            sx={{
                width: '50%',
                m: '6rem auto',
                border: '1px solid #FFFFFF',
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                background: '#fff'
                
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