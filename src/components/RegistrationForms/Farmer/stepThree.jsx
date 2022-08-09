import React from "react";
import { Typography, Grid, Container, TextField} from "@mui/material";
import { styled } from "@mui/material";
import { useParams } from "react-router-dom";
import {checkWord, checkWordExactLen} from "../../../services/utils/FormValidation"; 




export default function StepThree(props) {
    var {id} = useParams();
    var err = [false,false,false,true,false];
    var data = {
        userType : 3,
        firstName : "",
        lastName : "",
        address1 : "",
        address2 : "",
        city : "",
        id: id
    };

    const changeFirstName = (e) => {
        console.log("i find first name");
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state == true){
            err[0] = true;
            data.firstName = v;
            if(!err.includes(false)){
                props.handleSubmitComponent3(data);
            }
        }else{
            err[0] = false;
        }
    };

    const changeLastName = (e) => {
        console.log("i find last name");
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state === true){
            err[1] = true;
            data.lastName = v;
            if(!err.includes(false)){
                props.handleSubmitComponent3(data);
            }
        }else{
            err[1] = false;
        }
    };

    const changeAddress1 = (e) => {
        console.log("i find address1");
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state === true){
            err[2] = true;
            data.address1 = v;
            if(!err.includes(false)){
                props.handleSubmitComponent3(data);
            }
        }else{
            err[2] = false;
        }
    };

    const changeAddress2 = (e) => {
        console.log("i find address2");
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state === true){
            err[3] = true;
            data.address2 = v;
            if(!err.includes(false)){
                props.handleSubmitComponent3(data);
            }
        }else if(v.length === 0){
            err[3] = true;
            data.address2 = "";
            if(!err.includes(false)){
                props.handleSubmitComponent3(data);
            }
        }
        else{
            err[3] = false;
        }
    };

    const changeCity = (e) => {
        console.log("city is called to change");
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state === true){
            err[4] = true;
            data.city = v;
            if(!err.includes(false)){
                props.handleSubmitComponent3(data);
            }
        }else{
            err[4] = false;
        }
    };

    return(
        <div>
            <Container>
                <br />
            <Typography variant="h6" align="center" sx={{color: '#128C7E'}}>
                Enter Personal Details
            </Typography>
            <br />
            <form>
                <Grid container spacing={2} justifyContent = "center" alignItems = "center">
                    <Grid item xs={10} >
                    <TextField
                            onChange={changeFirstName}
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="First Name"
                            id="firstname"
                            name="firstname"
                            autoComplete="firstname"        
                    />
                    <TextField
                            onChange={changeLastName}
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="Last Name"
                            id="lastname"
                            name="lastname"
                            autoComplete="lastname"        
                    />
                    <TextField
                            onChange={changeAddress1}
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="Address Line 1"
                            id="addressline-1"
                            name="addressline-1"
                            autoComplete="addressline-1"        
                    />
                    <TextField
                            onChange={changeAddress2}
                            sx={{margin: '1rem 0'}}
                            fullWidth
                            label="Address Line 2 (Optional)"
                            id="addressline-2"
                            name="addressline-2"
                            autoComplete="addressline-2"        
                    />
                    <TextField
                            onChange={changeCity}
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="City"
                            id="city"
                            name="city"
                            autoComplete="city"        
                    />
                   
                
              
                    </Grid>
                </Grid>
            </form>
            </Container>
            
        </div>
    );
}