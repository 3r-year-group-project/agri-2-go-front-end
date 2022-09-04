import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import Title from './title';
import theme from '../../../services/utils/theme'
import { color } from '@mui/system';
import { Typography } from '@mui/material';

// Generate Sales Data
function createData(date, amount) {
  return { date, amount };
}

const data = [

  createData('04 Aug', 300),
  createData('05 Aug', 600),
  createData('06 Aug', 300),
  createData('07 Aug', 150),
  createData('08 Aug', 200),
  createData('09 Aug', 400),
  createData('10 Aug', 400),
  createData('11 Aug', 200),
];

const data1 = [

  createData('04 Aug', 200),
  createData('05 Aug', 100),
  createData('06 Aug', 300),
  createData('07 Aug', 550),
  createData('08 Aug', 100),
  createData('09 Aug', 600),
  createData('10 Aug', 200),
  createData('11 Aug', 800),
];

const pdata = [
  {
      Date: '04 Aug',
      MinimumPrice: 11,
      MaximumPrice: 120
  },
  {
      Date: '05 Aug',
      MinimumPrice: 15,
      MaximumPrice: 12
  },
  {
      Date: '06 Aug',
      MinimumPrice: 5,
      MaximumPrice: 10
  },
  {
      Date: '07 Aug',
      MinimumPrice: 10,
      MaximumPrice: 5
  },
  {
      Date: '08 Aug',
      MinimumPrice: 9,
      MaximumPrice: 4
  },
  {
      Date: '09 Aug',
      MinimumPrice: 10,
      MaximumPrice: 8
  },
  {
    Date: '10 Aug',
    MinimumPrice: 12,
    MaximumPrice: 140
  },
  {
    Date: '11 Aug',
    MinimumPrice: 110,
    MaximumPrice: 12
},
{
    Date: '12 Aug',
    MinimumPrice: 150,
    MaximumPrice: 220
},
{
    Date: '13 Aug',
    MinimumPrice: 50,
    MaximumPrice: 100
},
{
    Date: '14 Aug',
    MinimumPrice: 120,
    MaximumPrice: 500
},
{
    Date: '15 Aug',
    MinimumPrice: 90,
    MaximumPrice: 400
},
{
    Date: '16 Aug',
    MinimumPrice: 100,
    MaximumPrice: 180
},
{
  Date: '17 Aug',
  MinimumPrice: 120,
  MaximumPrice: 140
},
  
];


export default function Chart(props) {
 

  return (
    <React.Fragment>
      <Title >{props.title}</Title>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {props.date}
      </Typography>
      <br/>
      <ResponsiveContainer>
      <LineChart data={pdata}>
                    <CartesianGrid />
                    <XAxis dataKey="Date" 
                        interval={'preserveStartEnd'} />
                    <YAxis> Price </YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="MinimumPrice"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="MaximumPrice"
                        stroke="blue" activeDot={{ r: 8 }} />
        </LineChart>

        
      </ResponsiveContainer>
    </React.Fragment>
  );
}