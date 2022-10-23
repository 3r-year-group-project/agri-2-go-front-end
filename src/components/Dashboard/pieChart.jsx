import React from "react";
import {
  Chart,
  PieSeries,
  Legend
 
} 
from '@devexpress/dx-react-chart-material-ui';
import Title from './title';
  
  
export default function PieChart(props){
  
  const userType = [
    "Admin",
    "Customer",
    "Farmer",
    "Gardener",
    "Stock Buyer",
    "Grocery",
    "Transporter",
    "Wastage Recycle Center"
  ]
  
  function createData(row) {
    const user_id = parseInt(row.user_type)
    const user_count = row.user_count
    return {
      user_type: userType[user_id-1]+`-${user_count}`,
      user_count: user_count
    }
  }

  const data = props.data.slice(0, -1)

  let chartData = []

  data.forEach(element => {
    chartData.push(createData(element))
  });


  return (
      
      <Chart
        data={chartData}
      
      >
          <Legend />
        <PieSeries valueField="user_count" argumentField="user_type" />
        <Title>{props.title}</Title>
      </Chart>

  );
}

