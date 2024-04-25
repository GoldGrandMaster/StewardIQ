import Image from "next/image";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import DropDown from "./DropDown";
import DropDown2 from "./DropDown2";

const DoughnutProgressBar = ({ percentage }) => {
  return (
    <div className="relative w-32 h-32">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full">
          <circle
            className="stroke-current stroke-2 text-gray-300"
            fill="transparent"
            cx="16"
            cy="16"
            r="14"
          />
          <circle
            className="stroke-current stroke-2 text-blue-500 top-0 absolute left-0"
            fill="transparent"
            cx="16"
            cy="16"
            r="14"
            style={{
              strokeDasharray: "88",
              strokeDashoffset: `${88 - percentage * 0.88}`,
            }}
          />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
        {percentage}%
      </div>
    </div>
  );
};

const Resource = () => {
  return (
    <div className="w-[50%] flex flex-col justify-center items-center px-4 my-4 border border-[#E8E8E8] rounded-lg py-3">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-row justify-center items-center space-x-3">
          <Image
            alt="money"
            src="/layer.svg"
            className=""
            width={22}
            height={22}
          />
          <div className="text-base font-medium text-[#525865]">
            Resource Run Rate, Availa. . .
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-2">
          <DropDown content={["Plan", "Plan", "Plan"]} />
          <DropDown2 content={["Actual", "Execute", "Close all KPIs"]} />
        </div>
      </div>
      <div className="w-full h-1 border-b border-b-[#E8E8E8] my-2" />

      <div className="relative w-full justify-start items-center flex my-4">
        <Image alt="money" src="/x.svg" className="" width={250} height={250} />
        <div className="absolute top-0 right-[80px] bg-[#FCDFB2] py-1 px-2 text-[#693D11] font-medium text-[10px] my-4 rounded-lg justify-start items-start">
          Still Progress
        </div>
        <div className="absolute bottom-0 right-[70px] flex flex-col items-start justify-start">
          <div className="flex flex-row justify-center items-center space-x-4">
            <div className="flex flex-row justify-center items-center">
              <div className="bg-[#FEBA68] w-[10px] h-[4px] mr-2"></div>
              <div className="text-[#8492A7] font-normal text-[16px]">
                Planned
              </div>
            </div>

            <div className="text-black font-normal text-sm ml-4">30%</div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-[30px]">
            <div className="flex flex-row justify-center items-center">
              <div className="bg-[#FD718A] w-[10px] h-[4px] mr-2"></div>
              <div className="text-[#8492A7] font-normal text-[16px]">
                Actual
              </div>
            </div>

            <div className="text-black font-normal text-sm ml-10">20%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
