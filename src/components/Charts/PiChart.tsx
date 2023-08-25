"use client"
import dynamic, { DynamicOptions } from 'next/dynamic';
import * as React from 'react';

/* import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'; */
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";


const data = [
  { name: 'Group A', value: 25 },
  { name: 'Group B', value: 10 },
  { name: 'Group C', value: 10 },
  { name: 'Group D', value: 10 },
  { name: 'Group E', value: 5 },
  { name: 'Group F', value: 3 },
  { name: 'Group G', value: 3 },
  { name: 'Group H', value: 4 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export interface IPiChartProps {
}
const colors = [
    "#FF18E8",
    "#233865",
    "#FA4017",
    "#3DED97",
    "#0BD207",
    "#E7EC0C",
    "#F9A603",
    "#FF6A18",
  ];
export default function PiChart (props: IPiChartProps) {
    
  return (
    <>
   
       <div className='w-40'>
       <ResponsiveContainer width="100%" height="100%">
      <PieChart width={330} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
      </div>
    
    </>
  );
}
