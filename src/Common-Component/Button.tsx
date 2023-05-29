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
  const activeStyles = isActive ? "bg-gray-600 text-white" : "";

  const handleClick = () => {
    onClick(tab.id);
  };

  return (
    <div>
      <a href={tab.link}></a>
    <button
      className={`px-3 py-2 rounded-md ${activeStyles}`}
      onClick={handleClick}
    >
      {tab.title}
    </button>
    </div>
  );
};
