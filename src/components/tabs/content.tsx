import { TabContentInterface } from "../../pages/home/home";

export const TabContent = (props: TabContentInterface) => {
  return (
    <>
      <div
        className="experience-description"
        style={
          props.activeTab === props.id
            ? { display: "block" }
            : { display: "none" }
        }
        tabIndex={props.activeTab === props.id ? 0 : -1}
      >
        {props.children}
      </div>
    </>
  );
};
