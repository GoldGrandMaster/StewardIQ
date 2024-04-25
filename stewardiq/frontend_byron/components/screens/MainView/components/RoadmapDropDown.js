import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { RoadmapIcon } from "@/components/icons/RoadmapIcon";
import { Program } from "@/components/icons/Program";
import Image from "next/image";

export default function RoadmapDropDown({}) {
  const [open, setOpen] = useState(false);

  const dropdownR = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownR.current && !dropdownR.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownR} onClick={() => setOpen(true)} className="w-full">
      <Menu as="div" className="relative inline-block text-left w-full">
        <div className="w-full">
          <Menu.Button className="w-full">
            <div
              className={`border ${
                open ? "border-[#6D3FF333]" : "border-[#E8E8E8]"
              } rounded-lg px-4 py-3 mt-4 w-full justify-between flex flex-row shadow-md`}
            >
              <div className="flex flex-row space-x-3 items-center">
                <RoadmapIcon color="#F3803F" />
                <div>Roadmap</div>
              </div>
              {!open ? (
                <ChevronDownIcon className="text-[#5D626F] w-[18px] stroke-2 transition-all ml-1" />
              ) : (
                <ChevronUpIcon className="text-[#5D626F] w-[18px] stroke-2 transition-all ml-1" />
              )}
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          className="w-full"
        >
          <Menu.Items
            className={`absolute right-0 mt-2 w-full origin-top-right divide-y z-50 rounded-md bg-white py-4 shadow-lg ring-1 ring-black/5 focus:outline-none`}
          >
            <div className="px-4 py-1 w-full flex justify-between flex-row items-center">
              <div className="font-medium text-base text-black">
                Project Values
              </div>
              <div className="font-medium text-base text-black flex flex-row items-center space-x-4">
                <button className="flex flex-row items-center rounded-lg space-x-3 px-2 py-2 border border-[#E8E8E8] shadow-sm">
                  <Program />
                  <span className="text-sm font-[#525865] font-medium">
                    Program
                  </span>
                  <ChevronDownIcon className="w-[16px] stroke-2 text-[#5D626F]" />
                </button>
                <button className="flex flex-row items-center rounded-lg space-x-3 px-2 py-2 border border-[#E8E8E8] shadow-sm">
                  <Program />
                  <span className="text-sm font-[#525865] font-medium">
                    Program
                  </span>
                  <ChevronDownIcon className="w-[16px] stroke-2 text-[#5D626F]" />
                </button>
              </div>
            </div>
            <div className="w-full h-1 border-b border-b-[#E8E8E8] my-4" />
            <div className="w-full relative">
              <Image
                src="/values.svg"
                alt="roadmap-img"
                width={300}
                height={200}
                className="w-full"
              />
              <Image
                src="/brown.svg"
                alt="roadmap-img"
                width={230}
                height={50}
                className=" absolute top-[72px] left-[265px]"
              />
              <Image
                src="/pink.svg"
                alt="roadmap-img"
                width={230}
                height={50}
                className=" absolute top-[120px] left-[490px]"
              />
              <Image
                src="/purple.svg"
                alt="roadmap-img"
                width={230}
                height={50}
                className=" absolute top-[170px] left-[265px]"
              />
              <Image
                src="/yellow.svg"
                alt="roadmap-img"
                width={230}
                height={50}
                className=" absolute top-[220px] left-[490px]"
              />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
