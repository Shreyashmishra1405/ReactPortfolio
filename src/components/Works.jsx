import React from "react";
import "./Works.scss";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

export default function Works() {
  return (
    <div className="Works" id="works">
      <div className="left">
        <div className="img1">
          <img src={project1} alt="" />
          <img src={project2} alt="" />
        </div>
        <div className="img2">
          <img src={project3} alt="" />
          <img src={project4} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>My Projects</h2>

        <div className="weather">
          <h3>
            Weather APP{" "}
            <span>
              {" "}
              <a href="https://github.com/Shreyashmishra1405/weather.github.io">
                Link
              </a>
            </span>
          </h3>
          <br />
          <p>
            Description:
            <br />
            Created a weather App which takes a input as city name and shows the
            current weather condition of the given city. A simple Frontend
            Project created using Html, CSS and React. It uses OpenWeatherMap
            Api for fetching data and display it in the site.
          </p>
        </div>

        <div className="netflix">
          <h3>
            Netflix Clone{" "}
            <span>
              {" "}
              <a href="https://github.com/Shreyashmishra1405/Movieflix">Link</a>
            </span>
          </h3>
          <br />
          <p>
            Description:
            <br />
            This is a clone of Netflix website built using as a Front-end . It's
            a similar version of Netflix with my own design touch, showing my
            abilities in React.JS to build something advanced like Netflix.It
            was created with React.js and CSS and React-Router. It uses The
            TheMovieDB Api to search for movies and display details.
          </p>
        </div>
        <div className="html">
          <h3>
            MyTodoApp
            <span>
              <a href="https://shreyashmishra1405.github.io/mytodoapp/">Link</a>
            </span>
          </h3>
          <br />
          <p>
            Description:
            <br />
            Created a todo app where user can add or delete a particular task.
          </p>
        </div>
      </div>
    </div>
  );
}
