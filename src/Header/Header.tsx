import React, { useState } from "react";
import { TabButton } from "../Common-Component/Button";

export type Tab = {
  id: number;
  title: string;
  link: string;
};

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs: Tab[] = [
    { id: 1, title: "HOME", link: "http://localhost:3000/Home" },
    { id: 2, title: "LOGIN", link: "http://localhost:3000/Dashboard" },
    { id: 3, title: "DOCTOR SECTION", link: "http://localhost:3000/Doctor" },
    { id: 4, title: "PATIENT SECTION", link: "http://localhost:3000/Patient" },
    { id: 5, title: "ABOUT US", link: "http://localhost:3000/About" },
  ];

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <header className="bg-opacity-30 bg-red-400 bg-gradient-to-tr">
      <nav className="flex justify-between items-center p-3 m-3">
        <div className="text-stone-950 font-mono font-extrabold text-3xl ">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/healthcare-1700690-1444722.png?f=avif&w=256"
            alt="No img"
            className="w-10 h-10 inline"
          />
          <a className="" href="https//www.google.com ">
            {" "}
            Medical Care
          </a>
        </div>
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              link={tab.link}
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
