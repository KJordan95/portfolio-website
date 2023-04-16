import { TabContentInterface } from "../../pages/home/home";

export const TabContent = (props: TabContentInterface) => {
  return props.activeTab === props.id ? (
    <>
      <div
        className="experience-description"
        tabIndex={props.activeTab === props.id ? 0 : -1}
      >
        {props.children}
      </div>
    </>
  ) : null;
};
