import * as React from 'react';
import { Typography } from '@mui/material';
import SalesTable from '../../../components/Sales';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function createData(name, price, quantity) {
    return {
      name,
      price,
      quantity,
      // history: [
      //   {
      //     date: '2020-01-05',
      //     customerId: '11091700',
      //     amount: 3,
      //   },
      //   {
      //     date: '2020-01-02',
      //     customerId: 'Anonymous',
      //     amount: 1,
      //   },
      // ],
    };
}

let rows = [
    // createData('Carrot', 300, 6.0),
    // createData('Tomato', 500, 9.0),
    // createData('Beetroot', 180, 6.0),
    // createData('Leeks', 420, 3.7),
    // createData('Green Chillies', 770, 3.0)
];

export default function FarmerSales() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const[insert,setInsert] = React.useState(false);

    React.useEffect(() => {
        console.log("Running Sales!!!!!!!!!!");
        axios.post('/api/farmer/sales/getsales',{email:user.email})
        .then(res => {
          console.log("jhsyagfduyadsg")
          rows = []
          for(let i=0;i<res.data.data.length;i++){
          if(res.data.data[i].status === 2){
            rows.push(createData(res.data.data[i].vegetable,res.data.data[i].price,res.data.data[i].initial_quantity));
            setInsert(true);    
          }
          
          console.log(res.data.data[i])
          }
          
        })
                // .then(res => {
                //     console.log(res.data.data);
                // rows = []
                // for(let i=0;i<res.data.data.length;i++){
                //   rows.push(createData(res.data.data[i].date_time,res.data.data[i].first_name.concat(" ", res.data.data[i].last_name),res.data.data[i].min_advance,res.data.data[i].status));
                //   console.log(res.data.data[i])
                // }
                //   });
                    
        
      }, [insert]);

    return(
        <div style={{ background: 'white', padding:'5%',minHeight:'100%'}} >
           
            <Typography variant='h5' color='#075E54' marginBottom='20px'><b>Sales</b></Typography>
            <SalesTable rows={rows}/>
   
        </div>
    );
}