import { Children, useCallback, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { TabNavItem } from "../../components/tabs/nav-item";
import { TabContent } from "../../components/tabs/content";
import { ExperienceDeails } from "./experience-details";

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("company1");

  const containRef = useRef();
  const { ref: inViewRef } = useInView({
    threshold: 0.75,
    onChange(inView, entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    },
  });

  const setRefs = useCallback(
    (node: any) => {
      containRef.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <section className="hidden experience-section" ref={setRefs}>
      <h2>Work Experience</h2>
      <div className="experiences">
        <div className="company" role="tablist">
          <TabNavItem
            id={"company1"}
            title={"Company1"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          ></TabNavItem>
          <TabNavItem
            id={"company2"}
            title={"Company2"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          ></TabNavItem>
        </div>
        <TabContent id={"company1"} activeTab={activeTab}>
          <ExperienceDeails />
        </TabContent>
        <TabContent id={"company2"} activeTab={activeTab}>
          <p>Tab2 Works</p>
        </TabContent>
      </div>
      {/* <div className="experiences">
        <div className="company" role="tablist">
          <button
            className="company-button"
            role="tab"
            aria-selected="false"
            tabIndex={0}
          >
            Company1
          </button>
          <button
            className="company-button"
            role="tab"
            aria-selected="false"
            tabIndex={-1}
          >
            Company2
          </button>
          <button
            className="company-button"
            role="tab"
            aria-selected="false"
            tabIndex={-1}
          >
            Company3
          </button>
        </div>
        <div className="experience-description" role="tabpanel" tabIndex={0}>
          description1
        </div>
        <div className="experience-description" role="tabpanel" tabIndex={0}>
          description2
        </div>
        <div className="experience-description" role="tabpanel" tabIndex={0}>
          description3
        </div>
      </div> */}
    </section>
  );
};
