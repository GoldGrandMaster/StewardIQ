import Image from "next/image";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import DropDown from "./DropDown";
import DropDown2 from "./DropDown2";

const Cost = () => {
  return (
    <div className="w-[50%] flex flex-col justify-center items-center px-4 my-4 border border-[#E8E8E8] rounded-lg py-3">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-row justify-center items-center space-x-3">
          <Image
            alt="money"
            src="/money.png"
            className=""
            width={22}
            height={22}
          />
          <div className="text-base font-medium text-[#525865]">Cost</div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-2">
          <DropDown content={["Plan", "Plan", "Plan"]} />
          <DropDown2 content={["Actual", "Execute", "Close all KPIs"]} />
        </div>
      </div>
      <div className="w-full h-1 border-b border-b-[#E8E8E8] my-2" />
      <div className="w-full flex justify-start items-start">
        <div className="bg-[#CCF5E4] py-1 px-3 text-[#176348] font-medium text-[10px] my-4 rounded-lg justify-start items-start">
          Confirmed
        </div>
      </div>

      <div className="relative w-full justify-center items-center flex">
        <div className="half-circle" />
        <div className="absolute bottom-0">
          <SemiCircleProgressBar
            className="w-full h-full"
            percentage={57}
            showPercentValue={false}
            stroke="#6D3FF3"
            background="#f3f4f6"
            diameter={300}
            strokeWidth={18}
          />
        </div>
        <div className="absolute bottom-[5%] flex flex-col justify-center items-center space-y-4">
          <div className="bg-[#F7F8FA] p-1 rounded-lg w-[34px]">
            <Image
              src="/graph.svg"
              alt="graph"
              className=""
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-[#8492A7] text-xs">Dynamics today</div>
            <div className="text-black text-[20px] font-medium">57%</div>
          </div>
        </div>

        <div className="absolute text-xs text-[#8492A7] left-7 bottom-0">
          0%
        </div>
        <div className="absolute text-xs text-[#8492A7] right-4 bottom-0">
          100%
        </div>
      </div>
      <div className="w-full h-1 border-b border-b-[#E8E8E8] my-4" />

      <div className="w-full flex justify-between items-center">
        <div className="flex flex-row justify-center items-center space-x-4">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-[#6D3FF3] w-[10px] h-[4px] mr-2"></div>
            <div className="text-[#8492A7] font-normal text-sm">Planned</div>
          </div>

          <div className="text-black font-normal text-sm">57%</div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-4">
          <div className="flex flex-row justify-center items-center">
            <div className="bg-[#6D3FF3] w-[10px] h-[4px] mr-2"></div>
            <div className="text-[#8492A7] font-normal text-sm">Actual</div>
          </div>

          <div className="text-black font-normal text-sm">43%</div>
        </div>
      </div>
    </div>
  );
};

export default Cost;
