import React, { PureComponent } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    subject: "Cashflow",
    A: 120,
    B: 110,
    fullMark: 350,
  },
  {
    subject: "Income",
    A: 200,
    B: 130,
    fullMark: 350,
  },
  {
    subject: "Revenue",
    A: 180,
    B: 130,
    fullMark: 350,
  },
];

const RadarChartComp = () => {
  return (
    <ResponsiveContainer
      style={{ maxWidth: "400px", marginRight: "auto", marginLeft: "auto" }}
      width="100%"
      height={400}
    >
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />

        <Radar name="Cashflow" dataKey="A" stroke="#FFD700" fill="#FFD700" fillOpacity={0.6} />
        <Radar name="Income" dataKey="A" stroke="#515151" fill="#515151" fillOpacity={0.6} />
        <Radar name="Revenue" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComp;
