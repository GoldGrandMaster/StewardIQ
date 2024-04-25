import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Risk = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-1 border border-[#E8E8E8] rounded-lg py-3">
      <div className="w-full flex justify-between items-center px-3">
        <div className="flex flex-row justify-center items-center space-x-3">
          <Image
            alt="money"
            src="/document.svg"
            className=""
            width={22}
            height={22}
          />
          <div className="text-base font-medium text-[#525865]">
            Issue and risk
          </div>
        </div>
        <div>
          <button className="shadow-sm px-4 py-2 border text-[#525865] rounded-lg flex items-center justify-center">
            Issue 1 <ChevronDownIcon className="w-[12px] ml-2" />
          </button>
        </div>
      </div>
      <div className="w-full px-3">
        <div className="w-full h-1 border-b border-b-[#E8E8E8] my-2" />
      </div>

      <div className="w-full flex flex-col justify-center items-center px-3 space-y-3">
        <div className="w-full flex justify-between items-center py-3 px-3 rounded-lg bg-[#F7F8FA]">
          <div className="text-[#8492A7] font-normal text-[14px] rounded-lg justify-start items-start">
            Issue Name
          </div>

          <div className="text-black font-normal text-[14px] rounded-lg justify-start items-start">
            Alexander
          </div>
        </div>
        <div className="w-full flex flex-col items-center py-2 px-3 rounded-lg bg-[#F7F8FA]">
          <div className="text-[#8492A7] text-sm font-normal w-full justify-strat items-center my-1">
            Description
          </div>

          <div className="text-[black] text-sm font-normal w-full justify-strat items-center">
            Lorem ipsum dolor sit amet consectetur. Augue cras mi sollicitudin
            lectus vitae risus
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-3 px-3 rounded-lg bg-[#F7F8FA]">
          <div className="text-[#8492A7] font-normal text-[14px] rounded-lg justify-start items-start">
            Issue Type
          </div>

          <div className="text-black font-normal text-[14px] rounded-lg justify-start items-start">
            Financial Risk
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-3 px-3 rounded-lg bg-[#F7F8FA]">
          <div className="text-[#8492A7] font-normal text-[14px] rounded-lg justify-start items-start">
            Steps
          </div>

          <div className="text-black font-normal text-[14px] rounded-lg justify-start items-start">
            Lorem ipsum dolor
          </div>
        </div>

        <div className="w-full flex justify-between items-center py-3 px-3 rounded-lg bg-[#F7F8FA]">
          <div className="text-[#8492A7] font-normal text-[14px] rounded-lg justify-start items-start">
            Assigned to
          </div>

          <div className="text-black font-normal text-[14px] rounded-lg justify-start items-start">
            Lorem ipsum dolor
          </div>
        </div>
        <div className="w-full flex justify-between items-center py-3 px-3 rounded-lg bg-[#F7F8FA]">
          <div className="text-[#8492A7] font-normal text-[14px] rounded-lg justify-start items-start">
            Due Date
          </div>

          <div className="text-black font-normal text-[14px] rounded-lg justify-start items-start">
            Dri 08 Mar, 2023
          </div>
        </div>

        <div className="w-full flex justify-between items-center py-3 px-3 rounded-lg bg-[#F7F8FA]">
          <div className="text-[#8492A7] font-normal text-[14px] rounded-lg justify-start items-start">
            Status
          </div>

          <div className="text-black font-medium text-[14px] rounded-lg justify-start items-start">
            <div className="text-[#176348] text-[10px] bg-[#CCF5E4] px-3 py-1 rounded-lg justify-center items-center flex h-fit">
              Open
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Risk;
