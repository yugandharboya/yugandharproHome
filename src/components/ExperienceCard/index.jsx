import "./index.css";

const ExperienceCard = () => {
  return (
    <div className="experience-card card">
      <div className="experience-header">
        <h2 className="experience-title">
          <span className="experience-number">03.</span> Experience
        </h2>
        <hr className="experience-line" />
      </div>

      <p className="experience-text">
        <strong>I’m an entry-level full-stack developer</strong> with hands-on
        experience building real, production-ready applications using the MERN
        stack. Even though I’m still early in my software career, I’ve designed
        and developed complete end-to-end solutions including HRMS, user
        management dashboards, and an e-commerce platform — all deployed with
        authentication, backend APIs, and role-based access control.
      </p>

      <p className="experience-text">
        <strong>Along with development experience</strong>, I run my own
        business Yugandhar Pest Control Services, where I manage operations,
        communication, client handling, service workflows, and digital systems.
        This experience has improved my responsibility, problem-solving mindset,
        communication, and understanding of real user requirements — helping me
        think like a practical engineer rather than just a coder.
      </p>

      <p className="experience-text">
        <strong>I may be at the entry level, but</strong> my ability to build
        functional applications from scratch, deploy them, maintain them, and
        continuously improve them puts me closer to a candidate with real
        project experience. I enjoy learning new tools, improving my skills
        every day, and I’m confident I can contribute effectively like an
        experienced developer.
      </p>
    </div>
  );
};

export default ExperienceCard;
