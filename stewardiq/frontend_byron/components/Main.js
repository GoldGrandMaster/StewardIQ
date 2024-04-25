import React from "react";
import { Header } from "./Header";
import { useTab } from "@/hooks/useTab";
import MainView from "./screens/MainView";

const Main = () => {
  const { tab, setTab } = useTab();
  return (
    <div className="w-full min-h-screen overflow-y-auto scrollbar-hide">
      <Header />
      {tab === "Main View" ? <MainView /> : null}
    </div>
  );
};

export default Main;
