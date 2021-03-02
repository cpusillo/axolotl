import React, { Component, useState } from "react"
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase"
import"./navbar.css";
import { Dropdown } from "react-bootstrap"
// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {

  const [isLoggedIn, setLoggedIn] = useState()
  const [userName, setUserName] = useState()

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("NAVBAR " + user.email)
      // User is signed in.
      setLoggedIn(true)
      setUserName(user.email)
    } else {
      // No user is signed in.
      setLoggedIn(false)
    }
  }
  );
  return (  
<nav id="nav" className="navbar navbar-expand-lg navbar bg-dark" >
<img src="https://media.tenor.com/images/e19b269522c8b038097086e5703d192b/tenor.gif" alt="This will display an animated GIF" />
  <Link className="navbar-brand" to="/">AXOLOTL</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div  className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
              <Link
              to="/search"
              className={
                window.location.pathname === "/Search" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
            </li>
            <li className="nav-item">
            <Link
              to="/saved"
              className={
                window.location.pathname === "/Saved" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Saved
            </Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
              {
                isLoggedIn ? (
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  {userName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item><Link to="/dashboard" className={window.location.pathname === "/dashboard" || window.location.pathname === "/" ? "nav-link": "nav-link"}>Dashboard</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                )
                :
                (
                  <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link to="/login" className={window.location.pathname === "/login" || window.location.pathname === "/" ? "nav-link" : "nav-link"}>Login </Link>
                </li>
                <li className="nav-item">
                <Link to="/signup" className={window.location.pathname === "/signup" || window.location.pathname === "/" ? "nav-link" : "nav-link"}>Sign Up </Link>
                </li>
                </ul>
                )
              }

      </li>
    </ul>
  </div>
</nav>

  )}

export default Navbar;
