import dynamic from "next/dynamic";
import { useState } from "react";

import { Tabs } from "@/components/ui/Tabs";
import { MainTabs } from "@/components/ui/MainTabs";
import AllChartDetail from "@/components/ui/AllChartDetail";

import { useCreateTaskContext } from "@/context/CreateTaskContext";

const LineChartCard = dynamic(() => import("../charts/LineChart"), {
  ssr: false,
});

const HistogramChart = dynamic(() => import("../charts/HisogramChart"), {
  ssr: false,
});

const DotCharts = dynamic(() => import("@/components/charts/DotCharts"), {
  ssr: false,
});

const CostPlannedBarChart = dynamic(() => import("../charts/BarChart"), { ssr: false });

const ProgressBar = dynamic(() => import("@/components/charts/ProgressBar"), { ssr: false });

const CostPlannedPie = dynamic(() => import("../charts/CostPlannedPie"), { ssr: false });

interface ITab {
  id: string | number;
  label?: string | number;
}

const mainTabs: ITab[] = [
  { id: "1", label: "Portfolio" },
  { id: "2", label: "Program" },
  { id: "3", label: "Project" },
  { id: "4", label: "Task" },
];

const actionTabs: ITab[] = [
  { id: "1", label: "Initiate" },
  { id: "2", label: "Plan" },
  { id: "3", label: "Execute" },
  { id: "4", label: "Close" },
  { id: "5", label: "Retro" },
];

const DetailChartsInfo: React.FC = () => {
  const { chartsInfo, setOpenChartsInfo, setOpenAllCharts, openAllChartInfo } = useCreateTaskContext();

  const [selectedMainTabId, setSelectedMainTabId] = useState<any>(mainTabs[0].id);
  const [selecteActionTabId, setSelectedActionTabId] = useState<any>(mainTabs[0].id);
  const [generateAnswer, setGenerateAnswer] = useState<boolean>(false);
  const [getResults, setGetResults] = useState<boolean>(false);

  setTimeout(() => {
    if (generateAnswer) {
      setGetResults(true);
      setGenerateAnswer(false);
    }
  }, 4000);

  const handleMainTabClick = (id: string | number) => {
    setSelectedMainTabId(id);
  };

  const handleActionTabClick = (id: string | number) => {
    setSelectedActionTabId(id);
  };

  const InitialTask = () => {
    return (
      <div className="flex w-full bg-black-100 items-center px-[20px] rounded-[10px] py-[20px] flex-row justify-between">
        <h2>Create new POC</h2>
        <div>Terry, Dan, Ry </div>
        <div>2024-01-04</div>
        <div>2024-04-10</div>
        <div className="w-[100px]">
          <ProgressBar heightValue={50} iRadius={10} outRadius={20} percentage={80} />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="fixed border rounded-[10px] border-white w-[90%] h-[600px] lg:max-h-[750px] flex flex-col lg:flex-row top-[5%] md:top-[5%] left-[5%] z-10">
        <div className="w-full lg:w-[150px]">
          <MainTabs selectedId={selectedMainTabId} tabs={mainTabs} onClick={handleMainTabClick} />
        </div>
        <div className="flex w-full flex-col h-full">
          <div className="flex bg-[#393646] p-[20px] items-center  lg:rounded-tr-[10px] flex-row justify-between w-full gap-[20px]">
            <h2 className="font-[700 text-[15px] lg:text-[20px]">
              {chartsInfo === 1
                ? "Cost: Planned vs Actual"
                : chartsInfo === 2
                ? "Resourse Run Rate, Availability, Cost"
                : "Timeline: Planned vs Actual"}
            </h2>
            <button
              onClick={() => setOpenChartsInfo(false)}
              className="bg-[#171717] hover:bg-opacity-40 transition-all capitalize px-[20px] py-[10px] rounded-[10px]"
            >
              Close
            </button>
          </div>
          <div className="flex w-full items-center justify-center gap-10">
            <Tabs selectedId={selecteActionTabId} tabs={actionTabs} onClick={handleActionTabClick} />
          </div>
          <div className="flex w-full max-h-[180px] lg:max-h-[500px] overflow-y-auto flex-col bg-[#393646] p-[20px] items-start rounded-b-[10px]">
            {selectedMainTabId === mainTabs[0].id && (
              <>
                {selecteActionTabId === actionTabs[0].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <div onClick={() => setOpenAllCharts(true)}>
                      <HistogramChart />
                    </div>
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
                {selecteActionTabId === actionTabs[1].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <div onClick={() => setOpenAllCharts(true)}>
                      <HistogramChart />
                    </div>
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
                {selecteActionTabId === actionTabs[2].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <div onClick={() => setOpenAllCharts(true)}>
                      <HistogramChart />
                    </div>
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
                {selecteActionTabId === actionTabs[3].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <div onClick={() => setOpenAllCharts(true)}>
                      <HistogramChart />
                    </div>
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
                {selecteActionTabId === actionTabs[4].id && (
                  <>
                    <div
                      className={
                        generateAnswer || getResults
                          ? "hidden"
                          : "flex flex-col lg:h-screen w-full justify-evenly gap-[20px] flex-wrap"
                      }
                    >
                      <div className="flex flex-row w-full justify-evenly gap-[20px] flex-wrap">
                        <input
                          type="text"
                          className="w-full py-[10px] border border-white [background-color:_transparent]  rounded-[10px] px-[20px] lg:w-[48%]"
                          placeholder="Reason"
                        />
                        <input
                          type="text"
                          className="w-full py-[10px] border border-white [background-color:_transparent] rounded-[10px] px-[20px] lg:w-[48%]"
                          placeholder="Suggestions"
                        />
                        <input
                          type="text"
                          className="w-full py-[10px] border border-white [background-color:_transparent]  rounded-[10px] px-[20px] lg:w-[48%]"
                          placeholder="Action Plan"
                        />
                        <input
                          type="text"
                          className="w-full py-[10px] border border-white [background-color:_transparent]  rounded-[10px] px-[20px] lg:w-[48%]"
                          placeholder="Responsible"
                        />
                        <input
                          type="text"
                          className="w-full py-[10px] border border-white [background-color:_transparent]  rounded-[10px] px-[20px] lg:w-[48%]"
                          placeholder="Conclusion"
                        />
                      </div>
                      <div className="py-[20px]">
                        <hr />
                      </div>
                      <div className="flex gap-[40px] flex-row">
                        <input
                          className="w-full py-[10px] border border-white [background-color:_transparent]  rounded-[10px] px-[20px] lg:w-[48%]"
                          type="text"
                          placeholder="What went well?"
                        />
                        <input
                          className="w-full py-[10px] border border-white [background-color:_transparent]  rounded-[10px] px-[20px] lg:w-[48%]"
                          type="text"
                          placeholder="What can be improved?"
                        />
                      </div>

                      <div className="flex w-full items-center justify-center">
                        <button
                          onClick={() => setGenerateAnswer(true)}
                          className="bg-gold max-w-[500px] mx-auto capitalize py-[10px] transition-all hover:bg-white hover:text-black rounded-[10px] w-full bg-opacity-80 text-black"
                        >
                          Generate Answer
                        </button>
                      </div>
                    </div>
                    <div
                      className={
                        generateAnswer
                          ? "flex w-full lg:h-screen items-center justify-center"
                          : getResults
                          ? "hidden"
                          : "hidden"
                      }
                    >
                      <div className="flex flex-row items-end">
                        <h2 className="text-[20px]">Generating</h2>
                        <span className="animate-bounce">.</span>
                        <span className="animate-bounsed">.</span>
                        <span className="animate-bounce">.</span>
                      </div>
                    </div>
                    <div className={getResults ? "flex w-full lg:h-screen flex-col gap-[20px]" : "hidden"}>
                      <p>
                        Based on all the data you provided me, I have come to the conclusion to include graphs for
                        greater clarity and detail:
                      </p>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus perspiciatis deleniti
                        praesentium ea vitae culpa reprehenderit unde, magni harum fugit iste! Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit.
                        <br />
                        <br />
                        - Animi aperiam laboriosam in molestiae, necessitatibus
                        <br />- Possimus provident blanditiis nam non dolor, laudantium exercitationem officiis.
                      </p>
                      <div className="flex w-full flex-row">
                        <CostPlannedPie
                          heightValue={200}
                          colors={["#324411", "#561087"]}
                          chartsData={[
                            { name: "Planned", value: 400 },
                            { name: "Actual", value: 300 },
                          ]}
                        />
                        <ProgressBar iRadius={50} outRadius={70} heightValue={200} percentage={80} />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
            {selectedMainTabId === mainTabs[1].id && (
              <>
                {selecteActionTabId === actionTabs[0].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <HistogramChart />
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
                {selecteActionTabId === actionTabs[1].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <HistogramChart />
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
                {selecteActionTabId === actionTabs[2].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <HistogramChart />
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
                {selecteActionTabId === actionTabs[3].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <HistogramChart />
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
              </>
            )}
            {selectedMainTabId === mainTabs[2].id && (
              <>
                {selecteActionTabId === actionTabs[0].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <HistogramChart />
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
                {selecteActionTabId === actionTabs[1].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <HistogramChart />
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
                {selecteActionTabId === actionTabs[2].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <HistogramChart />
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
                {selecteActionTabId === actionTabs[3].id && (
                  <div className="flex flex-row justify-evenly gap-[20px] flex-wrap">
                    <HistogramChart />
                    <DotCharts />
                    <CostPlannedBarChart />
                    <LineChartCard
                      lineColor={"#f32145"}
                      lineFill={"#f3214550"}
                      lineDataInfo={[
                        { name: "Page A", value: 4000 },
                        { name: "Page B", value: 3000 },
                        { name: "Page C", value: 2000 },
                        { name: "Page D", value: 2780 },
                        { name: "Page E", value: 1890 },
                        { name: "Page F", value: 2390 },
                        { name: "Page G", value: 3490 },
                      ]}
                    />
                  </div>
                )}
              </>
            )}
            {selectedMainTabId === mainTabs[3].id && (
              <>
                {selecteActionTabId === actionTabs[0].id && (
                  <div className="flex flex-row w-full items-center justify-evenly gap-[20px] flex-wrap">
                    <div className="flex w-full px-[20px] flex-row justify-between">
                      <p className="w-[100px]">Task</p>
                      <p className="w-[50px]">Executors</p>
                      <p>Start Date</p>
                      <p>Finish Date</p>
                      <p>Progress</p>
                    </div>
                    <InitialTask />
                    <InitialTask />
                    <InitialTask />
                  </div>
                )}
                {selecteActionTabId === actionTabs[1].id && (
                  <div className="flex flex-row w-full items-center justify-evenly gap-[20px] flex-wrap">
                    <div className="flex w-full px-[20px] flex-row justify-between">
                      <p className="w-[100px]">Task</p>
                      <p className="w-[50px]">Executors</p>
                      <p>Start Date</p>
                      <p>Finish Date</p>
                      <p>Progress</p>
                    </div>
                    <InitialTask />
                    <InitialTask />
                    <InitialTask />
                  </div>
                )}
                {selecteActionTabId === actionTabs[2].id && (
                  <div className="flex flex-row w-full items-center justify-evenly gap-[20px] flex-wrap">
                    <div className="flex w-full px-[20px] flex-row justify-between">
                      <p className="w-[100px]">Task</p>
                      <p className="w-[50px]">Executors</p>
                      <p>Start Date</p>
                      <p>Finish Date</p>
                      <p>Progress</p>
                    </div>
                    <InitialTask />
                    <InitialTask />
                    <InitialTask />
                  </div>
                )}
                {selecteActionTabId === actionTabs[3].id && (
                  <div className="flex flex-row w-full items-center justify-evenly gap-[20px] flex-wrap">
                    <div className="flex w-full px-[20px] flex-row justify-between">
                      <p className="w-[100px]">Task</p>
                      <p className="w-[50px]">Executors</p>
                      <p>Start Date</p>
                      <p>Finish Date</p>
                      <p>Progress</p>
                    </div>
                    <InitialTask />
                    <InitialTask />
                    <InitialTask />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="fixed backdrop-blur-sm top-0 left-0 h-full w-full bg-black opacity-50 z10" />
      <div className={openAllChartInfo ? "visible opacity-100 transition-all" : "invisible opacity-0 transition-all"}>
        <AllChartDetail />
      </div>
    </>
  );
};

export default DetailChartsInfo;
