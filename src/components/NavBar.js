import React from "react";

import "../assets/NavBar.css";

// import { Link } from "react-router-dom";
// import logo from "../images/techimpact.svg";


export default function NavTabs() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top ">
        {/* <img className="mr-3" src={logo} width="50" alt="leaf logo" /> */}
        <h1 className="p-0 m-0">Financial Health Resources</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
            <>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <h5 className="p-0 m-0 pl-4 nav-link">
                  About Us <i className="fa-solid fa-user"></i>
                </h5>
              </li>
              <li className="nav-item">
                <h5 className="p-0 pl-4 m-0 nav-link">
                  Contact <i className="fa-solid fa-user"></i>
                </h5>
              </li>
            </ul>
            </>
      </div>
    </nav>
  );
}