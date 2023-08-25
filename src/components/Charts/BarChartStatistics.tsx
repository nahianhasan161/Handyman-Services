"use client"
import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2020',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2021',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2022',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2023',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '20204',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2025',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2026',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export interface IBarChartStatisticsProps {
}

export default function BarChartStatistics (props: IBarChartStatisticsProps) {
  return (
    <>
     {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart 
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        > 
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#FF6A18" background={{ fill: '#fff' }} />
        </BarChart>
      {/* </ResponsiveContainer> */} 
    </>
  );
}
