import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import resume from "../../assets/KyleButcher_Resume2021.pdf";

export default function Resume() {

  return(
    <button className="style-button">
      <a href={resume} download>Download my resume here!</a>
    </button>
  )
}