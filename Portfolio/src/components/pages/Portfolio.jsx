import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../assets/style/Portfolio.css";

export default function Portfolio() {

  // for future use my actual snapshots for my portfolio

  return (
    <div>
      <div className="first">
        <a href="https://kylebutcher.github.io/semantic-html/" target="_blank">
        <img className="project-1" src="/waterimg.jpg" alt="water looking background"></img>
        <h3>Semantic HTML</h3>
        </a>
        <a href="https://github.com/Kylebutcher/semantic-html">Repo</a>
      </div>
      <div className="second">
        <a className="extra-center" href="https://kylebutcher.github.io/note-taking-app/">
        <img className="project-2" src="/neon-color-background.jpg" alt="neon colored background"></img>
        <h3>Note Taking App</h3>
        </a>
        <a className="extra-center"href="https://github.com/Kylebutcher/note-taking-app">Repo</a>
      </div>
      <div className="third">
        <a className="extra-center" href="https://kylebutcher.github.io/passpour/">
        <img className="project-3" src="/third-image.jpg" alt="random img"></img>
        <h3>Passpour</h3>
        </a>
        <a href="https://github.com/Kylebutcher/passpour">Repo</a>
      </div>
      <div className="fourth">
        <a className="extra-center" href="https://kylebutcher.github.io/weather-dashboard/">
        <img className="project-4" src="/third-image.jpg" alt="random img"></img>
        <h3>Weather App</h3>
        </a>
        <a href="https://github.com/Kylebutcher/weather-dashboard">Repo</a>
      </div>
      <div className="fifth">
        <a className="extra-center" href="https://rvbouu.github.io/hoop-stats/">
        <img className="project-5" src="/third-image.jpg" alt="random img"></img>
        <h3>Hoop Stats</h3>
        </a>
        <a href="https://github.com/rvbouu/hoop-stats">Repo</a>
      </div>
      <div className="sixth">
        <a className="extra-center" href="https://kylebutcher.github.io/payroll-tracker/">
        <img className="project-6" src="/third-image.jpg" alt="random img"></img>
        <h3>Employee PayRoll Tracker</h3>
        </a>
        <a href="https://github.com/Kylebutcher/payroll-tracker">Rep</a>
      </div>
    </div>
  )
}