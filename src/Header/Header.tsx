import React, { useState } from "react";
import { TabButton } from "../Common-Component/Button";
import { useSelector } from "react-redux";
import { tab } from "@testing-library/user-event/dist/tab";

export type Tab = {
  id: number;
  title: string;
  link: string;
};

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs: Tab[] = [
    { id: 1, title: "HOME", link: "http://localhost:3000/Home" },
    { id: 2, title: "LOGIN", link: "http://localhost:3000/Login" },
    { id: 3, title: "ABOUT US", link: "http://localhost:3000/About" },
  ];

  const admintabs: Tab[] = [
    { id: 1, title: "PROFILE", link: "/admin/profile" },
    { id: 2, title: "BOOK APPOINTMENT", link: "/admin/bookappointment" },
    { id: 3, title: "SET APPOINTMENT", link: "/admin/setappointment" },
  ];
  const usertabs: Tab[] = [
    { id: 1, title: "PROFILE", link: "/user/profile" },
    { id: 2, title: "BOOK APPOINTMENT", link: "/user/bookappointment" },
    { id: 3, title: "SET APPOINTMENT", link: "/user/setappointment" },
  ];

  const {userData} = useSelector((state:any) => state.User)
  
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
