import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        {/* Header */}
        <header className="header">
          <h1 className="logo">YugandharPro</h1>
          {/* <nav className="nav">
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <span className="disabled-link">Business</span>
            <span className="disabled-link">Pest Control</span>
            
          </nav> */}
        </header>

        {/* Hero Section */}
        <main className="hero">
          <div className="hero-card">
            <h2>
              Welcome to <span className="highlight">YugandharPro</span>
            </h2>
            <p>
              Explore my projects, resume, and upcoming services — designed with
              innovation and passion.
            </p>
            <div className="button-grid">
              <Link to="/projects" className="btn">
                Projects
              </Link>
              
              <span className="btn disabled-btn">Resume</span>
              <span className="btn disabled-btn">Business</span>
              <span className="btn disabled-btn">Pest Control</span>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          © {new Date().getFullYear()} YugandharPro | All rights reserved
        </footer>
      </div>
    );
  }
}

export default Home;
