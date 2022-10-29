import * as React from "react";
import { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import axios from "axios";

import Joi from "joi";
import { useValidator } from "react-joi";

export default function TransportationSchedule(props) {
  const [openContact, setOpenContact] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [code, setCode] = React.useState("");
  const [update,setUpdate] = React.useState(false);

  

  const { state, setData, setExplicitField, validate } = useValidator({
    initialData: {
      code: null,
    },
    schema: Joi.object({
      code: Joi.number().required(),
    }),
    explicitCheck: {
      code: false,
    },
    validationOptions: {
      abortEarly: true,
    },
  });

  React.useEffect(() => {
    axios.get("/api/transporter/request/getcode/" + props.id).then((res) => {
      console.log("code", res.data.data[0].code);
      if (res.data.data[0].code != null) setCode(res.data.data[0].code);
    });
  }, [props.id, update]);

  const changeCode = (e) => {
    setData((old) => ({
      ...old,
      code: e.target.value,
    }));
  };

  const submitcode = () => {
    if (state.$data.code != null) {
      axios
        .post("/api/transporter/request/starttrip", {
          id: props.id,
          code: state.$data.code,
        })
        .then((res) => {
          if (res.data.stCode === 1) {
            setOpenConfirm(false);
            

            props.changeSt();
          } else if (res.data.stCode === 0) {
            setOpenConfirm(false);
            setOpenError(true);
          }
        });
    }
  };

  const handleConfirmOpen = () => {
    setOpenConfirm(true);
  };

  const handleConfirmClose = () => {
    setOpenConfirm(false);
  };

  const handleClickOpenContact = () => {
    setOpenContact(true);
  };

  const handleCloseContact = () => {
    setOpenContact(false);
  };

  const handleConfirm = () => {
    props.channgeSt();
  };

  const handleErrorShowClose = () => {
    setOpenError(false);
  };

  const handleDecline = () => {
    props.channgeSt();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" id="1" sx={{ mt: "50px" }}>
        <Box
          sx={{
            bgcolor: "white",
            height: "auto",
            color: "black",
            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <Box
            sx={{
              bgcolor: "#075E54",
              height: "auto",
              color: "white",
              padding: "15px",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <Typography variant="h6">{props.name}</Typography>
            <Stack spacing={2} direction="row">
              <Typography><b>{props.vegetableName}</b></Typography>
              <Typography>{props.quantity} kg</Typography>
              <Typography>Status: {props.st}</Typography>
            </Stack>
          </Box>

          <Box
            sx={{
              bgcolor: "#d4fade",
              padding: "10px 20px 20px 20px",
              height: "auto",
              color: "black",
              borderRadius: "0 0 10px 10px",
              border: "2px",
            }}
          >
            <Stack spacing={4} direction="row">
              <Typography>Date</Typography>
              <Typography>{props.date}</Typography>
              <Typography>Contacts</Typography>
              <Typography>{props.phone}</Typography>
              <Typography>Total Payment</Typography>
              <Typography>Rs.{props.cost}</Typography>
              {code != "" ?? <Typography>
                <b>Code </b>
              </Typography>}
              
              <Typography>{code}</Typography>
            </Stack>

            <Timeline position="right">
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  Start
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot>
                    <MyLocationIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    {props.startAddress}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  Destination
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <LocationOnIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    {props.destinationAddress}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <br />

            <Stack spacing={2} direction="row" marginLeft="40%">
              {/* <Button onClick={handleClickOpenContact} variant="contained" color="info" startIcon={<ChatIcon /> }>
        Contact Seller
      </Button> */}
              <Button
                onClick={handleConfirmOpen}
                variant="contained"
                color="success"
                disabled={props.st === "Started" ? true : false}
                startIcon={<PlaylistAddIcon />}
              >
                Start Journery
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
      <br />

      <Dialog open={openError} onClose={handleErrorShowClose}>
        <DialogTitle style={{ backgroundColor: "white", color: "black" }}>
          Start Journery
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "white", color: "black" }}>
          <DialogContentText>
            <h3>You enter a wrong code</h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ backgroundColor: "white" }}>
          <Button
            onClick={handleErrorShowClose}
            variant="outlined"
            color="secondary"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openConfirm} onClose={handleConfirmClose}>
        <DialogTitle style={{ backgroundColor: "white", color: "black" }}>
          Start Journery
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "white", color: "black" }}>
          <DialogContentText>
            <h3>Enter Journy code to start the trip</h3>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="journey-code"
                label="Journery Code"
                variant="filled"
                onChange={changeCode}
                helperText={state.$errors.code
                  .map((data) => data.$message)
                  .join(",")}
                error={state.$errors.code.length > 0}
                sx={{ input: { color: "black" } }}
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ backgroundColor: "white" }}>
          <Button
            variant="contained"
            color="error"
            onClick={handleConfirmClose}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              submitcode();
              handleConfirmClose();
              setUpdate(!update);
              window.location.reload(false);
            }}
            variant="outlined"
            color="secondary"
          >
            Start The journey
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
