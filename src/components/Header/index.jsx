import "./index.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const handleScroll = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <h1 className="header-title">Yugandhar Portfolio</h1>
      <div className="header-nav">
        <button onClick={() => handleScroll("about")}>About</button>
        <button onClick={() => handleScroll("skills")}>Skills</button>
        <button onClick={() => handleScroll("projects")}>Projects</button>
        <button onClick={() => handleScroll("experience")}>Experience</button>
        <button onClick={() => handleScroll("contact")}>Contact</button>

        {/* OPEN RESUME IN NEW TAB */}

        <a
          href="/print_resume_3.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          📄 Download Resume
        </a>

        <div className="social-links">
          <a href="https://github.com/yugandharboya" target="_blank">
            <FaGithub className="social-link-icons" />
          </a>
          <a href="https://linkedin.com/in/yugandharboya" target="_blank">
            <FaLinkedin className="social-link-icons" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
