import React, { useState } from "react";

import parse from "html-react-parser";

import Banner from "../banner/Banner";

import cypressIcon from "../../assets/icons/cypress.svg";
import css3Icon from "../../assets/icons/icons8-css3.svg";
import graphqlIcon from "../../assets/icons/icons8-graphql.svg";
import htmlIcon from "../../assets/icons/icons8-html-5.svg";
import javascriptIcon from "../../assets/icons/icons8-javascript.svg";
import mongodbIcon from "../../assets/icons/icons8-mongodb.svg";
import reactIcon from "../../assets/icons/icons8-nativo-de-reagir.svg";
import nodeIcon from "../../assets/icons/icons8-nodejs.svg";
import reduxIcon from "../../assets/icons/icons8-redux.svg";
import sassIcon from "../../assets/icons/icons8-sass.svg";
import typescriptIcon from "../../assets/icons/icons8-typescript.svg";

import "./experience.css";

const companiesName = ["HSOL MARKETING", "Ezoom", "Eureka Digital"];

const companies = [
  {
    text: "Eureka Digital",
    description:
      "<p>Membro de equipe, responsável por cuidar da parte de admin e conteúdo.</p><h2>Algumas das minhas atuações:</h2><ul><li>- Criação e manuteção de campos de formulários no sistema Admin;</li><li>- Desenvolvi a página de criação de chamados do app no admin;</li><li>- Consumo e manutenção de chamadas com GraphQL;</li><li>- Criação de campos e filtros de buscar na parte de conteúdo;</li></ul><h2>Tecnologias:</h2><ul><li>Redux.js</li><li>Git</li><li>TypeScript</li><li>GraphQL</li><li>Styled-components</li><li>MongoDB</li><li>JavaScript</li><li>Node.js</li><li>React.js</li></ul>",
  },
  {
    text: "Ezoom",
    description:
      "<p>Membro de equipe, responsável por criar e dar manutenção em sites institucionais.</p><h2>Algumas das minhas atuações:</h2><ul><li>- Criei diversos sites institucionais com integração ao back-end;</li><li>- Tive meus sites rodando em produção, com usuários ativos;</li><li>- Aprendi um framework(Laravel) novo do zero;</li></ul><h2>Tecnologias:</h2><ul><li>Git</li><li>Laravel</li><li>JQuery</li><li>MySQL</li><li>PHP</li><li>HTML5</li><li>CSS</li><li>Webpack</li><li>SASS</li><li>LESS</li><li>gulp</li><li>JavaScript</li></ul>",
  },
  {
    text: "HSOL MKT",
    description:
      "<p>Membro de equipe responsável por dar manutenção e construir um site de educação.</p> <h2>Algumas das minhas atuações:</h2><ul><li>- Criação de diversos componentes: cards, carrosel, listagem de conteúdos com flex e grid;</li><li>- Formulários multi-step de pagamento;</li><li>- Formulários de login e cadastro;</li><li>- Integração com API Rest;</li></ul><h2>Tecnologias:</h2><ul><li>Git</li> <li>GraphQL</li> <li>Node.js</li> <li>React.js</li></ul> ",
  },
];

const Experience = () => {
  const [companie, setCompanie] = useState(1);
  return (
    <Banner>
      <div className="buttons">
        {companiesName.map((item: any, i: any) => (
          <button onClick={() => setCompanie(i)}>{item}</button>
        ))}
      </div>
      <div className="companiesContainer">
        <h1>{companies[companie].text}</h1>
        <div>{parse(companies[companie].description)}</div>
      </div>
    </Banner>
  );
};

export default Experience;
