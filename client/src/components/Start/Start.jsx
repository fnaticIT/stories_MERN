import React from "react";
import { Link } from "react-router-dom";
import "./Start.css";
import Video from "../Start/bg_2.mp4";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper } from "./StartElements";
import Typed from "react-typed";

function Start(params) {
  const ssy = {
    color: "#ff0066",
    fontSize: 48,
    textAlign: "center",
    fontWeight: "bold",
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <Typed style={ssy} strings={["Are You Ready ?"]} typeSpeed={100} />
        </HeroContent>
        <HeroContent>
        <HeroBtnWrapper>
            <Link to="/home">
              <button className="enter">ENTER</button>
            </Link>
          </HeroBtnWrapper>
        </HeroContent>
         
    
      </HeroContainer>
    </>
  );
}

export default Start;
