import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <div id="gazi-model">
          <GaziModel></GaziModel>
        </div>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Hi 👋"}
            <span className="intro-name">{" Mphathisi "}</span>
            <span>{"here"}</span>
  
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">#TheFullStackDeveloper</div>
          <div className="intro-desc">
           I am a software developer that has a strong interest in software development. I enjoy writing code, solving problems, and building softwares.
           Throughout the journey as a software developer, I have used many technologies such as JavaScript, Node.JS, Java for server side and Angular
           and React for building front-end web applications and firebase, MongoDB, MYSQL databases, GitHub version control. Flutter and ionic framework 
           for cross-platform mobile apps. I am a person who is flexible to learn any programming language that I come across.
          </div>
          <a
            href="mailto:mphathisimatinise16@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hello"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
