import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/style/Footer.css"


export default function Footer() {

  return (
    <footer>
      <h2 id="contact" className>Contact Me:</h2>
      <div className="container2">
        <div>612-802-5778</div>
        <div>kylembutcher97@gmail.com</div>
        <div>Github</div>
      </div>
    </footer>
  )
}