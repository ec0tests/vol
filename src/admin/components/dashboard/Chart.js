import React, {Component} from 'react';
import { LineChart, Line,CartesianGrid,XAxis,YAxis } from 'recharts';

const data = [
    {name: 'Enero', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Febr', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Marzo', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Abril', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Mayo', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Junio', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Julio', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Agosto', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Sep', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Octubre', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Nov', uv: 3490, pv: 4300, amt: 2100},
    {name: 'Dic', uv: 3490, pv: 4300, amt: 2100},
];
class Chart extends React.Component {


    render() {

        return (
            <LineChart width={1000} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>


        )

    }
}


export default Chart;