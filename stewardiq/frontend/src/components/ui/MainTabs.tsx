import React, { memo, useState } from "react";

interface ITab {
  id: string | number;
  label?: string | number;
}

interface ITabsProps {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick: (id: string | number) => void;
}

const MainTabsComponent: React.FC<ITabsProps> = ({ selectedId, tabs, onClick }) => {
  return (
    <div className="flex w-full lg:w-[150px] h-full flex-wrap justify-between flex-row rounded-t-[10px] lg:rounded-l-[10px] text-[15px] lg:justify-center bg-black-100 lg:gap-[20px] gap-[10px] py-[40px] px-[20px] lg:flex-col">
      {tabs &&
        tabs.map((tab) => (
          <div className="w-full" key={tab.id} onClick={() => onClick(tab.id)}>
            <button
              className={
                tab.id === selectedId
                  ? "text-center w-[50%] lg:w-[75%] px-[10px] border-l-[1px] border-white rounded-r-[10px] py-[10px] lg:py-[20px] transition-all text-black bg-gold"
                  : "text-center px-[10px] bg-white w-full rounded-r-[10px] py-[10px] lg:py-[20px] transition-all hover:bg-opacity-80 text-black"
              }
            >
              {tab.label}
            </button>
          </div>
        ))}
    </div>
  );
};

export const MainTabs = memo(MainTabsComponent);
