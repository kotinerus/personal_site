import "./MAINSTYLES/mainStyles.css";
import myPhoto from "./assets/images/myPhoto.jpg";
import { Navbar } from "./NAVBAR/Navbar";
import { Panel, TechPanels, Certificate } from "./PANEL/Panel";
import { gmail, github, linked } from "./assets/index";
import { TextContent, Row } from "./TEXT_CONTENT/TextContent";
import { Section } from "./SECTION/Section";
import projectsList from "./projectsList";
import certificatesList from "./certificatesList";

export default function App() {
  return (
    <>
      <Navbar />

      <Section id={"about"} heading={"1. About me"}>
        <div className="sectionCompDiv">
          <img src={myPhoto} />
          <article>
            <h2>
              Hi! I'm @kotinerus,
              <br />
              <span>React.js</span> developer
            </h2>
            <p>
              Every day, I devote a significant amount of time to developing my
              skills and learning new technologies and web design practices. I
              am wholeheartedly committed to achieving my professional goals,
              which involve creating beautiful and optimized websites. This is
              what motivates me!
            </p>
          </article>
        </div>
      </Section>

      <Section id={"projects"} heading={"2. Projects"}>
        {projectsList.map((e) => (
          <Panel item={e}></Panel>
        ))}
      </Section>
      <Section id={"certificates"} heading={"3. Certificates"}>
        {certificatesList.map((e) => (
          <Certificate key={e.id}>
            <img src={e.img} />
            <h2>{e.name}</h2>
            <h3>{e.date}</h3>
          </Certificate>
        ))}
      </Section>
      <Section id={"contact"} heading={"4. Contact"}>
        <TextContent>
          {" "}
          <h2>Get in touch</h2>
          <Row>
            <img src={gmail} />
            <h3>kotinerus@gmail.com</h3>
          </Row>
          <Row>
            <img src={github} />
            <h3>kotinerus</h3>
          </Row>
          <Row>
            <img src={linked} />
            <h3>https://www.linkedin.com/in/krzysztof-wysocki-a642a8238/</h3>
          </Row>
        </TextContent>
      </Section>
    </>
  );
}
