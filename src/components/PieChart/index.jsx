import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
//import { PieChartTwoTone } from '@material-ui/icons';

const data = [
  { charge: 'Good', val: 5, slice: 'green'},
  { charge: 'Alright', val: 5, slice: 'orange' },
  { charge: 'Needs Charge', val: 3, slice: 'red' }
];

const PieChart = () => {

    //const [data, setData] = useState(data);

  

    return (
        <Paper style={{maxHeight: '480px', minWidth: '400px'}}>
            <Chart
                data={data}
            >
                <PieSeries
                    valueField="val"
                    argumentField="charge"
                    color="green"
                    innerRadius={0.6}
                />
                <Title
                    text="EV Charge Ranges"
                />

                <Animation />
            </Chart>
        </Paper>
    );
  
}

export default PieChart;