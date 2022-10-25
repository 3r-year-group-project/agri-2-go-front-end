import * as React from "react";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import Joi from "joi"
import { useValidator } from "react-joi"

export default function RevenueRate() {
  const [openFarmer, setOpenFarmer] = React.useState(false);
  const [openTrans, setOpenTrans] = React.useState(false);
  const [openWrc, setOpenWrc] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [rates, setRates] = React.useState({
    farmerRate: 0,
    transRate: 0,
    wrcRate: 0,
  });
  const [newRates, setNewRates] = React.useState({
    farmerRate: 0,
    transRate: 0,
    wrcRate: 0,
  });

  const { state, setData, setExplicitField, validate } = useValidator({
    initialData: {
        farmerRate: null,
        transRate: null,
        wrcRate: null,
    },
    schema: Joi.object({
        farmerRate: Joi.number().required().min(0).max(100),
        transRate: Joi.number().required().min(0).max(100),
        wrcRate: Joi.number().required().min(0).max(100),
    }),
    explicitCheck: {
        farmerRate: false,
        transRate: false,
        wrcRate: false,
    },
    validationOptions: {
        abortEarly: true,
    },
});



React.useEffect(() => {
  axios.get("api/admin/get/revenue/rate").then((res) => {
    console.log(res.data.data);
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
}, [update]);

const updateFarmerRate = () => {
  if(state.$data.farmerRate === null){}
  else{axios.put('api/admin/update/revenue/rate/farmer/'+state.$data.farmerRate)
  .then(res=>{
    setUpdate(!update)
  }); // update farmer rate}
}};

const changeFarmerRate = (e) => {
  setData((old) => ({
    ...old,
    farmerRate: e.target.value,
}))
};

const changeTransRate = (e) => {
  setData((old) => ({
    ...old,
    transRate: e.target.value,
}))
};

const changeWrcRate = (e) => {
  setData((old) => ({
    ...old,
    wrcRate: e.target.value,
}))
};



const updateTransRate = () => {

  if(state.$data.transRate === null){

  }
  else{
    axios.put('api/admin/update/revenue/rate/transporter/'+state.$data.transRate)
      .then(res=>{
        setUpdate(!update)
      }); // update transporter rate}
}

};

const updateWrcRate = () => {

  if(state.$data.wrcRate === null){

  }
  else{
    axios.put('api/admin/update/revenue/rate/wrc/'+state.$data.wrcRate)
      .then(res=>{setUpdate(!update)}); // update wrc rate}
}
};

  const handleClickOpenFarmer = () => {
    setOpenFarmer(true);
  };

  const handleCloseFarmer = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenFarmer(false);
    }
  };
  const handleClickOpenTrans = () => {
    setOpenTrans(true);
  };

  const handleCloseTrans = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenTrans(false);
    }
  };
  const handleClickOpenWrc = () => {
    setOpenWrc(true);
  };

  const handleCloseWrc = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenWrc(false);
    }
  };
  const Item = styled(Paper)();

  
  return (
    <div style={{ background: "white", padding: "5%", minHeight: "100%" }}>
      <Typography variant="h5" color="#075E54">
        <b>Revenue rates</b>
      </Typography>
      {/* farmer */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 250,
                height: 180,
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                paddingTop: "60px",
                fontSize: "20px",
                marginBottom: "50px",
              },
            }}
          >
            <Paper>
              <Typography variant="h6" color="black">
                Farmer <b>{rates.farmerRate}%</b>
              </Typography>
              <Button onClick={handleClickOpenFarmer}>EDIT</Button>
            </Paper>
          </Box>
          <Dialog
            open={openFarmer}
            onClose={handleCloseFarmer}
            fullWidth
            maxWidth="md"
          >
            <DialogContent>
              <List dense>
                <ListItem>
                  <ListItemText>
                    <Typography
                      gutterBottom
                      variant="h5"
                      color="text.primary"
                      style={{ fontSize: "17px", marginLeft: "40px" }}
                    >
                      Revenue Rate (%) for farmer :
                    </Typography>
                  </ListItemText>
                  <ListItemText>
                    <TextField
                      onChange={changeFarmerRate}
                      value={state.$data.farmerRate}
                      helperText={state.$errors.farmerRate}
                      error={state.$errors.farmerRate}
                      autoFocus
                      margin="dense"
                      id="price"
                      type="number"
                      placeholder="select rate"
                      fullWidth
                      variant="outlined"
                    />
                  </ListItemText>
                </ListItem>
              </List>
              <DialogActions>
                <Button
                  onClick={handleCloseFarmer}
                  variant="outlined"
                  sx={{ color: "#fff" }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={()=>{updateFarmerRate();handleCloseFarmer();}}
                  variant="contained"
                  sx={{ backgroundColor: "green" }}
                >
                  Save
                </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          {/* Transporter */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 250,
                height: 180,
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                paddingTop: "60px",
                fontSize: "20px",
                marginBottom: "50px",
              },
            }}
          >
            <Paper>
              <Typography variant="h6" color="black">
                Transporter <b>{rates.transRate}%</b>
              </Typography>
              <Button onClick={handleClickOpenTrans}>EDIT</Button>
            </Paper>
          </Box>
          <Dialog
            open={openTrans}
            onClose={handleCloseTrans}
            fullWidth
            maxWidth="md"
          >
            <DialogContent>
              <List dense>
                <ListItem>
                  <ListItemText>
                    <Typography
                      gutterBottom
                      variant="h5"
                      color="text.primary"
                      style={{ fontSize: "17px", marginLeft: "40px" }}
                    >
                      Revenue Rate (%) for transporter:
                    </Typography>
                  </ListItemText>
                  <ListItemText>
                    <TextField
                      onChange={changeTransRate}
                      value={state.$data.transRate}
                      helperText={state.$errors.transRate}
                      error={state.$errors.transRate}
                      autoFocus
                      margin="dense"
                      id="price"
                      type="number"
                      placeholder="select rate"
                      fullWidth
                      variant="outlined"
                    />
                  </ListItemText>
                </ListItem>
              </List>
              <DialogActions>
                <Button
                  onClick={handleCloseTrans}
                  variant="outlined"
                  sx={{ color: "#fff" }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={()=>{handleCloseTrans(); updateTransRate(); }}
                  variant="contained"
                  sx={{ backgroundColor: "green" }}
                >
                  Save
                </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          {/* WRC */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 280,
                height: 180,
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                paddingTop: "50px",
                fontSize: "20px",
                marginBottom: "50px",
              },
            }}
          >
            <Paper>
              <Typography variant="h6" color="black">
                Wastage recycle center <br></br>
                <b>{rates.wrcRate}%</b>
              </Typography>
              <Button onClick={handleClickOpenWrc}>EDIT</Button>
            </Paper>
          </Box>
          <Dialog
            open={openWrc}
            onClose={handleCloseWrc}
            fullWidth
            maxWidth="md"
          >
            <DialogContent>
              <List dense>
                <ListItem>
                  <ListItemText>
                    <Typography
                      gutterBottom
                      variant="h5"
                      color="text.primary"
                      style={{ fontSize: "17px", marginLeft: "40px" }}
                    >
                      Revenue Rate (%) for wastage recycle center :
                    </Typography>
                  </ListItemText>
                  <ListItemText>
                    <TextField
                      onChange={changeWrcRate}
                      value={state.$data.wrcRate} 
                      helperText={state.$errors.wrcRate}
                      error={state.$errors.wrcRate}
                      autoFocus
                      margin="dense"
                      id="price"
                      type="number"
                      placeholder="select rate"
                      fullWidth
                      variant="outlined"
                    />
                  </ListItemText>
                </ListItem>
              </List>
              <DialogActions>
                <Button
                  onClick={handleCloseWrc}
                  variant="outlined"
                  sx={{ color: "#fff" }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={()=>{handleCloseWrc(); updateWrcRate();}}
                  variant="contained"
                  sx={{ backgroundColor: "green" }}
                >
                  Save
                </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    </div>
  );
}

