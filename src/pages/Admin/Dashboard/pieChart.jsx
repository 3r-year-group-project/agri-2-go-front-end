import React from "react";
import {
  Chart,
  PieSeries,
  Legend
 
} 
from '@devexpress/dx-react-chart-material-ui';
import Title from './title';
  
  
export default function PieChart(props){
  
// Sample data
const data = [
  { argument:'Customers-47%', value:80 },
  { argument:'Farmers-23%', value:50 },
  { argument:'Grocery Sellers-10%', value:10 },
  { argument:'Gardeners-15%', value:20 },
  { argument:'Stock -8%', value:20 },
  { argument:'Transpoters-12%', value:20 },
  { argument:'Wastage Recycle Centers-13%', value:20 },
];

return (
    
    <Chart
      data={data}
    
    >
         <Legend />
      <PieSeries valueField="value" argumentField="argument" />
      <Title>{props.title}</Title>
    </Chart>

);
}

