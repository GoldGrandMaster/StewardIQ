import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

interface PieChartsProps {
  heightValue: number;
  colors: any;
  chartsData: any;
}

const COLORS = ["#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      className="text-[15px]"
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CostPlannedPie = ({ heightValue, chartsData, colors }: PieChartsProps) => {
  return (
    <ResponsiveContainer
      style={{ maxWidth: "400px", marginRight: "auto", marginLeft: "auto" }}
      width="100%"
      height={heightValue}
    >
      <PieChart>
        <Pie
          data={chartsData}
          cx="50%"
          cy="50%"
          viewBox="#000"
          labelLine={false}
          label={renderCustomizedLabel}
          dataKey="value"
        >
          {chartsData?.map((entry: any, index: any) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CostPlannedPie;
