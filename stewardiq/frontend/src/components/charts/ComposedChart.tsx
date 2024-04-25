import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 1480,
    cashflow: 1200,
    revenue: 1328,
  },
  {
    name: "Feb",
    income: 1520,
    cashflow: 1108,
    revenue: 1300,
  },
  {
    name: "March",
    income: 900,
    cashflow: 680,
    revenue: 800,
  },
  {
    name: "April",
    income: 1980,
    cashflow: 1680,
    revenue: 1710,
  },
  {
    name: "May",
    income: 1400,
    cashflow: 680,
    revenue: 1100,
  },
];

const ComposedChartComp = () => {
  return (
    <ResponsiveContainer
      style={{ maxWidth: "500px", marginRight: "auto", marginLeft: "auto" }}
      width="100%"
      height={400}
    >
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis dataKey="name" scale="band" />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" barSize={20} fill="#FFD70070" />
        <Bar dataKey="cashflow" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedChartComp;
