import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { charge: '> 80%', val: 5, slice: 'green'},
  { charge: '80% - 40%', val: 5, slice: 'orange' },
  { charge: '< 40%', val: 3, slice: 'red' }
];

const PieChart = () => {

    return (
        <Paper style={{maxHeight: '480px', minWidth: '500px'}}>
            <Chart
                data={data}
            >
                <PieSeries
                    name="EV Charge Ranges"
                    valueField="val"
                    argumentField="charge"
                    color="green"
                    innerRadius={0.6}
                />
                <Legend />
                <Title
                    text="EV Fleet Charge Ranges"
                />
                <Animation />
            </Chart>
        </Paper>
    );
  
}

export default PieChart;