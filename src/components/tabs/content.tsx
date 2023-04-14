import { TabContentInterface } from "../../pages/home/home";

export const TabContent = (props: TabContentInterface) => {
  return (
    <>
      {/* {props.activeTab === props.id ? (
        <div className="experience-description">{props.children}</div>
      ) : null} */}
      <div
        className="experience-description"
        style={
          props.activeTab === props.id
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        {props.children}
      </div>
    </>
  );
};
