import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/display" className="logo">LOGO</Link>

      <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
          <Link to="/create">Create</Link>
          </li>
          <li>
          <Link to="/search">Search</Link>
          </li>
          <li>
          <Link to="/posts">explore</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
