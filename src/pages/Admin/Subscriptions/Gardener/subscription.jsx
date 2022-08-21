import * as React from 'react';
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormPropsTextFields from './content'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Sub() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
         
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">Basic</Typography>
        </AccordionSummary>
        <AccordionDetails  sx={{
    backgroundColor: "white",
    color:'black'
  }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <div><DeleteIcon color='secondary'/></div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5">Standard</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
    backgroundColor: "white",
    color:'black'
  }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <FormPropsTextFields/>
          <div><DeleteIcon color='secondary'/><Button color="secondary" variant="outlined" sx={{
                         fontSize: 16, color:'black',margin:'5px'}}>
                           CANCEL
                        </Button><Button color="secondary" variant="contained" sx={{
                         fontSize: 16, backgroundColor: "green",color:'white'}}>
                            SAVE
                        </Button></div>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
                        }