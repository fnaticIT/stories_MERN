import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar() {
	const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div>
   
   <Link to="/display" className="logo">LOGO</Link>

<input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
<label for="menu-icon"></label>
<nav class="nav">
  <ul class="pt-5">
	<li>
	 Please Sign Up / Log In To Continue
	</li>
  </ul>
</nav>
 
    </div>
  );
}

export default Navbar;
