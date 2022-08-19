import React, { useState,useEffect} from "react";
import { Typography, Grid, Container, TextField} from "@mui/material";
import pic from '../../../assets/images/creditcards.png';
import {checkWord, checkWordExactLen,isFirstDateGreaterThanSecondDate} from "../../../services/utils/FormValidation"; 
import { useParams } from "react-router-dom";
import { formatDate } from "../../../services/utils/date/data";


import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

export default function StepTwo(props) {
    const [errorText, setErrorText] = useState({cardNumber:"",holder:"",expiry:"",cvv:""});
    const [date, setDate] = useState(new Date());
    const {id} = useParams();
    const [data,setData] = useState({cardNumber:"",holder:"",expiry:"",cvv:"", id: id});
    
    useEffect(() => {
        console.log("data",data);
        if(!Object.values(data).includes("")){
            console.log("i am true");
            props.handleSubmitComponent2(data);
            
        }
        
    },[data]);

    const checkCardNum = (e) => {
        let v = e.target.value;     
        let ob = checkWord(v,5,20);
        if(ob.state){
            setErrorText(
                (prev) => {
                    return({...prev, cardNumber : ""});
                }
            );
            setData((prev) => {
                return({...prev, cardNumber : v});
            });
        }else{
            console.log(ob);
            setErrorText(
                (prev) => {
                    return({...prev, cardNumber : ob.errors});
                }
            );
            setData((prev) => {
                return({...prev, cardNumber : ""});
            });
        }
        
    }

    const cardHolderName = (e) => {
        let v = e.target.value;
        let ob = checkWord(v,5,50);
        if(ob.state){
            setErrorText(
                (prev) => {
                    return({...prev, holder : ""});
                }
            );
            setData((prev) => {
                return({...prev, holder : v});
            });
        }else{
            setErrorText(
                (prev) => {
                    return({...prev, holder : ob.errors});
                }
            );
            setData((prev) => {
                return({...prev, holder : ""});
            });
        }
    }

    const expiryDate = (v) => {
        let ob = isFirstDateGreaterThanSecondDate(v, new Date())
        if(ob.state){
            setErrorText(
                (prev) => {
                    return({...prev, expiry : ""});
                }
            );
            setData((prev) => {
                return({...prev, expiry : formatDate(v)});
            });
        }else{
            setErrorText(
                (prev) => {
                    return({...prev, expiry : ob.errors});
                }
            );
            setData((prev) => {
                return({...prev, expiry : ""});
            });
        }
    }

    const cvv = (e) => {
        let v = e.target.value;
        let ob = checkWordExactLen(v,3);
        if(ob.state){
            setErrorText(
                (prev) => {
                    return({...prev, cvv : ""});
                }
            );
            setData((prev) => {
                return({...prev, cvv : v});
            });
        }else{
            setErrorText(
                (prev) => {
                    return({...prev, cvv : ob.errors});
                }
            );
            setData((prev) => {
                return({...prev, cvv : ""});
            });
        }
        
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
                            error={errorText.cardNumber}
                            helperText={errorText.cardNumber}
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
                            error={errorText.holder}
                            helperText={errorText.holder}
                            onChange={cardHolderName}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            required
                            fullWidth
                            label="Card Holder Name"
                            id="cardholdername"
                            name="cardholdername"
                            autoComplete="cardholdername"        
                    />
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <DatePicker
                            variant="inline"
                            openTo="year"
                            views={["year", "month"]}
                            label="Expiry Date"
                            helperText={errorText.expiry}
                            error={errorText.expiry}
                            onChange={(d) => {setDate(d);expiryDate(d)}}
                            value={date}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <br />
                    <TextField
                            error={errorText.cvv}
                            helperText={errorText.cvv}
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