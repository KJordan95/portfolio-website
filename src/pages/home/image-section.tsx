import React, { useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ImageSectionInterface } from "./home";

export const ImageSection = (props: ImageSectionInterface) => {
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

  const linkStyle: React.CSSProperties = {
    "--order": props.order,
  } as React.CSSProperties;

  return (
    <>
      <section className="logo hidden" ref={setRefs} style={linkStyle}>
        <img
          src={props.imgSrc}
          alt={props.altAttributeVale}
          title={props.title}
          width="100"
          height="100"
        />
      </section>
    </>
  );
};
