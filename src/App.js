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
      i
      <Navbar />
      <Section id={"about"} text={"1. About me"}>
        <div className="sectionCompDiv">
          <img src={myPhoto} />
          <article>
            <h2>
              Hi! I'm @kotinerus,
              <br /> <span>React.js</span> developer
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
      <Section id={"projects"} text={"2. Projects"}>
        {projectsList.map((e) => (
          <Panel key={e.id} object={e} />
        ))}
      </Section>
      <Section id={"certificates"} text={"3. Certificates"}>
        {certificatesList.map((e) => (
          <Certificate key={e.id}>
            <img src={e.img} />
            <h2>{e.name}</h2>
            <h3>{e.date}</h3>
          </Certificate>
        ))}
      </Section>
      <Section id={"contact"} text={"4. Contact"}>
        <Row>
          <a href="mailto: kotinerus@gmail.com">
            <img src={gmail} />
          </a>
          <a href="https://github.com/kotinerus">
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/krzysztof-wysocki-a642a8238/">
            <img src={linked} />
          </a>
        </Row>
      </Section>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h4>@2023 All rights reserved.</h4>
    </div>
  );
}
