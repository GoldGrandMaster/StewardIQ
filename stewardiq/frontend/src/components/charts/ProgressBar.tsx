import React from "react";
import { Cell, PieChart, Pie, ResponsiveContainer } from "recharts";

interface ProgressBarProps {
  percentage: number;
  heightValue: number;
  iRadius: number;
  outRadius: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, heightValue, iRadius, outRadius }) => {
  const data = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  return (
    <ResponsiveContainer width="100%" height={heightValue}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={iRadius}
          outerRadius={outRadius}
          fill="#8884d8"
          dataKey="value"
          startAngle={90}
          endAngle={450}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? "#82ca9d" : "#d0edf7"} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ProgressBar;
