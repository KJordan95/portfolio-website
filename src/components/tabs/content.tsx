import { TabContentInterface } from "../../pages/home/home";

export const TabContent = (props: TabContentInterface) => {
  return (
    <>
      {props.activeTab === props.id ? (
        <div className="tab-content">{props.children}</div>
      ) : null}
    </>
  );
};
