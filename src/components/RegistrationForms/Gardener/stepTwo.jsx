import React, { useState } from "react";
import { Typography, Grid, Container, TextField} from "@mui/material";
import pic from '../../../assets/images/creditcards.png';
import {checkWord, checkWordExactLen} from "../../../services/utils/FormValidation"; 
import { useParams } from "react-router-dom";

export default function StepTwo(props) {
    var err = [false,false,false,false];
    var [errorText, setErrorText] = useState(["","","",""]);
    var {id} = useParams();
    var data = {
        id: id,
        cardNumber: "",
        holder : "",
        expiry : "",
        cvv : "",
    }
    const checkCardNum = (e) => {
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state){
            err[0] = true;
            setErrorText(
                (prev) => {
                    return(["",...prev.slice(1)]);
                }
            );
            data.cardNumber = v;
            if(!err.includes(false))
                props.handleSubmitComponent2(data);
        }else{
            err[0] = false;
            console.log(ob);
            setErrorText(
                (prev) => {
                    return([ob.err,...prev.slice(1)]);
                }
            );
        }
    }

    const cardHolderName = (e) => {
        let v = e.target.value;
        let ob = checkWord(v,5,50);
        if(ob.state){
            err[1] = true;
            data.holder = v;
            setErrorText(
                (prev) => {
                    return([prev[0],"",...prev.slice(2)]);
                }
            );
            if(!err.includes(false))
                props.handleSubmitComponent2(data);
        }else{
            err[1] = false;
            setErrorText(
                (prev) => {
                    return([prev[0],ob.err,...prev.slice(1)]);
                }
            );
        }
        console.log("name",ob);
    }

    const expiryDate = (e) => {
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state){
            setErrorText(
                (prev) => {
                    return([...prev.slice(0,2),"",...prev[3]]);
                }
            );
            err[2] = true;
            data.expiry = v;
            if(!err.includes(false))
                props.handleSubmitComponent2(data);
        }else{
            err[2] = false;
            setErrorText(
                (prev) => {
                    return([...prev.slice(0,2),ob.err,...prev[3]]);
                }
            );
        }
        console.log("ex Date",ob);
    }

    const cvv = (e) => {
        let v = e.target.value;
        let ob = checkWordExactLen(v,3);
        if(ob.state){
            err[3] = true;
            setErrorText(
                (prev) => {
                    return([...prev.slice(0,3),""]);
                }
            );
            data.cvv = v;
            if(!err.includes(false))
                props.handleSubmitComponent2(data);
        }else{
            err[3] = false;
            setErrorText(
                (prev) => {
                    return([...prev.slice(0,3),ob.err]);
                }
            );
        }
        console.log("cvv",ob);
    };
    return(
        <div>
            <Container>
                <br />
            <Typography variant="h6" align="center" sx={{color: '#128C7E'}}>
                Enter Card Details
            </Typography>
            <br />
            <form>
                <Grid container spacing={2} justifyContent = "center" alignItems = "center">
                    <Grid item xs={10} >
                        {/* <Grid item md={12} xs={6}> */}
                        <img src={pic} width="150px" height="35px"/>
                        {/* </Grid> */}
                    <TextField
                            error={errorText[0]}
                            helperText={errorText[0]}
                            onChange={checkCardNum}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            required
                            fullWidth
                            label="Card Number"
                            id="cardnumber"
                            name="cardnumber"
                            autoComplete="cardnumber"        
                    />
                    <TextField
                            error={errorText[1]}
                            helperText={errorText[1]}
                            onChange={cardHolderName}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            required
                            fullWidth
                            label="Card Holder Name"
                            id="cardholdername"
                            name="cardholdername"
                            autoComplete="cardholdername"        
                    />
                    <TextField
                            error={errorText[2]}
                            helperText={errorText[2]}
                            onChange={expiryDate}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            required
                            fullWidth
                            label="Expiry Date"
                            id="expirydate"
                            name="expirydate"
                            autoComplete="expirydate" 
                            type="month"
                            InputLabelProps={{
                                shrink: true,
                }}       
                    />
                    <TextField
                            error={errorText[3]}
                            helperText={errorText[3]}
                            onChange={cvv}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            required
                            fullWidth
                            label="CVV/CVC"
                            id="cvv"
                            name="cvv"
                            autoComplete="cvv"        
                    />
              
                    </Grid>
                </Grid>
            </form>
            </Container>
            
        </div>
    );
}