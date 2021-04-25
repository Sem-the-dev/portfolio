import React from "react";
import "./projects.css";
// import Carousel from "react-bootstrap/Carousel";
// import musicapp from "./images/musicapp.png";
// import githubtracker from "./images/git-pinner.png";
// import habittracker from "./images/habit-tracker.png";
// import gossipgirl from "./images/gossip-girl2.png";
import musicweb from "./images/musicweb.png";
import gitweb from "./images/gitweb.png";
import habitweb from "./images/habitweb.png";
import gossipgirlweb from "./images/gossipgirlweb.png";

// import "projects.css";

export default function projects() {
  return (
    <div className="projectSection">
      <h1>Projects</h1>
      
      <div className="row projectRows">
        <div className="col">
          <div className="card-body">
            <a
              href="https://gossip-girl-xoxo.netlify.app"
              id="gossip-girl-name"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="sites"
                src={gossipgirlweb}
                height="200"
                alt="gossip girl site"
              />{" "}
            </a>
          </div>
          <h3>
            {" "}
            <a
              href="https://gossip-girl-xoxo.netlify.app"
              id="gossip-girl-name"
              target="_blank"
              rel="noreferrer"
            >
              Gossip Girl
            </a>{" "}
          </h3>
          <p className="project-links">
            {" "}
            <a
              href="https://github.com/Sem-the-dev/gossip-girl-xoxo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo
            </a>
          </p>
          <p>
            A Gossip Girl inspired app where users can post entries of up to 300
            characters and a gif. Users can engage with the content using
            reactions and comments.
          </p>
        </div>
        <div className="col">
          <div className="card-body">
            <a
              href="https://drink-sleep-code-repeat.netlify.app"
              id="habit-tracker-name"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="sites"
                src={habitweb}
                height="200"
                alt="habit tracker app"
              />
            </a>
          </div>
          <h3>
            {" "}
            <a
              href="https://drink-sleep-code-repeat.netlify.app"
              id="habit-tracker-name"
              target="_blank"
              rel="noreferrer"
            >
              Drink<span id="bracket-color">( )</span> Sleep
              <span id="bracket-color">( )</span>{" "}
              <span id="code-color">Code( )</span> Repeat
              <span id="bracket-color">( )</span>
            </a>
          </h3>
          <p className="project-links">
            {" "}
            <a
              href="https://github.com/Sem-the-dev/habit-tracker-server"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo
            </a>
          </p>
          <p>
            An app for developers to track their drinking, coding and sleeping
            habits. Ensuring that developers have a healthy code life balance.
          </p>
        </div>
      </div>
      <div className="row projectRows">
        <div className="col">
          <div className="card-body">
            <a
              href="https://git-pinner.netlify.app"
              id="github-name"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="sites"
                src={gitweb}
                height="200"
                alt="git hub tracker"
              />
            </a>
          </div>
          <h3>
            {" "}
            <a
              href="https://git-pinner.netlify.app"
              id="github-name"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitPinner{" "}
            </a>
          </h3>
          <p className="project-links">
            {" "}
            <a
              href="https://github.com/Sem-the-dev/github-repo-tracker"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo
            </a>
          </p>
          <p>
            A GitHub repo tracker which displays a user's repositaries, forks,
            programming language and more.
          </p>
        </div>
        <div className="col">
          <div className="card-body">
            <a
              href="https://beliebers.netlify.app/"
              id="belieber-name"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="sites"
                src={musicweb}
                alt="music app"
                height="200"
              />
            </a>
          </div>
          <h3>
            {" "}
            <a
              href="https://beliebers.netlify.app/"
              id="belieber-name"
              target="_blank"
              rel="noreferrer"
            >
              Belieber
            </a>
          </h3>
          <p className="project-links">
            {" "}
            <a
              href="https://github.com/Sem-the-dev/music-react"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repo
            </a>
          </p>
          <p>
            A music app for Justin Beiber fans which displays his albums,
            lyrics, photos and a quiz.
          </p>
        </div>
      </div>
      {/* <div className="row">
        <div className="card col">
          <div className="card-body">
            <img src={""} height="200" alt="image" />
          </div>
          <h3>Google replica</h3>
          <p>info goes here</p>
        </div>
        <div className="card col">
          <div className="card-body">
            <img src={""} height="200" alt="image" />
          </div>
          <h3>Anonymous blogs</h3>
          <p>info goes here</p>
        </div>
      </div> */}
    </div>
  );
}
