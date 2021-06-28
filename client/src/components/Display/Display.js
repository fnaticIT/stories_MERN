import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../Navbar2/Navbar";
import "./Display.css";
import Input from "../Home/Input";
import img1 from "../../Images/CREATE.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

function Display() {
  const user = JSON.parse(localStorage.getItem("profile"));

  const history = useHistory();

  if (!user) {
    history.push("/home");
  }
  return (
    <div>
      <Navbar />
      <header class="header">
        <div class="text-box">
          <h1 class="heading-primary">
            <span class="heading-primary-main">STORIES AND BEYOND</span>
            <span class="heading-primary-sub">Lets create memories to remember </span>
          </h1>
          <Link to="/posts" class="btn btn-white btn-animated">
            Explore Memories
          </Link>
        </div>
      </header>
      <div title="how">
        <h1>How it works</h1>
        <br></br>
        <h3 className="des">"Excited to share stories , read them then here is the perfect way to do it.You can create a post and share your experiences, stories or can explore others posts . Always Stories and beyond!"</h3>
      </div>
    </div>
  );
}

export default Display;
