import React,{useState,useEffect} from "react";
import { Typography, Grid, Container, TextField} from "@mui/material";
import { styled } from "@mui/material";
import {checkWord, checkWordExactLen,isFirstDateGreaterThanSecondDate} from "../../../services/utils/FormValidation";
import { useParams } from "react-router-dom";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { formatDate, formatTime } from "../../../services/utils/date/data";


export default function StepFour(props) {
    const [value1, setValue1] = useState(new Date());
    const [value2, setValue2] = useState(new Date());
    var {id} = useParams();
    const [data,setData] = useState({
        startTime: "",
        endTime: "",
        shopName: "",
        shopAddress: "",
        userType : 6,
        id:id,
    });
    const [errorText, setErrorText] = useState({
        startTime: "",
        endTime: "",
        shopName: "",
        shopAddress: "",
    });

    useEffect(() => {
        if(!Object.values(data).includes("")){
            console.log("i am true");
            props.handleSubmitComponent4(data);
            
        }
        
    },[data]);

    const changeShopName = (e) => {
        let v = e.target.value;     
        let ob = checkWord(v,5,20);
        if(ob.state){
            setErrorText(
                (prev) => {
                    return({...prev, shopName : ""});
                }
            );
            setData((prev) => {
                return({...prev, shopName : v});
            });
        }else{
            console.log(ob);
            setErrorText(
                (prev) => {
                    return({...prev, shopName : ob.errors});
                }
            );
            setData((prev) => {
                return({...prev, shopName : ""});
            });
        }

    }
    const changeShopAddress = (e) => {
        console.log("i find shop address");
        let v = e.target.value;     
        let ob = checkWord(v,5,20);
        if(ob.state){
            setErrorText(
                (prev) => {
                    return({...prev, shopAddress : ""});
                }
            );
            setData((prev) => {
                return({...prev, shopAddress : v});
            });
        }else{
            console.log(ob);
            setErrorText(
                (prev) => {
                    return({...prev, shopAddress : ob.errors});
                }
            );
            setData((prev) => {
                return({...prev, shopAddress : ""});
            });
        }
    }
    const changeStartTime = (t) => {
        setData((prev) => {
            return({...prev,  startTime: formatTime(t)});
        });
    }
    const changeEndTime = (t) => {
        setData((prev) => {
            return({...prev,  endTime: formatTime(t)});
        });
    }

    return(
        <div>

            <Container>
                <br />
            <Typography variant="h6" align="center" sx={{color: '#128C7E'}}>
                Enter Shop Details
            </Typography>
            <br />
            <form>
                <Grid container spacing={2} justifyContent = "center" alignItems = "center">
                    <Grid item xs={3} >
                    <TextField
                            onChange={changeShopName}
                            error={errorText.shopName !== ""}
                            helperText={errorText.shopName}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            required
                            fullWidth
                            label="Shop Name"
                            id="shopName"
                            name="shopName"
                            autoComplete="shopName"        
                    />
                    <TextField
                            error={errorText.shopAddress}
                            helperText={errorText.shopAddress}
                            onChange={changeShopAddress}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            required
                            fullWidth
                            label="Address"
                            id="address"
                            name="address"
                            autoComplete="address"        
                    />
                    
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={2}>
                            <TimePicker
                                label="Open Time"
                                sx={{margin: '1rem 0',input: { color: 'black' }}}
                                value={value1}
                                onChange={(d)=>{setValue1(d);changeStartTime(d)}}
                                renderInput={(params) => <TextField {...params} sx={{margin: '1rem 0',input: { color: 'black' }}} />}
                            />
                            <TimePicker
                                label="close Time"
                                value={value2}
                                onChange={(d)=>{setValue2(d);changeEndTime(d)}}
                                renderInput={(params) => <TextField {...params} sx={{margin: '1rem 0',input: { color: 'black' }}} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                   
                
              
                    </Grid>
                </Grid>
            </form>
            </Container>
            
        </div>
    );
}