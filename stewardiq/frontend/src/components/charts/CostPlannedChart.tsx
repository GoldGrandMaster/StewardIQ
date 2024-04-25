import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

type ChartData = {
  name: string;
  value: number;
};

const data: ChartData[] = [
  { name: "Page A", value: 30 },
  { name: "Page B", value: 15 },
  { name: "Page C", value: 18 },
  { name: "Page D", value: 24 },
  { name: "Page E", value: 10 },
  { name: "Page F", value: 19 },
  { name: "Page G", value: 50 },
];
const CostPlannedChart = () => {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" stroke="#ffffff" />
      <YAxis stroke="#ffffff" />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={2} />
    </LineChart>
  );
};

export default CostPlannedChart;
