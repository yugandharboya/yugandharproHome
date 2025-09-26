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
            <h2>User Dashboard</h2>
            <p>User management dashboard project</p>
            <a href="https://user-dashboard.yugandharpro.com" target="_blank" rel="noopener noreferrer" className="btn">
              View
            </a>
          </div>

          <div className="project-card">
            <h2>Ecommerce</h2>
            <p>Online shopping project</p>
            <a href="https://ecommerce.yugandharpro.com" target="_blank" rel="noopener noreferrer" className="btn">
              View
            </a>
          </div>

          <div className="project-card">
            <h2>NxtWatch</h2>
            <p>YouTube clone project</p>
              <p>Coming soon...</p>
            <span className="btn disabled-btn">View</span>
          </div>

          <div className="project-card">
            <h2>Project 4</h2>
            <p>Coming soon...</p>
            <span className="btn disabled-btn">View</span>
          </div>
        </main>
      </div>
    );
  }
}

export default Projects;
