import Header from "../Header";
import HeroCard from "../HeroCard";
import AboutCard from "../AboutCard";
import ProjectsCard from "../ProjectsCard";
import ExperienceCard from "../ExperienceCard";
import ContactCard from "../ContactCard";
import SkillsCard from "../SkillsCard";
// import ResumeCard from "../ResumeCard";

import "./index.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="home-main">
        <section id="hero" className="home-section">
          <HeroCard />
        </section>

        <section id="about" className="home-section">
          <AboutCard />
        </section>
        <section id="skills" className="home-section">
          <SkillsCard />
        </section>

        <section id="projects" className="home-section">
          <ProjectsCard />
        </section>

        <section id="experience" className="home-section">
          <ExperienceCard />
        </section>

        <section id="contact" className="home-section">
          <ContactCard />
        </section>

        {/* <section id="resume" className="home-section">
          <ResumeCard />
        </section> */}
      </main>
    </div>
  );
};

export default Home;
