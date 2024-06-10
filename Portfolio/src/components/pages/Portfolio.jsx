import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Portfolio() {

  return (
    <div>
      <div>
        <a href="https://kylebutcher.github.io/semantic-html/"></a>
        <img className="project-1" src="./assets/waterimg.jpg" alt="water looking background"></img>
      </div>
      <div>
        <a href="./index2.html"></a>
        <img className="project-2" src="./assets/neon-color-background.jpg" alt="neon colored background"></img>
      </div>
      <div>
        <a href="./index3.html"></a>
        <img className="project3" src="./assets/third-image.jpg" alt="random img"></img>
      </div>
    </div>
  )
}