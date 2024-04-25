import { useTab } from "@/hooks/useTab";
import Logo from "./Logo";
import { HelpNSupport, MainTabs } from "@/constants";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Menu } from "./icons";
import { A } from "./icons/A";
import { Program } from "./icons/Program";
import { Note } from "./icons/Note";
import Image from "next/image";

const SideBar = () => {
  const { tab: currentTab, setTab } = useTab();

  return (
    <div className="min-h-screen w-[250px] border-r border-r-[#E8E8E8] flex flex-col justify-between items-center">
      <div className="w-full  px-4">
        <div className="my-6 mt-8">
          <Logo />
        </div>
        <div className="w-full h-1 border-b border-b-[#E8E8E8]" />

        <div className="text-[#8492A7] font-medium text-xs my-5">MAIN</div>

        <div className="flex w-full flex-col items-start justify-start space-y-0">
          <div
            onClick={() => setTab("Main View")}
            className={`w-full rounded-lg flex justify-between items-center p-3 hover:bg-[#F7F8FA] transition-all delay-75 duration-75 cursor-pointer ${
              currentTab === "Main View" ? "bg-[#F7F8FA]" : "bg-white"
            }`}
          >
            <div
              className={`font-medium text-sm flex flex-row items-center ${
                currentTab === "Main View" ? "text-black" : "text-[#525865]"
              }`}
            >
              <Menu active={currentTab === "Main View"} />
              <span className="ml-3">{"Main View"}</span>
            </div>
            <div>
              {currentTab === "Main View" ? (
                <ChevronRightIcon className="w-[12px] h-[12px] text-[#5D626F] stroke-2" />
              ) : null}
            </div>
          </div>
          <div className="flex flex-row w-full space-x-4">
            <div className="h-[160px] border-r border-r-[#E8E8E8]" />
            <div className="w-full my-3">
              <div
                onClick={() => setTab("Portfolio")}
                className={`w-full rounded-lg flex justify-between items-center p-3 hover:bg-[#F7F8FA] transition-all delay-75 duration-75 cursor-pointer ${
                  currentTab === "Portfolio" ? "bg-[#F7F8FA]" : "bg-white"
                }`}
              >
                <div
                  className={`font-medium text-sm flex flex-row items-center ${
                    currentTab === "Portfolio" ? "text-black" : "text-[#525865]"
                  }`}
                >
                  <A active={currentTab === "Portfolio"} />
                  <span className="ml-3">{"Portfolio"}</span>
                </div>
                <div>
                  {currentTab === "Portfolio" ? (
                    <ChevronRightIcon className="w-[12px] h-[12px] text-[#5D626F] stroke-2" />
                  ) : null}
                </div>
              </div>
              <div
                onClick={() => setTab("Program")}
                className={`w-full rounded-lg flex justify-between items-center p-3 hover:bg-[#F7F8FA] transition-all delay-75 duration-75 cursor-pointer ${
                  currentTab === "Program" ? "bg-[#F7F8FA]" : "bg-white"
                }`}
              >
                <div
                  className={`font-medium text-sm flex flex-row items-center ${
                    currentTab === "Program" ? "text-black" : "text-[#525865]"
                  }`}
                >
                  <Program active={currentTab === "Program"} />
                  <span className="ml-3">{"Program"}</span>
                </div>
                <div>
                  {currentTab === "Program" ? (
                    <ChevronRightIcon className="w-[12px] h-[12px] text-[#5D626F] stroke-2" />
                  ) : null}
                </div>
              </div>
              <div
                onClick={() => setTab("Project Task")}
                className={`w-full rounded-lg flex justify-between items-center p-3 hover:bg-[#F7F8FA] transition-all delay-75 duration-75 cursor-pointer ${
                  currentTab === "Project Task" ? "bg-[#F7F8FA]" : "bg-white"
                }`}
              >
                <div
                  className={`font-medium text-sm flex flex-row items-center ${
                    currentTab === "Project Task"
                      ? "text-black"
                      : "text-[#525865]"
                  }`}
                >
                  <Note active={currentTab === "Project Task"} />
                  <span className="ml-3">{"Project Task"}</span>
                </div>
                <div>
                  {currentTab === "Project Task" ? (
                    <ChevronRightIcon className="w-[12px] h-[12px] text-[#5D626F] stroke-2" />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {MainTabs.map((tab) => {
            const active = currentTab === tab.title;
            return (
              <div
                onClick={() => setTab(tab.title)}
                key={`${MainTabs.title}${Math.random()}`}
                className={`w-full rounded-lg flex justify-between items-center p-3 hover:bg-[#F7F8FA] transition-all delay-75 duration-75 cursor-pointer ${
                  currentTab === tab.title ? "bg-[#F7F8FA]" : "bg-white"
                }`}
              >
                <div
                  className={`font-medium text-sm flex flex-row items-center ${
                    currentTab === tab.title ? "text-black" : "text-[#525865]"
                  }`}
                >
                  <tab.icon active={active} />
                  <span className="ml-3">{tab.title}</span>
                </div>
                <div>
                  {currentTab === tab.title ? (
                    <ChevronRightIcon className="w-[12px] h-[12px] text-[#5D626F] stroke-2" />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-[#8492A7] font-medium text-xs my-5">
          HELP & SUPPORT
        </div>

        <div className="flex w-full flex-col items-start justify-start space-y-1">
          {HelpNSupport.map((tab) => {
            const active = currentTab === tab.title;
            return (
              <div
                onClick={() => setTab(tab.title)}
                key={`${MainTabs.title}${Math.random()}`}
                className={`w-full rounded-lg flex justify-between items-center p-3 hover:bg-[#F7F8FA] transition-all delay-75 duration-75 cursor-pointer ${
                  currentTab === tab.title ? "bg-[#F7F8FA]" : "bg-white"
                }`}
              >
                <div
                  className={`font-medium text-sm flex flex-row items-center ${
                    currentTab === tab.title ? "text-black" : "text-[#525865]"
                  }`}
                >
                  <tab.icon active={active} />
                  <span className="ml-3">{tab.title}</span>
                </div>
                <div>
                  {currentTab === tab.title ? (
                    <ChevronRightIcon className="w-[12px] h-[12px] text-[#5D626F] stroke-2" />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full px-4 mb-5">
        <div className="w-full border-b border-b-[#E8E8E8] my-4" />
        <div className="w-full flex flex-row justify-between items-center space-x-5">
          <div className="w-full flex flex-row justify-center items-center space-x-3">
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
              <div className="font-medium text-sm whitespace-nowrap">
                Sophia Williams
              </div>
              <div className="text-[#8492A7] text-sm whitespace-nowrap">
                Manager
              </div>
            </div>
          </div>
          <ChevronRightIcon className="w-[16px] stroke-2 text-[#5D626F]" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
