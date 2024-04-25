"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type StateProps = {
  chartsDisplay: boolean;
  chatGenAI: boolean;
  inputDisplay: boolean;
  openNewTaskForm: boolean;
  chatAnswer: any;
  screenSizeOut: any;
  setChartsDisplayPage: any;
  setChatGenAIOpen: any;
  setInputPage: any;
  setBotAnswer: any;
  setOpenModalTaskWindow: any;
};
const LayoutContext = createContext({} as StateProps);

const UseLayoutProvider = ({ children }: any) => {
  const [chartsDisplay, setChartsDisplay] = useState<boolean>(true);
  const [inputDisplay, setInputDisplay] = useState<boolean>(false);
  const [openNewTaskForm, setOpenNewTaskForm] = useState<boolean>(false);
  const [chatGenAI, setChatGenAI] = useState<boolean>(false);
  const [chatAnswer, setChatAnswer] = useState<any>();
  const [screenSizeOut, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const setChartsDisplayPage = (newState: boolean) => {
    setChartsDisplay(newState);
  };

  const setChatGenAIOpen = (newState: boolean) => {
    setChatGenAI(newState);
  };

  const setInputPage = (newState: boolean) => {
    setInputDisplay(newState);
  };

  const setBotAnswer = (value: any) => {
    setChatAnswer(value);
  };

  const setOpenModalTaskWindow = (newState: boolean) => {
    setOpenNewTaskForm(newState);
  };

  return (
    <LayoutContext.Provider
      value={{
        chartsDisplay,
        screenSizeOut,
        chatGenAI,
        inputDisplay,
        chatAnswer,
        openNewTaskForm,
        setChartsDisplayPage,
        setChatGenAIOpen,
        setInputPage,
        setBotAnswer,
        setOpenModalTaskWindow,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

const useLayoutContext = () => {
  return useContext(LayoutContext);
};

export { UseLayoutProvider, useLayoutContext };
