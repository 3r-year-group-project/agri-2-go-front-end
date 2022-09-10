import React from "react";
// import {
//   Chart,
//   PieSeries,
//   Legend,
//   Tooltip,
// } from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';
import Title from './title';

import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Size,
  Connector,
} from 'devextreme-react/pie-chart';

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}
  
export default function Chart(props){
  // Sample data
  const data = [
    {argument: "Declines", value: props.declines},
    {argument: "Remaining", value: (props.limit - props.declines)},
  ];

  return (
      <PieChart
        id="pie"
        dataSource={data}
        palette="Carmine"
        paletteExtensionMode="Extrapolate"
        title="Decline Rate"
      >
        <Series
          argumentField="argument"
          valueField="value"
        >
          <Label visible position="inside" backgroundColor="transparent"/>
        </Series>
      </PieChart>
  );
}



