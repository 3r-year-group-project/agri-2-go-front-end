import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TransportationRequest from '../../../components/TransportationRequest'

import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { Payment } from 'payment';

export default function Request() {

  const {user} = useAuth0();
  const [request, setRequest] = React.useState([]);
  const [st, setSt] = React.useState(false);

  React.useEffect(() => {
    axios.post('/api/transporter/request/getall',{email:user.email})
        .then(res => {
          console.log(res.data);
            setRequest(res.data.data);});
},[st]);
  
const changeSt = () => {
  setSt(!st);
};

  return (
    <React.Fragment>
    <CssBaseline />
    {request.map(element => {
      let name = element.farmer_first_name+" "+element.farmer_last_name;
      let dy = element.date.substring(0,10);
      return (
        <TransportationRequest  
        id = {element.id}     
        name = {name}
        vegetableName = {element.name}
        quantity = {element.quantity}
        date = {dy}
        startAddress = {element.address}
        destinationAddress = {element.buyer_address}
        phone = {element.phone}
        cost={element.payment}
        changeSt = {changeSt}
          />
      )
    })}
    {/* <TransportationRequest
      name = "sethni Dissanayake"
      vegetableName = "carrot"
      quantity = "100"
      date = "20 of march 2022"
      time = "10:00 am"
      startAddress = "no 202/b araliya road , nugegoda"
      destinationAddress = "no 203/b araliya road , nugegoda"
      phone = "0771234567"
      cost="100.0"
    /> */}
    <br/>
   
    
    
    
  </React.Fragment>

  );
  
}