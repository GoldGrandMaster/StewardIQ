"use client";

import React from "react";
import { AreaChart, Area, Line, LineChart, ResponsiveContainer } from "recharts";

interface LineProps {
  lineDataInfo: any;
  lineColor: string;
}

const LineChartBg: React.FC<LineProps> = ({ lineDataInfo, lineColor }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={lineDataInfo}>
        <Line
          type="monotone"
          dataKey="value"
          isAnimationActive={true}
          animationDuration={400}
          stroke={lineColor}
          fill={lineColor}
          strokeWidth={10}
          animationEasing={"ease"}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartBg;
