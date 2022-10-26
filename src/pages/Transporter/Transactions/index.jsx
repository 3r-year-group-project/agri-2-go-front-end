import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import TransactionTable from "../../../components/Transactions";
import { Typography } from '@mui/material';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

function createData(date, description, amount, status) {
    return { date, description, amount, status };
}
  
let rows = [
    
    
    // createData('2022.08.27', "Kamal Fernando", "1600.00", "+ Pending"),  
    // createData('2022.08.29', "Lakmal Silva", "1600.00", "- Completed"),
    // createData('2022.08.30', "Nelum Peries", "3200.00", "- Pending")
    
    
].sort((a, b) => (a.date < b.date ? -1 : 1));

export default function TransporterTransactions() {
    const { user, isAuthenticated, isLoading } = useAuth0()
    const [insert, setInsert] = React.useState(false);


    React.useEffect(() => {
        axios.post('/api/transporter/request/getAllTransactions', {email: user.email})
        .then(res => {

        console.log('response',res.data.data)
        let status = "";
        rows = []
        for(var i=0;i<res.data.data.length;i++){
            if(res.data.data[i].fund_release_status === 0){
                status = "Released"
            }
            else if(res.data.data[i].fund_release_status === 1){
                status = "Not Released"
            }
            rows.push(createData(res.data.data[i].date.slice(0,10), res.data.data[i].first_name.concat(" ",res.data.data[i].last_name), res.data.data[i].payment,status))
            setInsert(true)
        }
        



    
        //console.log(res.data.data[0].last_name)

    })
    }, [insert])


    

    return(
        <div style={{ background: 'white', padding:'0.5%',minHeight:'100%'}} >
            <Box m={2} sx={{paddingLeft: 3, paddingRight: 3}}>
                <Box m={2} sx={{paddingTop: 3, paddingBottom: 2}}>
                    
                   <Typography sx={{fontSize:'28px', color:'#075E54'}}><b>Transaction Details</b></Typography>
                </Box>
                <TransactionTable rows={rows}/>
            </Box>
        </div>
    );
}