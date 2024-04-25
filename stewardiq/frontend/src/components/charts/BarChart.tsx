import { BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Bar } from "recharts";

const CostPlannedBarChart = () => {
  const data = [
    {
      name: "Terry",
      planned: 2000,
      actual: 4400,
      amt: 2400,
    },
    {
      name: "Dan",
      planned: 3000,
      actual: 1398,
      amt: 2210,
    },
    {
      name: "John",
      planned: 2000,
      actual: 9800,
      amt: 2290,
    },
    {
      name: "Ella",
      planned: 2780,
      actual: 3908,
      amt: 2000,
    },
    {
      name: "Dennis",
      planned: 1890,
      actual: 4800,
      amt: 2181,
    },
    {
      name: "Michael",
      planned: 2390,
      actual: 3800,
      amt: 2500,
    },
    {
      name: "Ban",
      planned: 3490,
      actual: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="bg-[#171717] rounded-[20px] py-[30px] px-[20px]">
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" />
        <Tooltip />
        <Legend />
        <Bar dataKey="planned" fill="#FFD700" />
        <Bar dataKey="actual" fill="#515151" />
      </BarChart>
    </div>
  );
};

export default CostPlannedBarChart;
