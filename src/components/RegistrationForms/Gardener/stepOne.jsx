import React,{ useState,useEffect} from "react";
import { Typography, Grid, Container, Box} from "@mui/material";
import { ContentCutOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";


export default function StepOne(props) {
    var {id} = useParams();
    const onchangeRadioButton = (e)=>{
        let pack = e.target.value;
        props.handleSubmitComponent1({package: pack,id:id,});
       
    }

    
    

    return(
        <div>
            <Container>
                <br />
            <Typography variant="h6" align="center" sx={{color: '#128C7E'}}>
                Choose Your Payment Plan
            </Typography>
            <br />
                <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                    <label>
                    <Box
                    sx={{
                        m: 1,
                        justifyContent:"center",
                        alignItems:"center",
                        bgcolor: '#FFFFFF',
                        borderRadius: 2,
                        boxShadow: 2,
                        p: 2,
                        transition: 'top ease 0.5s',
                        top: 0,
                        position: 'relative',
                        "&:hover": {
                            backgroundColor: "#EAEAEA",
                            top: '-10px'
                        },
                    }}
                    >   
                        <input type="radio" name="subscription" value="free" onChange={onchangeRadioButton}/>
                        <Typography variant="body2" align="center" sx={{color: '#000000'}}>FREE</Typography><br />
                        <Typography variant="h4" align="center" sx={{color: '#128C7E'}}>0
                        <Typography variant="body1" sx={{display: 'inline-block'}} >LKR</Typography>
                        </Typography>
                        {/* <Grid container direction="row" alignItems="center">
                            <CheckRoundedIcon/> Free Hosting
                        </Grid> */}
                        <Box 
                            sx={{
                                display:"flex",
                                borderRadius: 1,
                                cursor: "pointer",
                                backgroundColor: "#128C7E",
                                justifyContent: "center",
                                alignItems: "center",
                                p: 1,
                                m: 2,
                                mt: 5
                            }}     
                        >
                        <Typography variant="button">START FREE</Typography>
                        {/* <Button variant="contained" size="small">Choose Plan</Button> */}
                        </Box>
                    </Box> 
                    </label>  
                </Grid>

                <Grid item md={4} xs={12}>
                <label>
                    <Box
                        sx={{
                            m: 1,
                            justifyContent:"center",
                            alignItems:"center",
                            bgcolor: '#FFFFFF',
                            borderRadius: 2,
                            boxShadow: 2,
                            p: 2,
                            transition: 'top ease 0.5s',
                            top: 0,
                            position: 'relative',
                            "&:hover": {
                                backgroundColor: "#EAEAEA",
                                top: '-10px'},
                        }}
                        >   
                        <input onChange={onchangeRadioButton} type="radio" name="subscription" value="basic"/>                
                        <Typography variant="body2" align="center" sx={{color: '#000000'}}>MONTHLY</Typography><br/>
                        <Typography variant="h3" align="center" sx={{color: '#128C7E'}}>500
                        <Typography variant="body1" sx={{display: 'inline-block'}} >LKR</Typography>
                        </Typography>
                        <Box 
                            sx={{
                                display:"flex",
                                borderRadius: 1,
                                cursor: "pointer",
                                backgroundColor: "#128C7E",
                                justifyContent: "center",
                                alignItems: "center",
                                p: 1,
                                m: 2,
                                mt: 5
                            }}     
                        >
                            <Typography variant="button">CHOOSE PLAN</Typography>
                        {/* <Button variant="contained" size="small">Choose Plan</Button> */}
                        </Box>
                    </Box>
                    </label>   
                </Grid>

                <Grid item md={4} xs={12}>
                <label>
                    <Box
                        sx={{
                            m: 1,
                            justifyContent:"center",
                            alignItems:"center",
                            bgcolor: '#FFFFFF',
                            borderRadius: 2,
                            boxShadow: 2,
                            p: 2,
                            transition: 'top ease 0.5s',
                            top: 0,
                            position: 'relative',
                            "&:hover": {
                                backgroundColor: "#EAEAEA",
                                top: '-10px'},
                        }}
                        >
                        <input onChange={onchangeRadioButton} type="radio" name="subscription" value="professional"/>                    
                        <Typography variant="body2" align="center" sx={{color: '#000000'}}>ANNUAL</Typography><br />
                        <Typography variant="h4" align="center" sx={{color: '#128C7E', fontWeight: 'medium'}}>7000
                        <Typography variant="body1" sx={{display: 'inline-block'}} >LKR</Typography>
                        </Typography>
                        <Box 
                            sx={{
                                display:"flex",
                                borderRadius: 1,
                                cursor: "pointer",
                                backgroundColor: "#128C7E",
                                justifyContent: "center",
                                alignItems: "center",
                                p: 1,
                                m: 2,
                                mt: 5
                            }}     
                        >
                        <Typography variant="button">CHOOSE PLAN</Typography>
                        {/* <Button variant="contained" size="small">Choose Plan</Button> */}
                        </Box>
                    </Box> 
                    </label>  
                </Grid>

                </Grid>

            </Container>
            
        </div>
    );
}