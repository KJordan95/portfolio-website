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
            title={"FIS"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          ></TabNavItem>
          <TabNavItem
            id={"company2"}
            title={"WIS International"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          ></TabNavItem>
        </div>
        <div className="experience-container">
          <TabContent id={"company1"} activeTab={activeTab}>
            <ExperienceDeails
              title={"Software Engineer"}
              company={"Fidelity National Information Services"}
              dateRange={"JUNE 2021 - DECEMBER 2022"}
            >
              <ul>
                <li>
                  Developed high-performing Java software solutions to reduce
                  time and resource usage for company applications
                </li>
                <li>
                  Utilized scripting languages (PowerShell and Bash) to assist
                  programs with accurately handle dates and times in various
                  time zones
                </li>
                <li>
                  Streamlined Jenkins pipeline to ensure builds ran efficiently
                  after changes were pushed through Git
                </li>
                <li>
                  Established RESTful API connection for secure storage of
                  system performance results
                </li>
                <li>
                  Optimized web-based applications with JavaScript and HTML code
                  enhancements and recommendations to teammates
                </li>
                <li>
                  Applied Agile methodologies (Kanban then later Scrum) with a
                  CI/CD pipeline for bug resolution before production
                </li>
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
