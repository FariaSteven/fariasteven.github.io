import React from "react";

import profile from "../../assets/profile.jpeg";
import Banner from "../banner/Banner";

import linkedin from "../../assets/icons/icons8-linkedin.svg";
import github from "../../assets/icons/icons8-github.svg";
import mail from "../../assets/icons/mail.svg";

import "./aboutMeBanner.css";

const AboutMeBanner = () => {
  return (
    <Banner>
      <div className="meContainer">
        <img className="profile-img" src={profile} />
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/steven-faria-12691317a/"
            target={"_blank"}
          >
            <img src={linkedin} />
            LinkedIn
          </a>
          <a href="https://github.com/FariaSteven" target={"_blank"}>
            <img src={github} />
            GitHub
          </a>
          <div>
            <img src={mail} />
            stevenfaria.gusmao@gmail.com
          </div>
        </div>
      </div>

      <div className="aboutContainer">
        <h1 className="name">Steven Faria</h1>
        <span className="role">Desenvolvedor Full Stack</span>
        <p className="aboutText">
          Desenvolvedor web com 3 anos de experiência principalmente em empresas
          de ensino digital. Comecei atuando como suporte de projetos, já tinha
          o desenvolvimento web como objetivo e passava meu tempo fora do
          trabalho, estudando e aplicando meus conhecimentos. Após meu trabalho
          como suporte, consegui minha primeira vaga atuando como desenvolvedor
          front end em uma empresa de ensino digital, onde adquiri muita
          experiência, tanto de forma técnica como em relação ao ensino digital,
          logo após atuei novamente como desenvolvedor front end, onde pude ter
          a experiência de construir aplicações web do zero, desde o front end
          ao consumo do back também desenvolvido por mim. Minha ultima
          experiência foi como desenvolvedor full stack, atuando novamente em
          uma empresa de ensino digital, pude polir minhas habilidades como full
          stack, aplicando tudo que adquiri nos ultimos anos como desenvolver,
          construindo um código mais limpo e polido. Hoje estou cursando Análise
          e Desenvolvimento de Sistemas na FIAP, com término em julho de 2023.
        </p>
      </div>
    </Banner>
  );
};

export default AboutMeBanner;
