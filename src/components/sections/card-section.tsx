import React, { useState } from "react";
import { ImageSectionInterface } from "@/components/sections/image-section";
import { IntersectionObserverReference } from "./intersection-observer-reference";

export const CardSection = (props: ImageSectionInterface) => {
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
              <section className="icon">
                <img
                  src={props.imgSrc}
                  alt={props.altAttributeVale}
                  width="50vh"
                  height="50vh"
                />
              </section>
            </div>
            <div className="info-card-back">
              <h1>{props.title}</h1>
              <div className="card-link-container">
                {/*TODO: add state for has github link and has live demo */}
                <a
                  href="https://github.com/KJordan95/peggle-like-game"
                  target="_blank"
                  onClick={handleExternalLinkClick}
                >
                  GitHub
                </a>
                <button>Live Demo</button>
              </div>
              <p>{props.description}</p>
              <div className="card-chip-container">
                {/* <div className="chip">JavaScript</div> */}
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
