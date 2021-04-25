import React from "react";
import "./skills.css";

export default function skills() {
  return (
    <div className="skill-section">
      <h1 id="skills-header">Technical Skills </h1>
      <div className="skills">
        <div className="row">
          <div className="col colSkills">
            <div className="card-body">
              <h5>Programming languages</h5>
              <ul className="card-text">
                <li>HTML</li> <li>CSS</li> <li>JavaScript</li>
                <li>Node.Js</li>
                <li>React</li> <li>Python</li>
              </ul>
              {/* <img /> */}
            </div>
          </div>

          <div className="col colSkills">
            <div className="card-body">
              <h5>Frontend Frameworks</h5>
              <ul className="card-text">
                <li>Bootstrap</li>
                <li>Skeleton</li>
              </ul>
            </div>
          </div>

          <div className="col colSkills">
            <div className="card-body">
              <h5>Server Frameworks</h5>
              <ul className="card-text">
                <li>Express</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col colSkills">
            <div className="card-body">
              <h5>Databases</h5>
              <ul className="card-text">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Redux</li>
              </ul>
            </div>
          </div>

          <div className="col colSkills">
            <div className="card-body">
              <h5>Testing</h5>
              <ul className="card-text">
                <li>React Testing Library</li>
                <li>Jest</li>
              </ul>
            </div>
          </div>

          <div className="col colSkills">
            <div className="card-body">
              <h5>Hosting</h5>
              <ul className="card-text">
                <li>Netlify</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
