import React, { useState } from "react";
import { Link, Route, useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Grid,
  Card,
  Button,
  Container,
  CssBaseline,
  Box,
  FormControl,
} from "@mui/material";
import "react-tippy/dist/tippy.css";
import farmer from "../../assets/images/farmer.png";
import gardener from "../../assets/images/gardener.png";
import stockbuyer from "../../assets/images/stockbuyer.png";
import groceryseller from "../../assets/images/groceryseller.png";
import wastagerecyclecenter from "../../assets/images/wastagerecyclecenter.png";
import transporter from "../../assets/images/transporter.png";
import customer from "../../assets/images/customer.png";
import NavBar from "../../components/Navbar";
import background from "../../assets/images/bg4.jpg";
import { borderRadius } from "@mui/system";
import axios from 'axios';

const inputStyles = {
  opacity: 0,
  position: "fixed",
  width: 0,
};

export default function ViewRates() {
  const [rates, setRates] = React.useState({
    farmerRate: 0,
    transRate: 0,
    wrcRate: 0,
  });
  React.useEffect(() => {
    axios.get('api/users/revenue/rates').then((res)=>{
      res.data.data.map((rate) => {
        if (rate.user_type == 3) {
          setRates((old) => ({ ...old, farmerRate: rate.revenue_rate }));
        } else if (rate.user_type == 7) {
          setRates((old) => ({ ...old, transRate: rate.revenue_rate }));
        } else if (rate.user_type == 8) {
          setRates((old) => ({ ...old, wrcRate: rate.revenue_rate }));
        }
      });
    });
    
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <div
        style={{
          maxWidth: "auto",
          minHeight: 750,
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#f5f9fb",
          bg: "rgba(255,0,0,0.1)",
        }}
      >
        <div
          style={{
            width: "100%",
            minHeight: 750,
            background: "rgba(255,255,255,0.7)",
            paddingTop: 80,
          }}
        >
          {/* <Box
            sx={{
                width: '50%',
                m: '6rem auto',
                border: '1px solid #FFFFFF',
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                background: '#fff'
                
            }}
            > */}
          <Box
            sx={{
              mt: 2,
              mb: 5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography align="center" variant="h2" sx={{ color: "#075E54" }}>
              <b>Commision Rates</b>
            </Typography>
          </Box>

          <br />

          <Grid
            item
            container
            pr={5}
            pl={5}
            spacing={4}
            direction="row"
            alignItems="center"
            justifyContent="center"
            display="flex"
            paddingLeft="150px"
            paddingRight="150px"
          >
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  padding: "10px 95px",
                  border: "1px solid",

                  borderRadius: 2,
                  backgroundColor: "#FFFFFF",
                  boxShadow: "1",
                }}
              >
                <br></br>
                <Typography
                  align="center"
                  variant="h5"
                  sx={{ color: "#075E54" }}
                >
                  Farmer
                </Typography>
                <br />

                <img src={farmer} alt="farmer" width="200" height="200" />
                <br />
                <Box
                  sx={{
                    width: "auto",
                    height: 50,
                    backgroundColor: "	#FFA500",
                    paddingTop: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <Typography
                    align="center"
                    variant="h5"
                    sx={{ color: "white" }}
                  >
                    {rates.farmerRate} %
                  </Typography>
                </Box>
                <br />
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  padding: "10px 100px",
                  border: "1px solid",

                  borderRadius: 2,
                  backgroundColor: "#FFFFFF",
                  boxShadow: "1",
                }}
              >
                <br />
                <Typography
                  align="center"
                  variant="h5"
                  sx={{ color: "#075E54" }}
                >
                  Transporter
                </Typography>

                <br />
                <img
                  src={transporter}
                  alt="transporter"
                  width="200"
                  height="200"
                  style={{ alignSelf: "center" }}
                />
                <br />
                <Box
                  sx={{
                    width: "auto",
                    height: 50,
                    backgroundColor: "		#FF7F50",
                    paddingTop: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <Typography
                    align="center"
                    variant="h5"
                    sx={{ color: "white" }}
                  >
                    {rates.transRate} %
                  </Typography>
                </Box>
                <br />
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  padding: "10px 100px",
                  border: "1px solid",

                  borderRadius: 2,
                  backgroundColor: "#FFFFFF",
                  boxShadow: "1",
                }}
              >
                <Typography
                  align="center"
                  variant="h5"
                  sx={{ color: "#075E54" }}
                >
                  Wastage Recycle Center
                </Typography>
                <br />
                <img
                  src={wastagerecyclecenter}
                  alt="wastagerecyclecenter"
                  width="200"
                  height="200"
                  align="center"
                />
                <br />

                <Box
                  sx={{
                    width: "auto",
                    height: 50,
                    backgroundColor: "	#228B22",
                    paddingTop: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <Typography
                    align="center"
                    variant="h5"
                    sx={{ color: "white" }}
                  >
                    {rates.wrcRate} %
                  </Typography>
                </Box>
                <br />
              </Card>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 6,
             
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography align="center" variant="h6" sx={{ color: "#075E54" }}>
              <b>Commision Rates of payments received from Farmers, Transportors & Wastage Recycle Centers</b>
            </Typography>
          </Box>

          {/* </Box> */}
        </div>
      </div>
    </React.Fragment>
  );
}
