import React from "react";
import { IntersectionObserverReference } from "./intersection-observer-reference";

export interface ImageSectionInterface {
  altAttributeVale: string;
  imgSrc: string;
  title: string;
  inlineStyle?: React.CSSProperties;
  description?: string;
  order: number;
}

export const ImageSection = (props: ImageSectionInterface) => {
  const containRef = IntersectionObserverReference(0.75);

  const linkStyle: React.CSSProperties = {
    "--order": props.order,
  } as React.CSSProperties;

  return (
    <>
      <section className="logo hidden" ref={containRef} style={linkStyle}>
        <img
          className="logo-image"
          src={props.imgSrc}
          alt={props.altAttributeVale}
          title={props.title}
          // width="100"
          // height="100"
        />
        {props.title}
      </section>
    </>
  );
};
