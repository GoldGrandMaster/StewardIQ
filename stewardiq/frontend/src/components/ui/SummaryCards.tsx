import dynamic from "next/dynamic";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const LineChartCard = dynamic(() => import("../charts/LineChart"), {
  ssr: false,
});

interface SumCardsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardName: string;
  value: number;
  cardClass: "totalComplete" | "tasks" | "earned" | "totalRevenue";
}

type ChartData = {
  name: string;
  value: number;
};

const totalData: ChartData[] = [
  { name: "Page A", value: 30 },
  { name: "Page B", value: 15 },
  { name: "Page C", value: 18 },
  { name: "Page D", value: 24 },
  { name: "Page E", value: 10 },
  { name: "Page F", value: 19 },
  { name: "Page G", value: 50 },
];
const earnedData: ChartData[] = [
  { name: "Page A", value: 500 },
  { name: "Page B", value: 300 },
  { name: "Page C", value: 1200 },
  { name: "Page D", value: 2780 },
  { name: "Page E", value: 1890 },
  { name: "Page F", value: 2390 },
  { name: "Page G", value: 3490 },
];

const tasksData: ChartData[] = [
  { name: "Page A", value: 30 },
  { name: "Page B", value: 20 },
  { name: "Page C", value: 25 },
  { name: "Page D", value: 24 },
  { name: "Page E", value: 15 },
  { name: "Page F", value: 20 },
  { name: "Page G", value: 50 },
];

const revenueData: ChartData[] = [
  { name: "Page A", value: 4000 },
  { name: "Page B", value: 3000 },
  { name: "Page C", value: 2000 },
  { name: "Page D", value: 2780 },
  { name: "Page E", value: 1890 },
  { name: "Page F", value: 2390 },
  { name: "Page G", value: 3490 },
];

const SummaryCards: React.FC<SumCardsProps> = ({ cardName, value, cardClass, ...props }) => {
  return (
    <div
      {...props}
      className="bg-transparent flex h-[120px] border border-white  flex-row sm:max-w-[100%] justify-between items-center rounded-[10px] w-full md:max-w-[261px] px-[10px] py-[10px]"
    >
      <div className="flex flex-col gap-[5px] items-start">
        <p className="text-[15px]">{cardName}</p>
        <div className="flex gap-[10px] md:gap-0 items-baseline md:items-start flex-row md:flex-col">
          <p
            className={
              cardClass === "totalComplete"
                ? "text-[23px] text-[#8884d8]"
                : cardClass === "earned"
                ? "text-[23px] text-[#FF0000]"
                : cardClass === "tasks"
                ? "text-[23px] text-[#ADD8E6]"
                : "text-[23px] text-[#FFD700]"
            }
          >
            {value}
          </p>
          <p
            className={
              cardClass === "totalComplete"
                ? "text-[12px] text-[#8884d8]"
                : cardClass === "earned"
                ? "text-[12px] text-[#FF0000]"
                : cardClass === "tasks"
                ? "text-[12px] text-[#ADD8E6]"
                : "text-[12px] text-[#FFD700]"
            }
          >
            +{value / 2}%
          </p>
        </div>
      </div>
      <div className="">
        {cardClass === "totalComplete" ? (
          <LineChartCard lineFill="#8884d850" lineDataInfo={totalData} lineColor="#8884d8" />
        ) : cardClass === "earned" ? (
          <LineChartCard lineFill="#FF000050" lineDataInfo={earnedData} lineColor="#FF0000" />
        ) : cardClass === "tasks" ? (
          <LineChartCard lineFill="#ADD8E650" lineDataInfo={tasksData} lineColor="#ADD8E6" />
        ) : (
          <LineChartCard lineFill="#FFD70050" lineDataInfo={revenueData} lineColor="#FFD700" />
        )}
      </div>
    </div>
  );
};

export default SummaryCards;
