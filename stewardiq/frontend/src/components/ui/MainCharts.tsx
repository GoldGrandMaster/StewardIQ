import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import CostPlannedPie from "@/components/charts/CostPlannedPie";

interface MainChartsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cost?: boolean;
  costName?: string;
  resources?: boolean;
  resoursesName?: string;
  values: [number, number, number];
  timeline?: boolean;
  timelineName?: string;
}

const MainCharts: React.FC<MainChartsProps> = ({
  cost,
  costName,
  resources,
  resoursesName,
  values,
  timeline,
  timelineName,
  ...props
}) => {

  const [data, setData] = useState<any>([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/kpi')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [data]);



  const allDataCosts = {
    costPlannedData: data.map((items:any) => items.total_cost),
    costActualData: data.map((items:any) => items.cost_left_project),
    resourceAvailabilityData: data.map((items:any) => items.hrs_left_project),
    averageProgress: data.map((items:any) => items.avg_progress),
  };

  const totalCostSummary = {
    plannedSummary: allDataCosts.costPlannedData.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    ),
    actualSummary: allDataCosts.costActualData.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    ),
    resourseTotalAvailability: allDataCosts.resourceAvailabilityData.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    ),
    averageResursProgress: allDataCosts.averageProgress.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    ),
  };

  const resourseRunRate =
    (totalCostSummary.plannedSummary - totalCostSummary.actualSummary) / totalCostSummary.averageResursProgress;

  const costdata = [
    { name: "Planned", value: totalCostSummary.plannedSummary },
    { name: "Actual", value: totalCostSummary.actualSummary },
  ];

  const resourseData = [
    { name: "Resource", value: resourseRunRate },
    { name: "Available", value: 20000 }, // totalCostSummary.resourseTotalAvailability.toFixed(0)
    { name: "Cost", value: totalCostSummary.actualSummary },
  ];

  const timelineData = [
    { name: "Planned", value: 4000 },
    { name: "Actual", value: totalCostSummary.resourseTotalAvailability / totalCostSummary.averageResursProgress },
  ];

  // Cost Data Persents

  const numbers = costdata.map((items) => items.value);
  const totalSum = numbers.reduce((acc, current) => acc + current, 0);
  const percentages = numbers.map((number) => ((number / totalSum) * 100).toFixed(2));

  // Cost Data Persents

  // Resource Run Rate

  const resourceDataPersents = resourseData.map((items) => items.value);
  const totalResourceSum = resourceDataPersents.reduce((acc, current) => acc + current, 0);
  const resourcePersents = resourceDataPersents.map((number) => ((number / totalResourceSum) * 100).toFixed(2));


  // Resource Run Rate
  // Timeline Data Persents
  const timelineDataPersents = timelineData.map((items) => items.value);
  const totalTimelineSum = timelineDataPersents.reduce((acc, current) => acc + current, 0);
  const timelinePersents = timelineDataPersents.map((number) => ((number / totalTimelineSum) * 100).toFixed(2));

  // Timeline Data Persents

  const costColors = ["#FFBB28", "#FF8042"];
  const resourcelors = ["#ADD8E6", "#FFD700", "#8884d8"];
  const timelineColors = ["#8884d8", "#F67042"];

  return (
    <div
      {...props}
      className="bg-transparent z-10 cursor-pointer hover:scale-[1.02] transition-all flex border border-white flex-row sm:max-w-[100%] justify-between items-center rounded-[10px] w-full  px-[10px] py-[10px]"
    >
      <div className="flex z-10 flex-col gap-[10px]">
        {cost && (
          <div className="pl-[10px] flex flex-col gap-[10px]">
            <p className="text-[18px] lg:text-[25px]">{costName}</p>
            <p className="text-[18px]">
              <span className="text-[#FFBB28]">{percentages[0]}%</span> vs{" "}
              <span className="text-[#FF8042]">{percentages[1]}%</span>
            </p>
          </div>
        )}
        {resources && (
          <div className="pl-[10px] flex flex-col gap-[10px]">
            <p className="text-[18px] max-w-[200px]  lg:text-[25px]">{resoursesName}</p>

            <p className="text-[18px]">
              <span className="text-[#ADD8E6]">{resourcePersents[0]}%</span>,{" "}
              <span className=" text-[#FFD700]">{resourcePersents[1]}%</span>,{" "}
              <span className="text-[#8884d8]">{resourcePersents[2]}%</span>
            </p>
          </div>
        )}
        {timeline && (
          <div className="pl-[10px] flex flex-col gap-[10px]">
            <p className="text-[18px] lg:text-[25px]">{timelineName}</p>
            <p className="text-[18px]">
              <span className="text-[#8884d8]">{timelinePersents[0]}%</span> vs{" "}
              <span className="text-[#F67042]">{timelinePersents[1]}%</span>
            </p>
          </div>
        )}
      </div>
      <div className="w-[260px] cursor-pointer">
        {cost && <CostPlannedPie chartsData={costdata} colors={costColors} heightValue={260} />}
        {resources && <CostPlannedPie chartsData={resourseData} colors={resourcelors} heightValue={260} />}
        {timeline && <CostPlannedPie chartsData={timelineData} colors={timelineColors} heightValue={260} />}
      </div>
    </div>
  );
};

export default MainCharts;
