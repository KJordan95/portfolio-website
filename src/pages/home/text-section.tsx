import { useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { TextSectionInterface } from "./home";

export const TextSection = (props: TextSectionInterface) => {
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

  return (
    <>
      <section className="hidden" ref={setRefs}>
        <h2>{props.title}</h2>
        {props.body}
      </section>
    </>
  );
};
