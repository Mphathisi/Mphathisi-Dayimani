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
            I am a software engineer based in South Africa. I have profound
            interest in mobile development, full stack development, machine learning, Operating Systems,  
            and everything in between.
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
