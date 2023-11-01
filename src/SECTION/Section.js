import "./sectionStyles.css";
export function Section({ children, id, text }) {
  return (
    <section className="sectionComp" id={id}>
      <h1>{text}</h1>
      {children}
    </section>
  );
}
