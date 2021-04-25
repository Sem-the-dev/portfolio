import React from "react";
import "./AboutMe.css";
import github from "./images/github_icon-black.png";

export default function AboutMe() {
  return (
    <header className="App-header">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <h1> Semhar Tesfu </h1>
      <h2>Trainee Full Stack Developer</h2>

      <p>
        <a href="https://github.com/Sem-the-dev" id="sem-the-dev">
          sem-the-dev
        </a>{" "}
      </p>

      <a href="https://github.com/Sem-the-dev" target="_blank" rel="noreferrer">
        <img src={github} alt="github icon" height="40" id="github-icon" />
      </a>
    </header>
  );
}
