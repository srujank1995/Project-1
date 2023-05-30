import { NavLink } from "react-router-dom";
import { Tab } from "../Header/Header";

type TabButtonProps = {
  tab: Tab;
  isActive: boolean;
  onClick: (tabId: number) => void;
  link: string;
};

export const TabButton: React.FC<TabButtonProps> = ({
  link,
  tab,
  isActive,
  onClick,
}) => {
  const activeStyles = isActive ? "bg-red-600 text-white" : "";

  const handleClick = () => {
    onClick(tab.id);
  };

  return (
    <div>
      <NavLink to={link} className={`px-3 py-2 rounded-md ${activeStyles}`}>
      <button
        
        onClick={handleClick}
      >
        {tab.title}
      </button>
      </NavLink>
      
    </div>
  );
};
