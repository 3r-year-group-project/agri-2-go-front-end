import React from 'react';
import TransportationSchedule from '../../../components/TransporterSchedule/transporterSchedule';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

export default function TransportationSchedulePage() {
    const {user} = useAuth0();
    const [request, setRequest] = React.useState([]);
    const [st, setSt] = React.useState(false);
    React.useEffect(() => {
        axios.post('/api/transporter/request/getall/accepted',{email:user.email})
            .then(res => {
              console.log(res.data);
                setRequest(res.data.data);});
    },[st]);

    const changeSt = () => {
        setSt(!st);
      };

    return (
        
        <React.Fragment>
        {request.map(element => {
            let name = element.farmer_first_name+" "+element.farmer_last_name;
            let dy = element.date.substring(0,10);
            return (
              <TransportationSchedule  
              id = {element.id}     
              name = {name}
              st={element.status==3?'Pending':'Started'}
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
        </React.Fragment>
        
    );
}