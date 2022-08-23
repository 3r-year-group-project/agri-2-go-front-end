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
  { argument:'Carrot-47%', value:80 },
  { argument:'Leeks-23%', value:50 },
  { argument:'Cucumber-10%', value:10 },
  { argument:'Green Chillies-15%', value:20 },
  { argument:'Potatoes -8%', value:20 },
  { argument:'Brinjal-12%', value:20 },
  { argument:'Cabbage-13%', value:20 },
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

