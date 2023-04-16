interface TabNavItemInterface {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const TabNavItem = (props: TabNavItemInterface) => {
  const handleClick = () => {
    props.setActiveTab(props.id);
  };

  return (
    <button
      onClick={handleClick}
      className={
        props.activeTab === props.id
          ? "company-button active"
          : "company-button"
      }
      aria-selected={props.activeTab === props.id ? "true" : "false"}
    >
      {props.title}
    </button>
  );
};
