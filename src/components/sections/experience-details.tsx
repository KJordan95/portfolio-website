import React from "react";

interface ExperienceDeailsProps {
  title: string;
  company: string;
  dateRange: string;
  children: React.ReactNode;
}

export const ExperienceDeails = (props: ExperienceDeailsProps) => {
  return (
    <div className="work-details">
      <h3 className="work-details-title">
        <span className="work-details-role">{props.title} - </span>
        <span className="work-details-compamy">{props.company}</span>
      </h3>
      <p className="work-details-date-range">{props.dateRange}</p>
      <div>{props.children}</div>
    </div>
  );
};
