import React from "react";
import Button  from "@mui/material/Button";
import NavBar from '../../components/Navbar';
import Container from "@mui/system/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import PaymentIcon from '@mui/icons-material/Payment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function loadFunction(){
  return(
    <>
    <NavBar/>
    

    <Container maxWidth="100%">
    <Box>
        <FormLabel id="title" sx={{marginLeft:"48%" , display:"flex", alignItems:"center" , fontSize:"35px" , fontWeight:"bold"}}>Checkout</FormLabel>
        
          <Grid container spacing={1} sx={{marginTop:"6%"}}>
              <Grid item md={7} style={{ marginTop:"40px"}}>
                <Paper>
                <Box component={"form"} style={{paddingTop:"10px",paddingBottom:"10px"}}>
                  <Box id="paymentDetailsTitle">
                    <Typography variant="h6" component="h1" display={"flex"} alignContent={"center"} marginLeft={"42%"} >Payment Details</Typography>
                  </Box>
                  <Box style={{marginBottom:"20px", marginTop:"10px" , marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Payment Method" color="secondary"  focused fullWidth required />
            
                  </Box>
                  <Box style={{marginBottom:"20px", marginTop:"10px", marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Card Holder" color="secondary"  focused fullWidth required />
                  </Box>
                  <Box style={{marginBottom:"20px", marginTop:"10px", marginLeft:"10px" , marginRight:"10px"}}>
                  <TextField label="Card Number" color="secondary" focused fullWidth required />
                  </Box>
                  <Box style={{marginBottom:"20px", marginTop:"10px"}}>
                  <TextField label="Expiry Date" color="secondary" style={{width:"30%" , marginRight:"20px" ,  marginLeft:"10px"}} focused required />
                  <TextField label="CVC" color="secondary" style={{width:"30%" , marginRight:"10px" }} focused required />
                  </Box>
                  <Box>
                  <Button variant="contained" color="secondary" style={{fontWeight:"bold", marginLeft:"40%" ,width:"20%"}}>
                    Pay Now<PaymentIcon/>
                  </Button>
                  </Box>
                </Box>
                </Paper>
              </Grid>
            
            <Grid item md={5} style={{ marginTop:"40px"}}>
              <Paper>
                  <Box id="paymentDetailsTitle">
                    <Typography variant="h6" component="h1" display={"flex"} alignContent={"center"} marginLeft={"42%"} >Order Details</Typography>
                  </Box>
                  <Box sx={{paddingTop:"5px", paddingBottom:"10px"}}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center" colSpan={3}>
                            Details
                          </TableCell>
                          <TableCell align="right">Price</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Desc</TableCell>
                          <TableCell align="right">Qty.</TableCell>
                          <TableCell align="right">Unit</TableCell>
                          <TableCell align="right">Sum</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        
                          <TableRow >
                            <TableCell>Carrot</TableCell>
                            <TableCell align="right">1kg</TableCell>
                            <TableCell align="right">300LKR</TableCell>
                            <TableCell align="right">300LKR</TableCell>
                          </TableRow>

                          <TableRow >
                            <TableCell>Beetroot</TableCell>
                            <TableCell align="right">2kg</TableCell>
                            <TableCell align="right">200LKR</TableCell>
                            <TableCell align="right">400LKR</TableCell>
                          </TableRow>   

                          <TableRow >
                            <TableCell>Cucumber</TableCell>
                            <TableCell align="right">10kg</TableCell>
                            <TableCell align="right">400LKR</TableCell>
                            <TableCell align="right">4000LKR</TableCell>
                          </TableRow>


                        <TableRow>
                          <TableCell rowSpan={3} />
                          <TableCell colSpan={2}>Subtotal</TableCell>
                          <TableCell align="right">4700LKR</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Tax</TableCell>
                          <TableCell align="right">10%</TableCell>
                          <TableCell align="right">470</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={2}>Total</TableCell>
                          <TableCell align="right">5170LKR</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </Box>

              
              </Paper>
            </Grid>
          </Grid>
      </Box>
    </Container> 

    </>
  );
}