import { useState } from "react";
import { TabNavItem } from "@/components/tabs/nav-item";
import { TabContent } from "@/components/tabs/content";
import { ExperienceDeails } from "./experience-details";
import { IntersectionObserverReference } from "./intersection-observer-reference";

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("company1");

  const containRef = IntersectionObserverReference(0.4);

  return (
    <section className="hidden experience-section" ref={containRef}>
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
