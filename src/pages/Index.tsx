import React, { useState } from "react";

import AboutMeBanner from "../components/aboutMeBanner/AboutMeBanner";
import Technologies from "../components/technologies/Technologies";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";

import "./index.css";

function container(render: any) {
  if (render === "Sobre") {
    return <AboutMeBanner />;
  }
  if (render === "Tecnologias") {
    return <Technologies />;
  }
  if (render === "Experiência") {
    return <Experience />;
  }
  if (render === "Projetos") {
    return <Projects />;
  }
}

const Index = () => {
  const [render, setRender] = useState("Sobre");
  const buttons = ["Sobre", "Tecnologias", "Experiência", "Projetos"];
  return (
    <div className="container">
      <h1 className="pageTitle">{render}</h1>
      <div className="wrapper">
        {container(render)}
        <div className="menu">
          {buttons.map((button: any) => (
            <button onClick={() => setRender(button)}>{button}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
