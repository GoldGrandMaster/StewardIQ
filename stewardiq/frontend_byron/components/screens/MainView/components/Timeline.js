import Image from "next/image";
import DropDown from "./DropDown";
import DropDown2 from "./DropDown2";
import BarProgress from "./BarProgress";

const Timeline = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center px-4 border border-[#E8E8E8] rounded-lg py-3 relative">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-row justify-center items-center space-x-3">
          <Image
            alt="money"
            src="/calendar.svg"
            className=""
            width={22}
            height={22}
          />
          <div className="text-base font-medium text-[#525865]">Timeline</div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-2">
          <DropDown content={["Plan", "Plan", "Plan"]} />
          <DropDown2 content={["Actual", "Execute", "Close all KPIs"]} />
        </div>
      </div>
      <div className="w-full h-1 border-b border-b-[#E8E8E8] mt-2 mb-0" />
      <div className="w-full flex justify-start items-start absolute bottom-[18%] left-5">
        <div className="bg-[#CCF5E4] py-1 px-3 text-[#176348] font-medium text-[10px] my-4 rounded-lg justify-start items-start">
          Confirmed
        </div>
      </div>

      <div className="relative w-full justify-end items-end flex flex-col">
        <div className="flex flex-row w-full justify-end items-end mt-5 space-x-6">
          <BarProgress
            label="Planned"
            value={40}
            color="#FD718A"
            date="Fri 08"
            background="#FD718A1A"
          />
          <BarProgress
            label="Actual"
            value={30}
            color="#FEBA68"
            date="Sat 09"
            background="#FEBA681A"
          />
          <BarProgress
            label="Planned"
            value={35}
            color="#FD718A"
            date="Sun 10"
            background="#FD718A1A"
          />
          <BarProgress
            label="Actual"
            value={45}
            color="#FEBA68"
            date="Mon 11"
            background="#FEBA681A"
          />

          <BarProgress
            label="Planned"
            value={35}
            color="#FD718A"
            date="Sun 10"
            background="#FD718A1A"
          />
          <BarProgress
            label="Actual"
            value={45}
            color="#FEBA68"
            date="Mon 11"
            background="#FEBA681A"
          />
          <BarProgress
            label="Planned"
            value={35}
            color="#FD718A"
            date="Sun 10"
            background="#FD718A1A"
          />
          <BarProgress
            label="Actual"
            value={45}
            color="#FEBA68"
            date="Mon 11"
            background="#FEBA681A"
          />
          <BarProgress
            label="Planned"
            value={35}
            color="#FD718A"
            date="Sun 10"
            background="#FD718A1A"
          />
          <BarProgress
            label="Actual"
            value={45}
            color="#FEBA68"
            date="Mon 11"
            background="#FEBA681A"
          />
        </div>

        <div className="w-full h-1 border-b border-b-[#E8E8E8] my-6 mt-8 pt-10" />

        <div className="w-full flex justify-between items-center">
          <div className="flex flex-row justify-center items-center space-x-4">
            <div className="flex flex-row justify-center items-center">
              <div className="bg-[#FD718A] w-[10px] h-[4px] mr-2"></div>
              <div className="text-[#8492A7] font-normal text-sm">Planned</div>
            </div>

            <div className="text-black font-normal text-sm">57%</div>
          </div>
          <div className="flex flex-row justify-center items-center space-x-4">
            <div className="flex flex-row justify-center items-center">
              <div className="bg-[#FFDDC4] w-[10px] h-[4px] mr-2"></div>
              <div className="text-[#8492A7] font-normal text-sm">Actual</div>
            </div>

            <div className="text-black font-normal text-sm">43%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
