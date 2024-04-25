"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type StateProps = {
  taskCreated: any;
  setNewTask: any;
  chartsInfo: any;
  getChartsDetailInfo: any;
  openChartsDetailInfo: boolean;
  setOpenChartsInfo: any;
  openAllChartInfo: boolean;
  setOpenAllCharts: any;
  programTask: any;
  handleProgramTask: any;
};

const CreateTaskContext = createContext({} as StateProps);

const UseCreateTaskProvider = ({ children }: any) => {
  const [taskCreated, setTaskCreated] = useState<any>("");
  const [chartsInfo, setChartsInfo] = useState<any>("");
  const [openChartsDetailInfo, setOpenChartsDetailInfo] = useState<boolean>(false);
  const [openAllChartInfo, setOpenAllChartInfo] = useState<boolean>(false);

  const [programTask, setProgramTask] = useState<string>("Program");

  const setNewTask = (value: any) => {
    setTaskCreated(value);
  };

  const getChartsDetailInfo = (value: any) => {
    setChartsInfo(value);
  };

  const setOpenChartsInfo = (value: boolean) => {
    setOpenChartsDetailInfo(value);
  };

  const setOpenAllCharts = (value: boolean) => {
    setOpenAllChartInfo(value);
  };

  const handleProgramTask = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProgramTask(event.target.value);
  };

  return (
    <CreateTaskContext.Provider
      value={{
        taskCreated,
        chartsInfo,
        openChartsDetailInfo,
        openAllChartInfo,
        programTask,

        setNewTask,
        getChartsDetailInfo,
        setOpenChartsInfo,
        setOpenAllCharts,
        handleProgramTask,
      }}
    >
      {children}
    </CreateTaskContext.Provider>
  );
};

const useCreateTaskContext = () => {
  return useContext(CreateTaskContext);
};

export { UseCreateTaskProvider, useCreateTaskContext };
