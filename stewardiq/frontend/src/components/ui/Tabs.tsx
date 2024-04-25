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

const TabsComponent: React.FC<ITabsProps> = ({ selectedId, tabs, onClick }) => {
  return (
    <div className="flex w-full flex-row text-[10px] lg:text-[15px] flex-wrap justify-center bg-black-100 lg:gap-[40px] gap-[10px] py-3 px-3 lg:flex-row">
      {tabs &&
        tabs.map((tab) => (
          <div key={tab.id} onClick={() => onClick(tab.id)}>
            <button
              className={
                tab.id === selectedId
                  ? "text-center px-[10px] rounded-[10px] py-[2px] transition-all text-black bg-gold"
                  : "text-center px-[10px] rounded-[10px] py-[5px] transition-all hover:bg-opacity-50 text-white"
              }
            >
              {tab.label}
            </button>
          </div>
        ))}
    </div>
  );
};

export const Tabs = memo(TabsComponent);
