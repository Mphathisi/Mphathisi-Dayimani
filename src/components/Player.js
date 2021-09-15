import React from "react";
import "../styles/Player.css";
import FadeInSection from "./FadeInSection";

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
      
      </p>
    );
    var audio = require("./assets/song.mp3");
    return (
      <div id ="audio">
        <FadeInSection>
          <div className="about-content">
            <div className="container">
            <audio controls autoplay>
              <source src={audio}  type="audio/mpeg"/>
                  Your browser does not support the audio tag.
             </audio>  
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Player;
