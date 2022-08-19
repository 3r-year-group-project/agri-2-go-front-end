import React,{ useState, useEffect} from "react";
import { Typography, Grid, Container, TextField} from "@mui/material";
import { styled } from "@mui/material";
import { useParams } from "react-router-dom";
import {checkWord, checkWordExactLen} from "../../../services/utils/FormValidation"; 
import FormHelperText from '../../../../node_modules/@mui/material/FormHelperText/FormHelperText';




export default function StepThree(props) {
    var {id} = useParams();
    const [errorText, setErrorText] = useState(
        {
            firstName: '',
            lastName: '',
            address1: '',
            address2: '',
            city: '',
        }
    );
    const [data,setData] = useState(
        {
            userType : 2,
            firstName : "",
            lastName : "",
            address1 : "",
            address2 : "empty",
            city : "",
            id: id 
        }
    );
    
    useEffect(() => {
        console.log("data",data);
        if(!Object.values(data).includes("")){
            props.handleSubmitComponent3(data);
            
        }
        
    },[data]);

    const changeFirstName = (e) => {
        console.log("i find first name");
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state == true){
            setData ((prev) => {
                return({...prev, firstName : v});
            });
            setErrorText((prev) => {
                return({...prev, firstName : ""});
            });
            
        }else{
            setErrorText((prev) => {
                return({...prev, firstName : ob.errors});
            });
            setData ((prev) => {
                return({...prev, firstName : ""});
            });
            
        }
    };

    const changeLastName = (e) => {
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state === true){
            setData((prev) => {
                return({...prev, lastName : v});
            });
            setErrorText((prev) => {
                return({...prev, lastName : ""});;
            });
            
        }else{
            setData((prev) => {
                return({...prev, lastName : ""});
            });
            setErrorText((prev) => {
                return({...prev, lastName : ob.errors});;
            });
        }
    };

    const changeAddress1 = (e) => {
        console.log("i find address1");
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state === true){
            setData((prev) => {
                return({...prev, address1 : v});
            });
            setErrorText((prev) => {
                return({...prev, address1 : ""});;
            });
            
        }else{
            setData((prev) => {
                return({...prev, address1 : ""});
            });
            setErrorText((prev) => {
                return({...prev, address1 : ob.errors});;
            });
        }
    };

    const changeAddress2 = (e) => {
        console.log("i find address2");
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state === true){
            setData((prev) => {
                return({...prev, address2 : v});
            });
            setErrorText((prev) => {
                return({...prev, address2 : ""});;
            });
            
        }else if(v.length === 0){
            setData((prev) => {
                return({...prev, address2 : "empty"});
            });
            setErrorText((prev) => {
                return({...prev, address2 : ""});;
            });
            
        }
        else{
            setData((prev) => {
                return({...prev, address2 : ""});
            });
            setErrorText((prev) => {
                return({...prev, address2 : ob.errors});;
            });
        }
    };

    const changeCity = (e) => {
        console.log("city is called to change");
        let v = e.target.value;
        let ob = checkWord(v,5,20);
        if(ob.state === true){
            setData((prev)=>{
                return({...prev, city:v});
            })
            setErrorText((prev) => {
                return({...prev, city : ""});;
            });
            
        }else{
            setData((prev)=>{
                return({...prev, city:""});
            })
            setErrorText((prev) => {
                return({...prev, city : ob.errors});;
            });
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
                            error={errorText.firstName}
                            helperText={errorText.firstName}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            required
                            fullWidth
                            label="First Name"
                            id="firstname"
                            name="firstname"
                            autoComplete="firstname"
                            onChange={changeFirstName}        
                    />
                    <TextField
                            error={errorText.lastName}
                            helperText={errorText.lastName}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            required
                            fullWidth
                            label="Last Name"
                            id="lastname"
                            name="lastname"
                            autoComplete="lastname"   
                            onChange={changeLastName}     
                    />
                    <TextField
                            error={errorText.address1}
                            helperText={errorText.address1}
                            onChange={changeAddress1}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            required
                            fullWidth
                            label="Address Line 1"
                            id="addressline-1"
                            name="addressline-1"
                            autoComplete="addressline-1"        
                    />
                    <TextField
                            error={errorText.address2}
                            helperText={errorText.address2}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            fullWidth
                            label="Address Line 2 (Optional)"
                            id="addressline-2"
                            name="addressline-2"
                            autoComplete="addressline-2" 
                            onChange={changeAddress2}       
                    />
                    <TextField
                            error={errorText.city}
                            helperText={errorText.city}
                            sx={{margin: '1rem 0',input: { color: 'black' }}}
                            required
                            fullWidth
                            label="City"
                            id="city"
                            name="city"
                            autoComplete="city" 
                            onChange={changeCity}       
                    />
                   
                
              
                    </Grid>
                </Grid>
            </form>
            </Container>
            
        </div>
    );
}