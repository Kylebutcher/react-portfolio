import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/style/Header.css"

export default function Header() {

  return (
    <header>
      <div className="menu">
        <section>
          <img className="photo" src="/BBE082C7-5577-49B8-8E47-426ECAE40A3F.jpeg" alt="Portfolio photo of me!" />
        </section>
        <ul className="menu-items">
          <li><NavLink className="nav" to="/">About Me</NavLink></li>
          <li><NavLink className="nav" to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink className="nav" to="/contact">Contact Me</NavLink></li>
          <li><NavLink className="nav" to="/resume">Resume</NavLink></li>
        </ul>
      </div>
    </header>
  );
};