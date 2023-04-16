import React, { useState } from "react";
import { ImageSectionInterface } from "@/components/sections/image-section";
import { IntersectionObserverReference } from "./intersection-observer-reference";

export const CardSection = (props: ImageSectionInterface) => {
  const [flip, setFlip] = useState(false);

  const containRef = IntersectionObserverReference(0.75);

  const flipCard = (event: React.MouseEvent<HTMLElement>) => {
    setFlip(!flip);
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
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
