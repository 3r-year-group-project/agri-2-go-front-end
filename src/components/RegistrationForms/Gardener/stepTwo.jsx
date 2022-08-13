import React from "react";
import { Typography, Grid, Container, TextField} from "@mui/material";
import pic from '../../../assets/images/creditcards.png';
import {checkWord, checkWordExactLen} from "../../../services/utils/FormValidation"; 
import { useParams } from "react-router-dom";

export default function StepTwo(props) {
    var err = [false,false,false,false];
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
            data.cardNumber = v;
            if(!err.includes(false))
                props.handleSubmitComponent2(data);
        }else{
            err[0] = false;
        }
    }

    const cardHolderName = (e) => {
        let v = e.target.value;
        let ob = checkWord(v,5,50);
        if(ob){
            err[1] = true;
            data.holder = v;
            if(!err.includes(false))
                props.handleSubmitComponent2(data);
        }else{
            err[1] = false;
        }
        console.log("name",ob);
    }

    const expiryDate = (e) => {
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob){
            err[2] = true;
            data.expiry = v;
            if(!err.includes(false))
                props.handleSubmitComponent2(data);
        }else{
            err[2] = false;
        }
        console.log("ex Date",ob);
    }

    const cvv = (e) => {
        let v = e.target.value;
        let ob = checkWordExactLen(v,3);
        if(ob){
            err[3] = true;
            data.cvv = v;
            if(!err.includes(false))
                props.handleSubmitComponent2(data);
        }else{
            err[3] = false;
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
                            onChange={checkCardNum}
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="Card Number"
                            id="cardnumber"
                            name="cardnumber"
                            autoComplete="cardnumber"        
                    />
                    <TextField
                            onChange={cardHolderName}
                            sx={{margin: '1rem 0'}}
                            required
                            fullWidth
                            label="Card Holder Name"
                            id="cardholdername"
                            name="cardholdername"
                            autoComplete="cardholdername"        
                    />
                    <TextField
                            onChange={expiryDate}
                            sx={{margin: '1rem 0'}}
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
                            onChange={cvv}
                            sx={{margin: '1rem 0'}}
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