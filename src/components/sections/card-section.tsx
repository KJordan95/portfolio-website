import React, { useCallback, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ImageSectionInterface } from "@/components/sections/image-section";

export const CardSection = (props: ImageSectionInterface) => {
  const [flip, setFlip] = useState(false);

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

  const flipCard = (event: React.MouseEvent<HTMLElement>) => {
    setFlip(!flip);
  };

  return (
    <>
      <section>
        <div className="info-card hidden" ref={setRefs} onClick={flipCard}>
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
