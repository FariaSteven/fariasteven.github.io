import React, { useState } from "react";
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

import "./technologies.css";

const Technologies = () => {
  const [tech, setTech] = useState({
    text: "ReactJS",
    icon: reactIcon,
    description:
      "O React é uma biblioteca front-end e tem como um de seus objetivos facilitar a conexão entre diferentes partes de uma página, portanto seu funcionamento acontece através do que chamamos de componentes.",
  });

  const technologies = [
    {
      text: "ReactJS",
      icon: reactIcon,
      description:
        "O React é uma biblioteca front-end e tem como um de seus objetivos facilitar a conexão entre diferentes partes de uma página, portanto seu funcionamento acontece através do que chamamos de componentes.",
    },
    {
      text: "MongoDB",
      icon: mongodbIcon,
      description:
        "É um banco de dados opensource, de alta performance e flexível, sendo considerado o principal banco de dados NoSQL.",
    },
    {
      text: "JavaScript",
      icon: javascriptIcon,
      description:
        "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web.",
    },
    {
      text: "HTML",
      icon: htmlIcon,
      description:
        "HTML é uma linguagem de marcação utilizada na construção de páginas na Web.",
    },
    {
      text: "CSS",
      icon: css3Icon,
      description:
        "CSS ou Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>.",
    },
    {
      text: "Redux",
      icon: reduxIcon,
      description:
        "Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo.",
    },
    {
      text: "SASS",
      icon: sassIcon,
      description:
        "O SASS ou Syntactically Awesome Style Sheets, é uma linguagem de extensão do CSS.",
    },
    {
      text: "TypeScript",
      icon: typescriptIcon,
      description:
        "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
    },
    {
      text: "GraphQL",
      icon: graphqlIcon,
      description:
        "GraphQL é uma linguagem de consulta criada pelo Facebook em 2012 e lançada publicamente em 2015. É considerada uma alternativa para arquiteturas REST, além de oferecer um serviço runtime para rodar comandos e consumir uma API.",
    },
    {
      text: "NodeJS",
      icon: nodeIcon,
      description:
        "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.",
    },
    {
      text: "Cypress",
      icon: cypressIcon,
      description:
        "Cypress é uma ferramenta de teste de front-end para aplicativos da web.",
    },
  ];

  const handleOnHover = (index: any) => {
    setTech(technologies[index]);
  };

  return (
    <Banner>
      <div className="technologiesContainer">
        <div className="technologiesGrid">
          {technologies.map((item: any, i: any) => (
            <div
              className="technologiesCard"
              onMouseOver={() => handleOnHover(i)}
            >
              <img src={item?.icon} alt={item.text} />
            </div>
          ))}
        </div>
        <div className="technologiesDescription">
          <h1>{tech?.text}</h1>
          <p>{tech?.description}</p>
        </div>
      </div>
    </Banner>
  );
};

export default Technologies;
