import { useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const IntersectionObserverReference = (thresholdView: number) => {
  const containRef = useRef();
  const { ref: inViewRef } = useInView({
    threshold: thresholdView,
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

  return setRefs;
};
