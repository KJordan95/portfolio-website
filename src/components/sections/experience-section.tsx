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
            <ExperienceDeails
              title={"Role"}
              company={"Company"}
              dateRange={"StartDate -EndDate"}
            >
              <ul>
                <li>Bullet 1</li>
                <li>Bullet 2</li>
                <li>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Vitae congue mauris rhoncus aenean vel elit scelerisque.
                  Faucibus purus in massa tempor. Nascetur ridiculus mus mauris
                  vitae ultricies. Augue lacus viverra vitae congue eu.
                  Consectetur adipiscing elit ut aliquam purus. Tincidunt arcu
                  non sodales neque. Risus quis varius quam quisque id diam vel
                  quam elementum. Quis eleifend quam adipiscing vitae proin
                  sagittis nisl. Metus aliquam eleifend mi in nulla posuere.
                  Ipsum faucibus vitae aliquet nec ullamcorper sit. Pharetra
                  massa massa ultricies mi quis hendrerit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Vitae congue
                  mauris rhoncus aenean vel elit scelerisque. Faucibus purus in
                  massa tempor. Nascetur ridiculus mus mauris vitae ultricies.
                  Augue lacus viverra vitae congue eu. Consectetur adipiscing
                  elit ut aliquam purus. Tincidunt arcu non sodales neque. Risus
                  quis varius quam quisque id diam vel quam elementum. Quis
                  eleifend quam adipiscing vitae proin sagittis nisl. Metus
                  aliquam eleifend mi in nulla posuere. Ipsum faucibus vitae
                  aliquet nec ullamcorper sit. Pharetra massa massa ultricies mi
                  quis hendrerit.";
                </li>
                <li>Bullet 4</li>
              </ul>
            </ExperienceDeails>
          </TabContent>
          <TabContent id={"company2"} activeTab={activeTab}>
            <ExperienceDeails
              title={"Inventory Associate"}
              company={"WIS International"}
              dateRange={"MAY 2018 - JUNE 2021"}
            >
              <ul>
                <li>
                  Monitored inventory levels and identified discrepancies,
                  ensuring accuracy of stock data
                </li>
                <li>
                  Inspected supplies and product inventories to assess quality
                  and quantity, returning unsuitable materials to vendors
                </li>
                <li>Trained 30+ employees on equipment used</li>
              </ul>
            </ExperienceDeails>
          </TabContent>
        </div>
      </div>
    </section>
  );
};
