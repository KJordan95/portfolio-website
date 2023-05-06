import { ReactNode } from "react";
import { IntersectionObserverReference } from "./intersection-observer-reference";

interface TextSectionInterface {
  title: string;
  body: string;
  children: ReactNode;
}

export const TextSection = (props: TextSectionInterface) => {
  const containRef = IntersectionObserverReference(0.5);

  return (
    <>
      <section className="hidden" ref={containRef}>
        {/* <h2>{props.title}</h2> */}
        {props.children}
        {/* {props.body} */}
      </section>
    </>
  );
};
