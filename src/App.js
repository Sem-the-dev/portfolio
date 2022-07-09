import React from "react";
import "./App.css";
import Skills from "./skills";
import Projects from "./projects";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="page-container">
      <section>
        <AboutMe />
        <Skills />
        <Projects />
      </section>
    </div>
  );
}

export default App;
