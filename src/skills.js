import React from "react";
import "./skills.css";

export default function skills() {
  return (
    <div className="skillSection">
      <h1>Technical Skills </h1>

      <div className="row">
        <div className="card col">
          <div className="card-body">
            <h5>Programming languages</h5>
            <p className="card-text">
              HTML, CSS, JavaScript, Node.Js, React and Python(by the end of the
              course)
            </p>
          </div>
        </div>

        <div className="card col">
          <div className="card-body">
            <h5>Frontend Frameworks</h5>
            <p className="card-text">Bootstrap, Skeleton</p>
          </div>
        </div>

        <div className="card col">
          <div className="card-body">
            <h5>Server Frameworks</h5>
            <p className="card-text">Express</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card col">
          <div className="card-body">
            <h5>Databases</h5>
            <p className="card-text">MongoDB and PostgreSQL</p>
          </div>
        </div>

        <div className="card col">
          <div className="card-body">
            <h5>Testing</h5>
            <p className="card-text">Jest, React Testing Library</p>
          </div>
        </div>

        <div className="card col">
          <div className="card-body">
            <h5>Hosting</h5>
            <p className="card-text">Netlify and Heroku</p>
          </div>
        </div>
      </div>
    </div>
  );
}
