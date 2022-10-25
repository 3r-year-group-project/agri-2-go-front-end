import { Typography } from '@mui/material'
import React from 'react'
import axios from "axios";
import DashboardContent from '../../../components/Dashboard/dashboard'



export default function Dashboard() {
  const [userCounts, setUserCounts] = React.useState([]);
  const [insert,setInsert] = React.useState(false);
  const [bestSellingData, setBestSellingData] = React.useState([]);

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const current = new Date()
  const curr_date_str = `on ${current.getDate()} ${months[current.getMonth()]}, ${current.getFullYear()}`;

  React.useEffect(() => {
    axios.get('/api/transporter/dashboard/user_counts')
        .then(res => {
          setUserCounts(res.data.data);});
    axios.get('/api/transporter/dashboard/best_selling_items')
        .then(res => {
          setBestSellingData(res.data.data);});
  },[insert]);

  return (
    <div style={{ background: 'rgba(37, 211, 102, 0.2)', padding:'5%',minHeight:'100%'
  }} ><DashboardContent user_data={userCounts} curr_date={curr_date_str} best_selling_data={bestSellingData}/></div>
  )
}

