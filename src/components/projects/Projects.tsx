import React from "react";
import Banner from "../banner/Banner";

import valorantCentral from "../../assets/valorant-central.png";
import quizApp from "../../assets/quiz-app.png";
import pokedexPagination from "../../assets/pokedex-pagination.png";
import ezoomTest from "../../assets/ezoom-test.png";
import pokedex from "../../assets/pokedex.png";

import "./projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Valorant Central",
      link: "https://magical-seahorse-42a77f.netlify.app/",
      preview: valorantCentral,
    },
    {
      title: "Pokedex",
      link: "https://sprightly-boba-c3511d.netlify.app/",
      preview: pokedex,
    },
    {
      title: "Pokedex Pagination",
      link: "https://lambent-cascaron-f2dfd2.netlify.app/",
      preview: pokedexPagination,
    },

    {
      title: "Quiz App",
      link: "https://affectionate-yonath-d95087.netlify.app/",
      preview: quizApp,
    },
    {
      title: "White Label Institucional",
      link: "https://flamboyant-pare-072a8d.netlify.app/",
      preview: ezoomTest,
    },
  ];
  
  return (
    <Banner>
      <div className="projectsContainer">
        {projects.map((project) => (
          <a href={project.link} target={"_blank"}>
            <div className="projectsCard">
              <img className="projectsPreview" src={project.preview} />
              <h3>{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </Banner>
  );
};

export default Projects;
