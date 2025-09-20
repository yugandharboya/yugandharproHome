import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        {/* Header */}
        <header className="projects-header">
          <h1 className="logo">
            <Link to="/">YugandharPro</Link>
          </h1>
          <nav className="nav">
            <Link to="/projects">Projects</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="projects-main">
          <div className="project-card">
            <h2>NXT WATCH</h2>
            <p>Short description of project 1</p>
          </div>
          <div className="project-card">
            <h2>E commerce</h2>
            <p>Short description of project 2</p>
          </div>
          <div className="project-card">
            <h2>Project 3</h2>
            <p>Short description of project 3</p>
          </div>
        </main>
      </div>
    );
  }
}

export default Projects;
