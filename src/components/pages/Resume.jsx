import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import resume from "../../assets/KyleButcher_Resume2021.pdf";
import "../../assets/style/Resume.css";

export default function Resume() {

  return (
    <div>
      <button className="style-button">
        <a className="style" href={resume} download>Download my resume here!</a>
      </button>
      <h3>Front End Profiencies</h3>
      <ul className="front-end">
        <h3>Front-end Proficiencies</h3>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <ul className="back-end">
        <h3>Back-end Proficiencies</h3>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>PostgreSQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
      </ul>
    </div>
  )
}