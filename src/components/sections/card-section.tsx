import React, { useState } from "react";
import { IntersectionObserverReference } from "./intersection-observer-reference";

interface CardSectionInterface {
  altAttributeVale: string;
  imgSrc: string;
  title: string;
  inlineStyle?: React.CSSProperties;
  description?: string;
  order: number;
  children?: React.ReactNode;
  GithubLink?: string;
  LiveDemoLink?: string;
}

export const CardSection = (props: CardSectionInterface) => {
  const [flip, setFlip] = useState(false);

  const containRef = IntersectionObserverReference(0.75);

  const flipCard = (event: React.MouseEvent<HTMLElement>) => {
    setFlip(!flip);
  };

  const handleExternalLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <>
      <section>
        <div className="info-card hidden" ref={containRef} onClick={flipCard}>
          <div
            className={flip ? "info-card-inner flip" : "info-card-inner"}
            style={props.inlineStyle}
          >
            <div className="info-card-front">
              {/* <section className="icon"> */}
              <img
                src={props.imgSrc}
                alt={props.altAttributeVale}
                // width="50vh"
                // height="50vh"
                width="100%"
                height="100%"
              />
              {/* </section> */}
            </div>
            <div className="info-card-back">
              <h1>{props.title}</h1>
              <div className="card-link-container">
                {props.GithubLink !== undefined ? (
                  <a
                    href={props.GithubLink}
                    target="_blank"
                    onClick={handleExternalLinkClick}
                  >
                    GitHub
                  </a>
                ) : null}

                {props.LiveDemoLink !== undefined ? (
                  <a
                    href={props.LiveDemoLink}
                    target="_blank"
                    onClick={handleExternalLinkClick}
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
              <p className="card-description">{props.description}</p>
              <div className="card-chip-container">{props.children}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
