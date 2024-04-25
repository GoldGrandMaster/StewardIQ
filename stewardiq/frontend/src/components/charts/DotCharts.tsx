import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

type DataItem = {
  x: number;
  y: number;
};

const data: DataItem[] = [
  { x: 10, y: 2 },
  { x: 11, y: 10 },
  { x: 15, y: 12 },
  { x: 23, y: 25 },
  { x: 18, y: 8 },
  { x: 20, y: 28 },
];

const DotPlot: React.FC = () => {
  return (
    <div className="bg-[#171717] rounded-[20px] py-[30px] px-[20px]">
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="Planned" unit="Nov" />
        <YAxis type="number" dataKey="y" name="Done" unit="Dec" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={data} fill="#f67893" />
      </ScatterChart>
    </div>
  );
};

export default DotPlot;
