import React from "react";
import "./skills.css";

export default function skills() {
  return (
    <div className="skill-section">
      <h1 id="skills-header">Technical Skills </h1>
      <div className="skills">
        <h5>Languages and Frameworks</h5>
        <p>
          Javascript, HTML/CSS, React, Redux, Python, Nodejs, PHP, Drupal, Twig,
          SaaS, Bootstrap and Skeleton
        </p>
        <div className="row">
          <div className="col colSkills">
            <div className="card-body">
              <h5>Dev environments</h5>
              <ul className="card-text">
                <li>Docker</li>
                <li>Lando</li>
                <li>Grunt</li>
              </ul>
              {/* <img /> */}
            </div>
          </div>

          <div className="col colSkills">
            <div className="card-body">
              <h5>CI/CD popelines</h5>
              <ul className="card-text">
                <li>GitHub</li>
                <li>GitLab</li>
                <li>Jenkins</li>
              </ul>
            </div>
          </div>

          <div className="col colSkills">
            <div className="card-body">
              <h5>Design</h5>
              <ul className="card-text">
                <li>Figma</li>
                <li>Freehand</li>
                <li>Canva</li>
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
                <li>MySQL</li>
              </ul>
            </div>
          </div>

          <div className="col colSkills">
            <div className="card-body">
              <h5>Testing</h5>
              <ul className="card-text">
                <li>React Testing Library</li>
                <li>Jest</li>
                <li>LambdaTest</li>
              </ul>
            </div>
          </div>

          <div className="col colSkills">
            <div className="card-body">
              <h5>Agile methodologies</h5>
              <ul className="card-text">
                <li>Scrum</li>
                <li>Kanban</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col colSkills">
            <div className="card-body">
              <h5>Hosting</h5>
              <ul className="card-text">
                <li>Netlify</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>

          <div className="col colSkills">
            <div className="card-body">
              <h5>CDNs</h5>
              <ul className="card-text">
                <li>CloudFlare</li>
                <li>MaxCDN</li>
              </ul>
            </div>
          </div>

          <div className="col colSkills">
            <div className="card-body">
              <h5>Package Management</h5>
              <ul className="card-text">
                <li>NPM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
