import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
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
    const projects = {
      "94 innovation Website": {
        desc:
          "A website for 94 innovations ,created using Bootstrap .",
        techStack: "Bootstrap",
        link: "https://github.com/Mphathisi/94-innovations-website",
        open: "https://nine4innovations.herokuapp.com/"
      },
      "Safe Account": {
        desc:
          "An app for managing missmanagement of funds ",
        techStack: "ionic framework, Firebase / Express.js",
        link:"",
        open: "https://github.com/Mphathisi/safeAccount"
      },
      Truth: {
        desc:
          "A three.js simulation of the planet system revolving around a monolith.",
        techStack: "Three.js",
        link: "https://github.com/Mphathisi/Truth",
        open: "https://mphathisi.github.io/Truth/"
      },
      " Todo App": {
        desc:
          "A Todo list that will help me track my things todo, it is made with express mongoDB atlas and google api for login.",
        techStack: "Node.js, MongoDB atlas, google API",
        link: "https://mpha2.herokuapp.com/",
        open: "https://github.com/Mphathisi/todoApp"
      },
      "Student Marketplace": {
        desc:
          "A student marketplace that will help students to sell their unused goods.",
        techStack: "React, Express.js , mongoDb",
        link: "",
        open: ""
      },
      "Student Marketplace": {
        desc:
          "A student marketplace that will help students to sell their unused goods.",
        techStack: "React, Express.js , mongoDb",
        link: "",
        open: ""
      },
     
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-projects</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <span className="external-links">
                      <a className="github-icon" href={projects[key]["link"]}>
                        <GitHubIcon
                          style={{
                            fontSize: 20,
                            color: "var(--lightest-slate)"
                          }}
                        ></GitHubIcon>
                      </a>
                      {projects[key]["open"] && (
                        <a className="open-icon" href={projects[key]["open"]}>
                          <OpenInBrowserIcon
                            style={{
                              fontSize: 25,
                              color: "var(--lightest-slate)"
                            }}
                          ></OpenInBrowserIcon>
                        </a>
                      )}
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
