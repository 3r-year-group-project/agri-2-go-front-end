import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TransactionTable from "../../components/Transactions";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function createData(date, description, amount, status) {
    return { date, description, amount, status };
}
  
let rows = [
    
    
    // createData('2022.08.27', "Kamal Fernando", "1600.00", "+ Pending"),  
    // createData('2022.08.29', "Lakmal Silva", "1600.00", "- Completed"),
    // createData('2022.08.30', "Nelum Peries", "3200.00", "- Pending")
    
    
].sort((a, b) => (a.date < b.date ? -1 : 1));

export default function GardenerTransactions() {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const[insert,setInsert] = React.useState(false);

    React.useEffect(() => {
        console.log("Running Transactions!!!!!!!!!!");
        axios.post('/api/stockbuyer/transactions/getdetails',{email:user.email})
        .then(res => {
          console.log("jhsyagfduyadsg")
          rows = []
          
          for(let i=0;i<res.data.data.length;i++){
            rows.push(createData(res.data.data[i].date_time,res.data.data[i].first_name.concat(" ",res.data.data[i].last_name),res.data.data[i].min_advance,res.data.data[i].status));
            setInsert(true);  
          
          
          console.log(res.data.data[i])
          }
        console.log(res.data.data)
          
        })        
        
      }, [insert]);



    return(
        <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'}} >
            <Box m={2} sx={{paddingLeft: 3, paddingRight: 3}}>
                <Box m={2} sx={{paddingTop: 3, paddingBottom: 2}}>
                    <center><FormLabel id="title"><font size="18"><b>Transaction Details</b></font></FormLabel></center>
                </Box>
                <TransactionTable rows={rows}/>
            </Box>
        </div>
    );
}