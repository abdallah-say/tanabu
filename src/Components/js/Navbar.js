/* eslint-disable jsx-a11y/anchor-is-valid */
import "../css/Navbar.css";
import { useState } from "react";
import logo from "../img/logo.svg";
import logo2 from "../img/light logo.svg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  function changeBackground() {
    if (window.scrollY >= 10) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="nav">
      {/*Navbar Items */}
      <ul id={navbar ? "navtrans" : "navbar"}>
        <img id="logo" src={navbar ? logo : logo2} alt="logo" />
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#our-goal">Our Goal</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#our-team">Our Team</a>
        </li>
      </ul>
      <div class="burger-menu">
        <div class="burger"></div>
      </div>
    </div>
  );
};

export default Navbar;
