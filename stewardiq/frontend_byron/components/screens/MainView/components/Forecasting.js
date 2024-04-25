import Image from "next/image";
import Progress from "./Progress";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Actual from "./Actual";

const Forecasting = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="py-3 px-4 border border-[#E8E8E8] w-full mt-10 rounded-lg">
        <div className="flex flex-row space-x-3">
          <Image src="/cpu.svg" alt="webgl" width={24} height={24} />
          <div className="font-sm font-normal text-[#525865]">
            AI Forecasting
          </div>
        </div>
        <div className="w-full h-1 px-4 border-b border-b-[#E8E8E8] my-4" />
        <div className="w-full flex justify-center items-center">
          <div className="bg-[#F7F8FA] w-full h-[120px] border rounded-lg border-[#E8E8E8] p-2">
            <textarea
              className="outline-none bg-inherit border-none w-full h-full placeholder:font-light"
              placeholder="Generate text ..."
            />
          </div>
        </div>

        <div className="flex justify-end items-end mt-4 mb-1">
          <button className="bg-[#6D3FF3] px-4 py-2 rounded-lg text-white">
            Generate
          </button>
        </div>
      </div>

      <div className="py-3 px-4 border border-[#E8E8E8] w-full mt-4 rounded-lg">
        <div className="flex flex-row space-x-3">
          <Image src="/gl.svg" alt="webgl" width={24} height={24} />
          <div className="font-sm font-normal text-[#525865]">
            Configure KPI
          </div>
        </div>

        <div className="w-full h-1 px-3 border-b borderb-[#E8E8E8] my-4" />

        <div className="w-full">
          <div className="w-full justify-between items-center flex flex-row mb-2">
            <div className="text-[#8492A7] text-sm font-normal flex flex-row items-center space-x-2">
              <div>Total</div>
              <div className="text-black"> Cost</div>
            </div>
            <div className="text-[#8492A7] text-sm font-normal">
              Planned vs Actual
            </div>
          </div>

          <div className="w-full justify-start items-start">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-[26px] text-black font-normal">
                123,436.10
              </div>
              <div className="text-[#176348] text-[10px] bg-[#CCF5E4] px-2 py-1 rounded-lg justify-center items-center flex h-fit">
                <ArrowUpIcon className="text-[#176348] w-[10px] mr-[2px]" />
                10%
              </div>
            </div>
          </div>

          <div className="mt-3">
            <Progress value={72} label="Planned" color="#6D3FF3" />
          </div>
          <div className="mt-3">
            <Actual value={34} label="Actual" color="#D4D5D7" />
          </div>
        </div>

        <div className="w-full h-1 px-3 border-b borderb-[#E8E8E8] my-4" />

        <div className="w-full mt-1">
          <div className="w-full justify-between items-center flex flex-row mb-2">
            <div className="text-[#8492A7] text-sm font-normal flex flex-row items-center space-x-2">
              <div>Total</div>
              <div className="text-black">
                Resource run rate, Availability, Cost
              </div>
            </div>
            <div className="text-[#8492A7] text-sm font-normal">
              {/* Planned vs Actual */}
            </div>
          </div>

          <div className="w-full justify-start items-start">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-[26px] text-black font-normal">
                320,214.01
              </div>
              <div className="text-[#176348] text-[10px] bg-[#CCF5E4] px-2 py-1 rounded-lg justify-center items-center flex h-fit">
                <ArrowUpIcon className="text-[#176348] w-[10px] mr-[2px]" />
                10%
              </div>
            </div>
          </div>

          <div className="mt-3">
            <Progress value={50} label="Resource" color="#6D3FF3" />
          </div>
          <div className="mt-3">
            <Progress value={30} label="Availability" color="#FEBA68" />
          </div>
          <div className="mt-3">
            <Progress value={20} label="Cost" color="#FD718A" />
          </div>
        </div>

        <div className="w-full h-1 px-3 border-b borderb-[#E8E8E8] my-4" />

        <div className="w-full mt-1 pb-3">
          <div className="w-full justify-between items-center flex flex-row mb-2">
            <div className="text-[#8492A7] text-sm font-normal flex flex-row items-center space-x-2">
              <div>Total</div>
              <div className="text-black">Timeline</div>
            </div>
            <div className="text-[#8492A7] text-sm font-normal">
              {/* Planned vs Actual */}
            </div>
          </div>

          <div className="w-full justify-start items-start">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-[26px] text-black font-normal">
                120,321.21
              </div>
              <div className="text-[#176348] text-[10px] bg-[#CCF5E4] px-2 py-1 rounded-lg justify-center items-center flex h-fit">
                <ArrowUpIcon className="text-[#176348] w-[10px] mr-[2px]" />
                10%
              </div>
            </div>
          </div>

          <div className="mt-3">
            <Progress value={50} label="Planned" color="#FD718A" />
          </div>
          <div className="mt-3">
            <Progress value={30} label="Actual" color="#FFDDC4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecasting;
