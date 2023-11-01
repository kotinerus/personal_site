import "./panelStyles.css";

export function Panel({ object }) {
  return (
    <a href={object.link}>
      <section
        className={`panelSection ${
          object.id % 2 === 1 ? "imageLeft" : "imageRight"
        }`}
      >
        <img src={object.img} />
        <article>
          {object.production && <h2 className="inProgress">IN PROGRESS</h2>}
          <div className="techologyDiv">
            {object.technology.map((i) => (
              <TechPanels>{i}</TechPanels>
            ))}
          </div>
          <h2>{object.name}</h2>
          <h3>{object.description}</h3>
        </article>
      </section>
    </a>
  );
}
export function TechPanels({ children }) {
  console.log(children);
  return (
    <div className={`techPanel`}>
      <img src={children} />
    </div>
  );
}
export function Certificate({ children }) {
  return <div className="certificatePanel">{children}</div>;
}
