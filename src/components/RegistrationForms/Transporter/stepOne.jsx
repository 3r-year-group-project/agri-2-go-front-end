import React from "react";
import { Typography, Grid, Container, Box} from "@mui/material";


export default function StepOne() {
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
                        <input type="radio" name="subscription" value="free"/>
                        <Typography variant="body2" align="center" sx={{color: '#000000'}}>Free</Typography>
                        <Typography variant="h3" align="center" sx={{color: '#128C7E'}}>$0</Typography>
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
                                m: 2
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
                        <input type="radio" name="subscription" value="basic"/>                
                        <Typography variant="body2" align="center" sx={{color: '#000000'}}>Basic</Typography>
                        <Typography variant="h3" align="center" sx={{color: '#128C7E'}}>$19
                        <Typography variant="body1" sx={{display: 'inline-block'}} >/month</Typography>
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
                                m: 2
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
                        <input type="radio" name="subscription" value="professional"/>                    
                        <Typography variant="body2" align="center" sx={{color: '#000000'}}>Professional</Typography>
                        <Typography variant="h3" align="center" sx={{color: '#128C7E'}}>$99
                        <Typography variant="body1" sx={{display: 'inline-block'}} >/year</Typography>
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
                                m: 2
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