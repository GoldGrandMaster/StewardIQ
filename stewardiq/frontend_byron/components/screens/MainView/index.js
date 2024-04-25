import RoadmapC from "./components/RoadmapC";
import Cost from "./components/Cost";
import Resource from "./components/Resource";
import Timeline from "./components/Timeline";
import Risk from "./components/Risk";
import Forecasting from "./components/Forecasting";
import TaskList from "./components/TaskList";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const MainView = () => {
  return (
    <div className="w-full h-full px-5 flex flex-row justify-between space-x-4 overflow-y-auto scrollbar-hide max-h-screen">
      <div className="flex flex-col w-[75%] items-start">
        <div className="flex flex-row w-full justify-start items-center space-x-2 mt-4">
          <div className="flex flex-row items-center">
            <div className="text-sm text-[#8492A7] font-normal mr-1">Plan</div>
            <ChevronRightIcon className="w-[12px] text-[#5D626F]" />
          </div>
          <div className="flex flex-row items-center">
            <div className="text-sm text-[#8492A7] font-normal mr-1">
              Initiate
            </div>
            <ChevronRightIcon className="w-[12px] text-[#5D626F]" />
          </div>
          <div className="flex flex-row items-center">
            <div className="text-sm text-[#8492A7] font-normal mr-1">
              Execute
            </div>
            <ChevronRightIcon className="w-[12px] text-[#5D626F]" />
          </div>
          <div className="flex flex-row items-center">
            <div className="text-sm text-[#8492A7] font-normal mr-1">Close</div>
            <ChevronRightIcon className="w-[12px] text-[#5D626F]" />
          </div>
          <div className="flex flex-row items-center">
            <div className="text-sm text-[#8492A7] font-normal mr-1">Retro</div>
            <ChevronRightIcon className="w-[12px] text-[#5D626F]" />
          </div>
        </div>
        <RoadmapC />
        <div className="w-full flex flex-row justify-center items-center space-x-5">
          <Cost />
          <Resource />
        </div>
        <div className="w-full flex flex-row justify-center items-center space-x-5 mb-4">
          <Timeline />
        </div>
        <div className="w-full flex flex-row justify-center items-center space-x-5">
          <Risk />
        </div>
        <div className="flex w-full">
          <TaskList />
        </div>
      </div>
      <div className="w-[25%]">
        <Forecasting />
      </div>
    </div>
  );
};

export default MainView;
