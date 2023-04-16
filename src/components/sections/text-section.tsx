import { IntersectionObserverReference } from "./intersection-observer-reference";

interface TextSectionInterface {
  title: string;
  body: string;
}

export const TextSection = (props: TextSectionInterface) => {
  const containRef = IntersectionObserverReference(0.5);

  return (
    <>
      <section className="hidden" ref={containRef}>
        <h2>{props.title}</h2>
        {props.body}
      </section>
    </>
  );
};
