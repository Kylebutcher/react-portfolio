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
          <li><NavLink className="nav" to="/" style={({ isActive }) => {
            return isActive ? { color: 'red' } : {};
          }}>About Me</NavLink></li>
          <li><NavLink className="nav" to="/portfolio" style={({ isActive }) => {
            return isActive ? { color: 'red' } : {};
          }}>Portfolio</NavLink></li>
          <li><NavLink className="nav" to="/contact" style={({ isActive }) => {
            return isActive ? { color: 'red' } : {};
          }}>Contact Me</NavLink></li>
          <li><NavLink className="nav" to="/resume" style={({ isActive }) => {
            return isActive ? { color: 'red' } : {};
          }}>Resume</NavLink></li>
        </ul>
      </div>
    </header>
  );
};