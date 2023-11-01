import "./panelStyles.css";

export function Panel({ position, item }) {
  return (
    <section
      className="panelSection"
      style={
        item.id % 2 === 1
          ? {
              left: "0%",
              gridTemplateAreas: `"img article"`,
              gridTemplateColumns: `1.5fr 2fr`,
              borderRadius: `75px 25px 75px 25px`,
            }
          : {
              left: "20%",
              gridTemplateAreas: `"article img"`,
              gridTemplateColumns: `2fr 1.5fr`,
              borderRadius: `25px 75px 25px 75px`,
            }
      }
    >
      <img src={item.img} />
      <article>
        <div className="techologyDiv">
          {item.technology.map((i) => (
            <TechPanels>{i}</TechPanels>
          ))}
        </div>
        <h1>{item.name}</h1>
        <h3>{item.description}</h3>
      </article>
    </section>
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
