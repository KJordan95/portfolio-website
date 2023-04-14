import { TabNavItemInterface } from "../../pages/home/home";

export const TabNavItem = (props: TabNavItemInterface) => {
  const handleClick = () => {
    props.setActiveTab(props.id);
  };

  return (
    <button
      onClick={handleClick}
      className={props.activeTab === props.id ? "active" : ""}
    >
      {props.title}
    </button>
  );
};
