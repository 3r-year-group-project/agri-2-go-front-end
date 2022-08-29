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
  console.log(props);
  // Sample data
  const data = [
    {argument: "Declines", value: props.declines/10},
    {argument: "Remaining", value: (props.limit - props.declines)/10},
  ];

  return (
      // <>
      //   <Chart
      //     data={data}
      //   >
      //     <Legend />
      //     <PieSeries
      //       valueField="value"
      //       argumentField="argument"
      //       innerRadius={0.6}
      //     />
      //     <EventTracker />
      //     <Tooltip />
      //   </Chart>
      //   <Title>Decline Rate</Title>
      // </>

      // <PieChart id="pie"
      //   palette="Bright"
      //   dataSource={data}
      //   title="Decline Rate"
      // >
      //   <Legend
      //     orientation="horizontal"
      //     itemTextPosition="right"
      //     horizontalAlignment="center"
      //     verticalAlignment="right" />
      //   <Series argumentField="argument" valueField="value">
      //     <Label
      //       visible={true}
      //       position="rows"
      //       customizeText={customizeText}>
      //       <Font size={16} />
      //       <Connector visible={true} width={0.5} />
      //     </Label>
      //   </Series>
      // </PieChart>

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
          <Label visible position="inside" format="percent" backgroundColor="transparent"/>
        </Series>
      </PieChart>
    
  );
}



