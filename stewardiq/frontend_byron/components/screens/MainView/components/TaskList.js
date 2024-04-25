import Image from "next/image";
import React from "react";

const TaskList = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center border border-[#E8E8E8] rounded-lg pt-3 my-4">
      <div className="w-full flex justify-between items-center px-3">
        <div className="flex flex-row justify-center items-center space-x-3">
          <Image
            alt="money"
            src="/note.svg"
            className=""
            width={22}
            height={22}
          />
          <div className="text-base font-medium text-[#525865]">Task List</div>
        </div>
        <div>
          <div>
            <button className="bg-[#6D3FF3] px-4 py-2 rounded-lg text-white">
              Add Task
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-1 border-b border-b-[#E8E8E8] my-2 mb-4 px-3" />
      <div className="w-full flex justify-start flex-col items-start text-left px-3">
        <div className="text-base font-medium text-black">WBS Name Group</div>
        <div className="text-[#8492A7] text-sm font-normal my-2">Task name</div>
        <div className="text-[#525865] text-sm font-normal">
          Lorem ipsum dolor sit amet consectetur.
        </div>
      </div>

      <table className="border-t border-t-[#E8E8E8] w-full px-3 mt-4">
        <thead>
          <tr className="w-full h-[36px] border-b border-b-[#E8E8E8]">
            <th className="font-normal text-[12px] border-r border-r-[#E8E8E8] text-[#8492A7]">
              <div className="w-[20px] h-full justify-start flex items-start pl-3">
                Description
              </div>
            </th>
            <th className="font-normal text-[12px] border-r border-r-[#E8E8E8] text-[#8492A7]">
              <div className="w-[20px] h-full justify-start flex items-start pr-10 pl-3">
                Resources
              </div>
            </th>
            <th className="font-normal text-[12px] border-r border-r-[#E8E8E8] text-[#8492A7]">
              Cost
            </th>
            <th className="font-normal text-[12px] w-[65px] border-r border-r-[#E8E8E8] text-[#8492A7]">
              <div className="w-[20px] h-full justify-start flex items-start pr-10 pl-3">
                Priority
              </div>
            </th>
            <th className="font-normal text-[12px] border-r border-r-[#E8E8E8] text-[#8492A7]">
              <div className="w-[20px] h-full justify-start flex items-start pr-4 pl-3">
                Status
              </div>
            </th>
            <th className="font-normal text-[12px] border-r border-r-[#E8E8E8] text-[#8492A7]">
              Planned duration
            </th>
            <th className="font-normal text-[12px] border-r border-r-[#E8E8E8] text-[#8492A7] px-2">
              Actual duration
            </th>
            <th className="font-normal text-[12px] border-r border-r-[#E8E8E8] text-[#8492A7]">
              Progress
            </th>
            <th className="font-normal text-[12px] border-r border-r-[#E8E8E8] text-[#8492A7] break-words px-2">
              Planned start date
            </th>
            <th className="font-normal text-[12px] border-r border-r-[#E8E8E8] text-[#8492A7] px-2 break-words">
              Actual start date
            </th>
            <th className="font-normal text-[12px] text-[#8492A7]">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-b border-r-[#E8E8E8] border-b-[#E8E8E8] w-[138px]">
              Lorem ipsum dolor sit amet
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-b border-r-[#E8E8E8] border-b-[#E8E8E8] w-[90px]">
              www.com
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-b border-r-[#E8E8E8] border-b-[#E8E8E8] w-[49px]">
              12.3K
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-medium border-r border-b border-r-[#E8E8E8] border-b-[#E8E8E8] w-[65px]">
              <div className="flex mx-auto">
                <span className="bg-[#F9C8D2] text-[#710E21] rounded-sm py-1 px-2 mx-auto">
                  Priority
                </span>
              </div>
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-medium border-r border-b border-r-[#E8E8E8] border-b-[#E8E8E8] w-[64px]">
              <div className="flex mx-auto">
                <span className="bg-[#CCF5E4] text-[#176348] rounded-sm py-1 px-2 mx-auto">
                  Confirm
                </span>
              </div>
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-b border-r-[#E8E8E8] border-b-[#E8E8E8] w-[62px] whitespace-nowrap">
              23 days
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-b border-r-[#E8E8E8] border-b-[#E8E8E8] w-[61px] whitespace-nowrap">
              58 hours
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-b border-r-[#E8E8E8] border-b-[#E8E8E8] w-[62px] mx-auto">
              <div className="mx-auto flex pl-4">34%</div>
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-b border-r-[#E8E8E8] border-b-[#E8E8E8] w-[65px]">
              24 May
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-b border-r-[#E8E8E8] border-b-[#E8E8E8] w-[65px]">
              16 May
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal  border-b border-b-[#E8E8E8] w-[59px]">
              <div className="mx-auto flex">
                <button className="shadow-sm border rounded-lg px-3 py-1.5 border-[#E9E9E9] font-medium mx-auto">
                  Button
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-r-[#E8E8E8] w-[138px]">
              Lorem ipsum dolor sit amet
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-r-[#E8E8E8] w-[90px]">
              www.com
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-r-[#E8E8E8] w-[49px]">
              12.3K
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-medium border-r border-r-[#E8E8E8] w-[65px]">
              <div className="flex mx-auto">
                <span className="bg-[#F9C8D2] text-[#710E21] rounded-sm py-1 px-2 mx-auto">
                  Priority
                </span>
              </div>
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-medium border-r border-r-[#E8E8E8] w-[64px]">
              <div className="flex mx-auto">
                <span className="bg-[#CCF5E4] text-[#176348] rounded-sm py-1 px-2 mx-auto">
                  Confirm
                </span>
              </div>
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-r-[#E8E8E8] w-[62px] whitespace-nowrap">
              23 days
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-r-[#E8E8E8] w-[61px] whitespace-nowrap">
              58 hours
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-r-[#E8E8E8] w-[62px] mx-auto">
              <div className="mx-auto flex pl-4">34%</div>
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-r-[#E8E8E8] w-[65px]">
              24 May
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal border-r border-r-[#E8E8E8] w-[65px]">
              16 May
            </td>
            <td className="text-[12px] px-3 py-1.5 text-[#080808] font-normal w-[59px]">
              <div className="mx-auto flex">
                <button className="shadow-sm border rounded-lg px-3 py-1.5 border-[#E9E9E9] font-medium mx-auto">
                  Button
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
