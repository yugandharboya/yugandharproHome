import "./index.css";

const projects = [
  {
    title: "Human Resource Management System",
    description: "HRMS application for employee and leave management.",
    tech: "React, Node.js, Express.js, REST APIs, JWT Auth, Bootstrap",
    link: "https://hrms-froentend.vercel.app",
    linkText: "hrms-froentend.vercel.app",
  },
  {
    title: "User Management Dashboard",
    description: "Admin dashboard to manage users, roles, and logins.",
    tech: "React, Node.js, Express.js, REST APIs, JWT Auth, Bootstrap",
    link: "https://user-dashboard.yugandharpro.com",
    linkText: "user-dashboard.yugandharpro.com",
  },
  {
    title: "E-commerce",
    description: "Simple e-commerce site with products and cart flow.",
    tech: "React, Node.js, Express.js, REST APIs, Auth, Bootstrap",
    link: "https://ecommerce.yugandharpro.com",
    linkText: "ecommerce.yugandharpro.com",
  },
];

const ProjectsCard = () => {
  return (
    <div className="projects-card">
      <div className="projects-card-header">
        <h2 className="section-heading">
          <span className="section-number">02.</span> Projects
        </h2>
        <hr className="projects-hr-line" />
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.title} className="project-item">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech">Tech: {project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              {project.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
