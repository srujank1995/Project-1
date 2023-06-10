import React, { useState } from "react";
import { TabButton } from "../Common-Component/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SaveUser } from "../mainStore/UserStore/User.store";

export type Tab = {
  id: number;
  title: string;
  link: string;
};

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout =() =>{
    dispatch(SaveUser({}))
    navigate('/')
  }
  const admintabs: Tab[] = [
    { id: 1, title: "DASHBOARD", link: "/admin/" },
    { id: 2, title: "DOCTOR SECTION", link: "/admin/Doctor" },
    { id: 3, title: "PATIENT SECTION", link: "/admin/Patient" },
  ];
  const usertabs: Tab[] = [
    { id: 1, title: "PROFILE", link: "/user/profile" },
    { id: 2, title: "MY APPOINTMENT", link: "/user/bookappointment" },
    { id: 3, title: "BOOK APPOINTMENT", link: "/user/setappointment" },
  ];
  const Doctabs: Tab[] = [
    { id: 1, title: "PROFILE", link: "/Doctor" },
    { id: 2, title: "MY APPOINTMENT", link: "/Doctor/bookappointment" },
    { id: 3, title: "BOOk APPOINTMENT", link: "/Doctor/setappointment" },
  ];
  const { userData } = useSelector((state: any) => state.User);
  const MainTab =
    userData.type === "user"
      ? usertabs
      : userData.type === "admin"
      ? admintabs
      : Doctabs;
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
         
            {MainTab.map((tab) => (
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
      <button onClick={Logout}>LOGOUT</button>
    </header>
  );
};

export default Header;
