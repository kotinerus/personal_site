import "./sectionStyles.css";
export function Section({ children, id, heading }) {
  return (
    <section className="sectionComp" id={id}>
      <h1>{heading}</h1>
      {children}
    </section>
  );
}
