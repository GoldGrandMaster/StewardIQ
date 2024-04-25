import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Login } from "./icons/Login";

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 w-full mt-6">
      <div className="flex flex-row items-center space-x-3">
        <div>
          <Login />
        </div>

        <div>
          <Image
            className=""
            alt="user"
            src="/user.png"
            width={40}
            height={40}
          />
        </div>

        <div className="flex flex-col justify-start items-start">
          <div className="font-medium text-sm">Sophia Williams</div>
          <div className="text-[#8492A7] text-sm">Manager</div>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <div>
          <MagnifyingGlassIcon className="w-[28px]" />
        </div>
        <div>
          <BellIcon className="w-[28px]" />
        </div>
        {/* <div>
          <button className="bg-[#6D3FF3] px-4 py-2 rounded-lg text-white">
            Add Task
          </button>
        </div> */}
      </div>
    </div>
  );
};
