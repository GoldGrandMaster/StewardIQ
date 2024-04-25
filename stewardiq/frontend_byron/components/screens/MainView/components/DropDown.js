import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

export default function DropDown({ content }) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(content[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} onClick={() => setOpen(true)} className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className={`inline-flex w-full justify-center rounded-lg bg-white border ${
              open ? "border-[#6D3FF333]" : null
            } px-4 py-2 text-sm font-medium text-[#525865]  items-center`}
          >
            {state}
            {!open ? (
              <ChevronDownIcon className="text-[#5D626F] w-[16px] stroke-2 transition-all ml-1" />
            ) : (
              <ChevronUpIcon className="text-[#5D626F] w-[16px] stroke-2 transition-all ml-1" />
            )}
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
        >
          <Menu.Items
            className={`absolute right-0 mt-2 w-[82px] origin-top-right divide-y  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none`}
          >
            <div className="px-1 py-1 ">
              {content?.map((cont, index) => (
                <Menu.Item
                  onClick={() => {
                    setState(cont);
                    setOpen(false);
                  }}
                  key={index}
                >
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-200/35 text-black" : "text-[#8492A7]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm ${
                        index === 0 || index === 2 ? "bg-[#F7F8FA]" : null
                      }`}
                    >
                      {cont}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
