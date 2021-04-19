import React from "react";
import "./projects.css";
import Carousel from "react-bootstrap/Carousel";

export default function projects() {
  return (
    <div className="projectSection">
      <h1>Projects</h1>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://media.giphy.com/media/Plg2YiMyO2T1wK8PZE/giphy.gif"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Gossip Girl</h3>
            <p>
              An app for annonymous blogging entries created using JS.
              GithubLink{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://media.giphy.com/media/cwHl87hujyFtS/giphy.gif"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>drink() sleep() code() repeat()</h3>
            <p>A full-stack habit tracking app </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.giphy.com/media/gLcHMQjSX78zvfstt3/giphy.gif"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>A music app</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://media.giphy.com/media/ENQdawo2QTGC90agr0/giphy.gif"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Weather</h3>
            <p>A weather app built using react </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
