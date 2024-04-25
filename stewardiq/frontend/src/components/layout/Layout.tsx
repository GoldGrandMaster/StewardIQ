"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";

import { useLayoutContext } from "@/context/LayoutContext";
import { useCreateTaskContext } from "@/context/CreateTaskContext";

import ChartsComponent from "@/components/ChartsComponent";
import InputComponent from "@/components/InputComponent";
import ButtonAsideComponent from "@/components/ui/ButtonAsideComponent";
import ChatBotGenPage from "@/components/ChatBotGenComponent";

const CostPlannedPie = dynamic(() => import("@/components/charts/CostPlannedPie"), { ssr: false });

const Layout: React.FC = () => {
  const { chartsDisplay, inputDisplay, chatGenAI, setChartsDisplayPage, setChatGenAIOpen, setInputPage } =
    useLayoutContext();
  const { openChartsDetailInfo, programTask, handleProgramTask } = useCreateTaskContext();

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [openForecasting, setOpenForecasting] = useState<boolean>(true);

  const dummyDataCost = [
    { name: "Planned", value: 3400 },
    { name: "Actual", value: 1290 },
  ];

  const dummyDataResource = [
    { name: "Rate", value: 3400 },
    { name: "Availability", value: 1290 },
    { name: "Cost", value: 2190 },
  ];

  const dummyDataTimeline = [
    { name: "Planned", value: 2400 },
    { name: "Actual", value: 3090 },
  ];

  return (
    <section className="relative flex flex-col lg:flex-row w-full">
      <aside
        className={
          openChartsDetailInfo
            ? "w-0 transition-all"
            : openForecasting
            ? "w-0"
            : "bg-[#171717] sticky top-0 left-0 max-h-screen lg:flex hidden flex-col py-[20px] lg:h-auto xl:h-screen w-[250px]"
        }
      >
        <div className="px-[20px]">
          <h2 className={openForecasting ? "hidden" : "flex mb-[20px] text-white"}>Steward IQ</h2>
        </div>

        <div className="max-h-[500px] overflow-y-auto">
          <div
            className={
              openForecasting
                ? "absolute bg-gold opacity-80 z-50 flex items-end justify-end px-[10px] text-black rounded-[10px]  top-[70px] w-[50px] left-[-10px]"
                : "absolute bg-white z-50 flex items-center justify-center text-black rounded-r-[10px] top-[70px] w-[40px] right-[-40px]"
            }
          >
            <button onClick={() => setOpenForecasting(!openForecasting)}>{openForecasting ? "On" : "Off"}</button>
          </div>
          <div className="border-t !z-50 border-[#f1f1f150] py-[20px]">
            <div className="px-[20px] flex-col gap-[10px] flex w-full items-start">
              <ButtonAsideComponent
                onClick={() => {
                  setChartsDisplayPage(true);
                  setChatGenAIOpen(false);
                  setInputPage(false);
                }}
                isActive={chartsDisplay}
                text="Main View"
              />
              <ButtonAsideComponent
                onClick={() => {
                  setChartsDisplayPage(false);
                  setChatGenAIOpen(false);
                  setInputPage(true);
                }}
                isActive={inputDisplay}
                text="Roadmap"
              />
              <ButtonAsideComponent
                onClick={() => {
                  setChartsDisplayPage(false);
                  setChatGenAIOpen(true);
                  setInputPage(false);
                }}
                isActive={chatGenAI}
                text="Gen AI"
              />
            </div>
          </div>
          <div className="justify-end px-[20px] text-start items-start flex flex-col gap-[10px] h-[20vh]">
            <ButtonAsideComponent text="Settings" />
            <ButtonAsideComponent text="Log out" />
            <ButtonAsideComponent text="Admin" />
          </div>
        </div>
      </aside>
      <aside className="lg:hidden relative items-center bg-[#171717] py-[20px] px-[20px] flex flex-row justify-between gap-[40px]">
        <h2>Steward IQ</h2>
        <button onClick={() => setOpenMobileMenu(true)}>
          <Image
            priority
            style={{ width: "40px", height: "40px" }}
            alt="menu"
            src={"/image/drop-menu.png"}
            className="w-[40px] rounded-md  h-[40px]"
            width={40}
            height={40}
          />
        </button>
        <div
          className={
            openMobileMenu
              ? "absolute top-0 z-20 left-0 flex flex-col h-[500px] w-full visible duration-500 bg-[#191919] transition-all"
              : "absolute h-[0px] z-20 left-0 flex flex-col invisible w-full top-0 duration-500 transition-all"
          }
        >
          <div className="relative h-full">
            <div className="flex flex-row border-b px-[20px] border-white py-[20px] items-center justify-between">
              <div className="flex text-[15px] flex-col items-start">
                <h2 className="font-[700] text-white">Terri Jabali</h2>
                <p className="text-white opacity-50">Manager</p>
              </div>
              <div>
                <Image
                  priority
                  style={{ width: "40px", height: "40px" }}
                  alt="menu"
                  src={"/image/example-image.jpeg"}
                  className="w-[60px] rounded-full h-[40px]"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div
              className={
                openMobileMenu
                  ? "opacity-100 flex flex-col px-[30px] gap-[10px] py-[20px] duration-1000"
                  : "opacity-0 flex flex-col gap-[10px] px-[30px] py-[20px]"
              }
            >
              <ButtonAsideComponent
                onClick={() => {
                  setChartsDisplayPage(true);
                  setChatGenAIOpen(false);
                  setInputPage(false);
                }}
                isActive={chartsDisplay}
                text="Main View"
              />
              <ButtonAsideComponent
                onClick={() => {
                  setChartsDisplayPage(false);
                  setChatGenAIOpen(false);
                  setInputPage(true);
                }}
                isActive={inputDisplay}
                text="Roadmap"
              />
              <ButtonAsideComponent
                onClick={() => {
                  setChartsDisplayPage(false);
                  setChatGenAIOpen(true);
                  setInputPage(false);
                }}
                isActive={chatGenAI}
                text="Gen AI"
              />
              <div className="justify-end text-start items-start flex flex-col gap-[10px] h-[20vh]">
                <ButtonAsideComponent text="Settings" />
                <ButtonAsideComponent text="Log out" />
                <ButtonAsideComponent text="Admin" />
              </div>
            </div>
            <div className="absolute w-full bottom-0">
              <button
                onClick={() => setOpenMobileMenu(false)}
                className="bg-gold w-full py-[10px] rounded-t-[10px] bg-opacity-80 text-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div
        className={
          openMobileMenu
            ? "flex w-full flex-col blur-sm lg:max-h-[800px] overflow-y-auto"
            : "flex w-full flex-col lg:max-h-[800px] 2xl:max-h-[1300px] overflow-y-auto"
        }
      >
        <div className="bg-[#171717] lg:flex hidden gap-[20px] border-l-[2px] items-center justify-end border-black px-[40px] py-[10px]">
          <div>
            <Image
              priority
              style={{ width: "40px", height: "40px" }}
              alt="menu"
              src={"/image/example-image.jpeg"}
              className="w-[60px] rounded-full h-[40px]"
              width={40}
              height={40}
            />
          </div>
          <div className="flex text-[15px] flex-col items-end">
            <h2 className="font-[700] text-white">Terri Jabali</h2>
            <p className="text-white opacity-50">Manager</p>
          </div>
        </div>
        <div
          className={
            chartsDisplay
              ? "lg:px-[40px] bg-black text-white py-[40px] px-[20px] w-full"
              : "lg:px-[40px] bg-[#ffffff15] text-white py-[40px] px-[20px] w-full"
          }
        >
          <div className="flex flex-row items-center justify-between w-full">
            <h2 className="font-[600] text-[25px]">
              {chartsDisplay ? "Main View" : inputDisplay ? "Roadmap" : chatGenAI ? "Gen AI" : ""}
            </h2>

            {inputDisplay && (
              <>
                <select
                  value={programTask}
                  onChange={handleProgramTask}
                  className="[background-color:_transparent] cursor-pointer py-[10px] appearance-none px-[20px] w-[200px] rounded-[10px] border border-white"
                >
                  <option value="Program">Program</option>
                  <option value="Project">Project</option>
                </select>
              </>
            )}
          </div>
          <div className="mt-[50px]">
            {chartsDisplay && <ChartsComponent />}
            {inputDisplay && <InputComponent />}
            {chatGenAI && <ChatBotGenPage />}
          </div>
        </div>
      </div>

      <aside
        className={
          !openChartsDetailInfo
            ? "sticky top-0 right-0 z-20 w-[400px] flex-none overflow-y-hidden flex-col hidden lg:flex text-white duration-700 border-l border-[#ffffff30] visible h-full h-screen transition-all right-0 p-[40px] bg-[#171717]"
            : "hidden"
        }
      >
        <div className="flex flex-row gap-[30px] justify-between items-center">
          <h2 className="text-[20px] font-[700]">AI Forecasting</h2>
        </div>
        <div className="flex-col gap-[40px] h-screen max-h-screen overflow-y-auto">
          <div className="flex gap-[20px] items-center flex-col">
            <CostPlannedPie heightValue={200} colors={["#424411", "#961087"]} chartsData={dummyDataCost} />
            <p>Cost: Planned vs Actual</p>
          </div>
          <div className="flex gap-[20px] items-center flex-col">
            <CostPlannedPie
              heightValue={200}
              colors={["#874411", "#541087", "#814393"]}
              chartsData={dummyDataResource}
            />
            <p>Resource Run Rate, Availability, Cost</p>
          </div>
          <div className="flex gap-[20px] items-center flex-col">
            <CostPlannedPie heightValue={200} colors={["#660943", "#711387"]} chartsData={dummyDataTimeline} />
            <p>Timeline: Planned vs Actual</p>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Layout;
