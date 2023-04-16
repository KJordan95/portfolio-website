import { useCallback, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { TabNavItem } from "@/components/tabs/nav-item";
import { TabContent } from "@/components/tabs/content";
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
        <div className="company">
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
        <div className="experience-container">
          <TabContent id={"company1"} activeTab={activeTab}>
            <ExperienceDeails />
          </TabContent>
          <TabContent id={"company2"} activeTab={activeTab}>
            <p>Tab2 Works</p>
          </TabContent>
        </div>
      </div>
    </section>
  );
};
