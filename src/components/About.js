import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
        I am a recent <b>Computer Science</b> graduate.{" "}
        <b> I studied at the Walter Sisilu University </b>, with a focus in Software Engineering, Artificial Intelligence,
        Database management systems and etc and i also do freelancing jobs{" "}
        <b>for both mobile and web applications</b>.
      </p>
    );
    const two = (
      <p>
        I'm into <b>Software Engineering</b>, <b>Mobile Development</b> and{" "}
        <b>full stack developmet.</b>
         In my free time, I play video games and watch TV series
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:mphathisimatinise16@gmail.com">
          mphathisimatinise16@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "C++",
      "Flutter",
      "React.js",
      "ionic framework",
      "Firebase",
      "Java",
      "Node.js",
      "HTML & CSS",
      "Firebase",
      "Mongodb"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    var image = require("./assets/me.JPG");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
            <div className="about-image">
              <img src={image} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
