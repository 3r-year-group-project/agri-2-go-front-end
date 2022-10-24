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

export default function Chart(props) {

  props.data.map((row) => {
    row.Date = row.Date.substring(0, 10)
  })

  return (
    <React.Fragment>
      <Title >{props.title}</Title>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {props.date}
      </Typography>
      <br/>
      <ResponsiveContainer>
      <LineChart data={props.data}>
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