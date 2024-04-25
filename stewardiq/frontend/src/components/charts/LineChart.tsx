"use client";

import React from "react";
import { AreaChart, Area } from "recharts";

interface LineProps {
  lineColor: string;
  lineFill: string;
  lineDataInfo: any;
}

const LineChartCard: React.FC<LineProps> = ({ lineColor, lineDataInfo, lineFill }) => {
  return (
    <div className="bg-[#171717] rounded-[20px] py-[30px] px-[20px]">
      <AreaChart width={400} height={400} data={lineDataInfo}>
        <Area type="monotone" dataKey="value" stroke={lineColor} fill={lineFill} dot={true} strokeWidth={2} />
      </AreaChart>
    </div>
  );
};

export default LineChartCard;
