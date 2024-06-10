import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import '../../assets/style/Contact.css'

export default function Contact() {

  return (
    <div>
      <form>
        <label>First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Enter your first name"></input>
        <label>Email</label>
        <input type="text" id="email" name="email" placeholder="Enter your email"></input>
        <label>Message</label>
        <input type="text" id="message" name="message" placeholder="Enter your message"></input>
        <button id="submit">Send</button>
      </form>
    </div>
  )
}