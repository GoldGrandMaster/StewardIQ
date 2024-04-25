"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { DetailedHTMLProps, ButtonHTMLAttributes, useState, useEffect } from "react";

import { usersData } from "@/components/data/usersInfo";
import { useLayoutContext } from "@/context/LayoutContext";
import { useCreateTaskContext } from "@/context/CreateTaskContext";

import NewTaskFrom from "@/components/ui/NewTaskForm";
import DetailChartsInfo from "@/components/ui/DetailChartsInfo";
import LineChartBg from "@/components/charts/LineChartBg";
import MainCharts from "@/components/ui/MainCharts";
import QuarterChart from "./charts/NewChart";
import { useLogInContext } from "@/context/LoginContext";
import { table } from "console";

const LineProgresBar = dynamic(() => import("@/components/charts/LineProgresBar"), { ssr: false });

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string | any;
  updateSaveStateOption?: boolean;
}

const ChartsComponent: React.FC = () => {
  const { getChartsDetailInfo, setOpenChartsInfo, openChartsDetailInfo } = useCreateTaskContext();
  const { openNewTaskForm, setOpenModalTaskWindow } = useLayoutContext();
  const {newDateValue, handleNewDateChange} = useLogInContext()
  const { taskCreated } = useCreateTaskContext();

  const [openRoadmap, setOpenRoadmap] = useState<boolean>(false);
  const [openIssuesAndRisk, setOpenIssuesAndRisk] = useState<boolean>(false);
  const [tableData,setTableData] = useState<any>([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/tasks/')
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [tableData]);

  const dataFirstChart = [
    { name: "Page A", value: 500 },
    { name: "Page B", value: 300 },
    { name: "Page C", value: 1200 },
    { name: "Page D", value: 2780 },
    { name: "Page E", value: 1890 },
    { name: "Page F", value: 2390 },
    { name: "Page G", value: 3490 },
  ];
  const dataSecondChart = [
    { name: "Page A", value: 300 },
    { name: "Page B", value: 100 },
    { name: "Page C", value: 800 },
    { name: "Page D", value: 1280 },
    { name: "Page E", value: 1490 },
    { name: "Page F", value: 1790 },
    { name: "Page G", value: 2010 },
  ];

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 12;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;

  const [data, setData] = useState<any>()

 const AddUpdateButton = ({ text, updateSaveStateOption, ...props }: ButtonProps) => {
    const [updateSaveState, setUpdateSaveState] = useState<boolean>(false);
    return (
      <button
        onClick={() => setUpdateSaveState(!updateSaveState)}
        {...props}
        className="bg-[#171717] hover:bg-opacity-40 transition-all capitalize px-[20px] py-[10px] rounded-[10px]"
      >
        {updateSaveStateOption ? <p>{updateSaveState ? "Save" : "Update"}</p> : <p>{text}</p>}
      </button>
    );
  };

  return (
    <div className="flex flex-col relative gap-[20px]">
      <div className="absolute h-full blur-sm top-0	 w-full z-0">
        <LineChartBg lineColor="#7d3f98" lineDataInfo={dataFirstChart} />
      </div>
      <div className="absolute h-full blur-sm top-0	w-full z-0">
        <LineChartBg lineColor="#f47721" lineDataInfo={dataSecondChart} />
      </div>
      <div className="flex items-center flex-col cursor-pointer z-10 hover:scale-[1.02] transition-all rounded-[10px] bg-white bg-opacity-20 py-[10px] px-[20px] justify-between">
        <div onClick={() => setOpenRoadmap(!openRoadmap)} className="flex flex-row w-full justify-between items-center">
          <p className="font-[600] text-[20px]">Roadmap</p>
          <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full">
            <Image
              width={20}
              className={
                openRoadmap
                  ? "h-auto duration-200 transition-all rotate-180 w-auto"
                  : "h-auto duration-200 transition-all w-auto"
              }
              height={20}
              alt="arrow-down"
              style={{ width: "20px", height: "20px" }}
              src={"/icons/down-arrow.png"}
            />
          </div>
        </div>

        <div
          className={
            openRoadmap
              ? "visible w-full z-0 transition-all duration-200 opacity-100"
              : "invisible h-0 duration-200 transition-all opacity-0"
          }
        >
          <div className="flex flex-row mt-[20px] items-end justify-end gap-[40px]">
            <select
              value={newDateValue}
              onChange={handleNewDateChange}
              className="[background-color:_transparent] border py-[10px] px-[20px] appearance-none rounded-[10px]"
            >
              <option>Date</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
            </select>
            <select
              value={newDateValue}
              onChange={handleNewDateChange}
              className="[background-color:_transparent] border py-[10px] px-[20px] appearance-none rounded-[10px]"
            >
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
            </select>
            <select
              value={newDateValue}
              onChange={handleNewDateChange}
              className="[background-color:_transparent] border py-[10px] px-[20px] appearance-none rounded-[10px]"
            >
              <option value="">Year</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <LineProgresBar />
        </div>
        </div>
{JSON.stringify(tableData)}
      <div className="flex flex-row z-10 gap-[20px] flex-wrap">
        <div className="w-full">
          <MainCharts
            onClick={() => {
              getChartsDetailInfo(1);
              setOpenChartsInfo(true);
            }}
            cost
            costName="Cost: Planned vs Actual"
            values={[57, 43, 0]}
          />
        </div>
        <div className="w-full">
          <MainCharts
            onClick={() => {
              getChartsDetailInfo(2);
              setOpenChartsInfo(true);
            }}
            resources
            resoursesName="Resource Run Rate, Availability, Cost"
            values={[50, 20, 30]}
          />
        </div>
        <div className="w-full">
          <MainCharts
            onClick={() => {
              getChartsDetailInfo(3);
              setOpenChartsInfo(true);
            }}
            timeline
            timelineName="Timeline: Planned vs Actual"
            values={[57, 43, 0]}
          />
        </div>
      </div>

      <div className="text-white z-10 bg-white bg-opacity-20 p-[20px] rounded-[20px] w-full flex flex-col gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-[30px] text-white font-[500]">Task List</h2>
          <AddUpdateButton onClick={() => setOpenModalTaskWindow(true)} text="add task" />
        </div>
        <div className="relative w-full max-w-[1000px] 2xl:max-w-[1600px] overflow-x-auto mt-[30px] sm:rounded-[5px]">
          <table className="border-[2px] border-[#ffffff30]">
            <thead className="text-[#fff]">
              <tr className="px-[10px]">
                <th className="w-[200px] py-[10px] rounded-tl-[6px] px-[30px] border-r border-b border-[#ffffff30]">
                  Description
                </th>
                <th className="w-[200px] py-[10px] px-[30px] border-r border-b border-[#ffffff30]">Resources</th>
                <th className="w-[200px] py-[10px] px-[30px] border-r border-b border-[#ffffff30]">Cost</th>
                <th className="w-[200px] py-[10px] px-[30px] border-r border-b border-[#ffffff30]">Priority</th>
                <th className="w-[200px] py-[10px] px-[30px] border-r border-b border-[#ffffff30]">Status</th>
                <th className="w-[200px] py-[10px] px-[30px] border-r border-b border-[#ffffff30]">Planned duration</th>
                <th className="w-[200px] py-[10px] px-[30px] border-r border-b border-[#ffffff30]">Actual duration</th>
                <th className="w-[200px] py-[10px] px-[30px] border-r border-b border-[#ffffff30]">Progress</th>
                <th className="w-[200px] py-[10px] px-[30px] text-start border-r border-b border-[#ffffff30]">
                  Planned start date
                </th>
                <th className="w-[200px] py-[10px] px-[30px] text-start border-r border-b border-[#ffffff30]">
                  Actual start date
                </th>
                <th className="w-[200px] py-[10px] rounded-tr-[6px] px-[30px] border-b border-[#ffffff30]">Action</th>
              </tr>
            </thead>
              <tbody>
                {JSON.stringify(tableData.response)}

              </tbody>
          </table>
        </div>
        <div
          className={
            openNewTaskForm ? "visible h-full opacity-100 transition-all" : "invisible opacity-0 transition-all"
          }
        >
          <NewTaskFrom />
        </div>
        <div
          className={
            openChartsDetailInfo ? "visible h-full opacity-100 transition-all" : "invisible opacity-0 transition-all"
          }
        >
          <DetailChartsInfo />
        </div>
      </div>
      <div
        className={
          openIssuesAndRisk
            ? "flex items-center flex-col cursor-pointer gap-[20px] z-10 transition-all rounded-[10px] bg-white bg-opacity-20 py-[10px] px-[20px] justify-between"
            : "flex items-center flex-col cursor-pointer gap-[20px] z-10 hover:scale-[1.02] transition-all rounded-[10px] bg-white bg-opacity-20 py-[10px] px-[20px] justify-between"
        }
      >
        <div
          onClick={() => setOpenIssuesAndRisk(!openIssuesAndRisk)}
          className="flex gap-[20px] flex-row w-full justify-between items-center"
        >
          <p className="font-[600] text-[20px]">Issues and Risk</p>
          <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full">
            <Image
              width={20}
              className={
                openIssuesAndRisk
                  ? "h-auto duration-200 transition-all rotate-180 w-auto"
                  : "h-auto duration-200 transition-all w-auto"
              }
              height={20}
              alt="arrow-down"
              style={{ width: "20px", height: "20px" }}
              src={"/icons/down-arrow.png"}
            />
          </div>
        </div>
        <div
          className={
            openIssuesAndRisk
              ? "visible w-full flex flex-row gap-[20px] flex-wrap transition-all duration-200 opacity-100 h-auto"
              : "invisible w-full flex flex-row gap-[20px] flex-wrap transition-all duration-200 opacity-0 h-[0px]"
          }
        >
          <div className="flex gap-[20px] w-full  md:max-w-[48%] rounded-[20px] p-[20px] text-white flex-col bg-black">
            <p className="text-[13px]">Jira</p>
            <div className="flex gap-[10px] flex-col items-start">
              <div className="flex flex-col justify-between items-start">
                <p className="text-[12px]">Risk Type</p>
                <p>Financial Risk</p>
              </div>
              <div className="flex flex-col justify-between items-start">
                <p className="text-[12px]">Description</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero, hic non vel nihil minus aliquam,
                  quasi ipsa officiis sint soluta.
                </p>
              </div>
              <div className="flex flex-col justify-between items-start">
                <p className="text-[12px]">Mitigation</p>
                <p>Risk reduction</p>
              </div>
              <div className="flex flex-col justify-between items-start">
                <p className="text-[12px]">Assigned To</p>
                <p>Responsible person</p>
              </div>
              <div className="flex flex-col justify-between items-start">
                <p className="text-[12px]">Due Date</p>
                <p>2022.02.12</p>
              </div>
            </div>
          </div>

          <div className="flex gap-[20px] w-full  md:max-w-[48%] rounded-[20px] p-[20px] text-white flex-col bg-black">
            <p className="text-[13px]">Jira</p>
            <div className="flex gap-[10px] flex-col items-start">
              <div className="flex flex-col justify-between items-start">
                <p className="text-[12px]">Risk Type</p>
                <p>Financial Risk</p>
              </div>
              <div className="flex flex-col justify-between items-start">
                <p className="text-[12px]">Description</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum distinctio voluptate iusto mollitia
                  officiis laudantium assumenda saepe. Magnam, necessitatibus? Ducimus doloribus doloremque eum rerum
                  pariatur temporibus veritatis quis! Voluptate.
                </p>
              </div>
              <div className="flex flex-col justify-between items-start">
                <p className="text-[12px]">Mitigation</p>
                <p>Risk reduction</p>
              </div>
              <div className="flex flex-col justify-between items-start">
                <p className="text-[12px]">Assigned To</p>
                <p>Responsible person</p>
              </div>
              <div className="flex flex-col justify-between items-start">
                <p className="text-[12px]">Due Date</p>
                <p>2022.02.12</p>
              </div>
            </div>
          </div>

          {/* If there is no Jira data */}
          {/* <div className="flex gap-[20px] py-[20px] w-full flex-row items-center">
            <div className="border-b border-white w-full" />
            <p className="whitespace-nowrap">If there is no Jira data</p>
            <div className="border-b border-white w-full" />
          </div> */}
          {/* If there is no Jira data */}

          {/* <div className="w-full z-20">
            <textarea
              placeholder="Text input here"
              rows={5}
              className="w-full border border-white px-[20px] py-[20px] placeholder:text-[#ffffff70] rounded-[10px] [background-color:_transparent]"
            ></textarea>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChartsComponent;
