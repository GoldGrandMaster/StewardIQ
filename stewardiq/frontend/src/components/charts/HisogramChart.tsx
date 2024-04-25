import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Тип для даних, що будуть використовуватися в гістограмі
type DataItem = {
  name: string;
  Price: number;
};

// Дані для гістограми
const data: DataItem[] = [
  { name: "Jersy project", Price: 2000 },
  { name: "Nensy's", Price: 3240 },
  { name: "MD's", Price: 5000 },
];

const HistogramChart: React.FC = () => {
  return (
    <div className="bg-[#171717] rounded-[20px] pt-[30px] pb-[60px] px-[20px]">
      <BarChart
        width={500}
        height={370}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="Price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default HistogramChart;
