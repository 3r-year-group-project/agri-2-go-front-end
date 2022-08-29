import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './title';
import theme from '../../../services/utils/theme'
import { Typography } from '@mui/material';

export default function Chart(props) {
 

  return (
    <React.Fragment>
      <Title >{props.title}</Title>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {props.date}
      </Typography>
      <br/>
      <ResponsiveContainer>
        <LineChart
          data={props.data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="date"
            stroke='black'
            style={theme.typography.body2}
          />
          <YAxis
            stroke='black'
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: 'black',
                ...theme.typography.body1,
              }}
            >
              {props.yAxis}
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}