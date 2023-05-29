import React, { useState } from "react";
import { TabButton } from "../Common-Component/Button";

export type Tab = {
  id: number;
  title: string;
};

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs: Tab[] = [
    { id: 1, title: "DASHBOARD" },
    { id: 2, title: "DOCTOR SECTION" },
    { id: 3, title: "PATIENT SECTION" },
    { id: 4, title: "HOME" },
    { id: 5, title: "ABOUT US" },
  ];

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <header className="bg-gray-50">
      <nav className="flex justify-between items-center p-3 m-3">
        <div className="text-zinc-800 font-mono font-bold text-3xl ">
          Medical Care<span><img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/healthcare-1700690-1444722.png?f=avif&w=256"
            alt="" className="w-10 h-10 flex"
          /></span>
        </div>
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={tab.id === activeTab}
              onClick={handleTabClick}
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
