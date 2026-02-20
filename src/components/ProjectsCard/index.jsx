import "./index.css";

const projects = [
  {
    title: "Personal Expense Tracker",
    description:
      "Full-stack SaaS expense tracker enabling multiple users to register and manage personal income and expenses.",
    tech: ["React", "Node.js", "Express.js", "SQLite", "REST APIs", "JWT"],
    live: "https://expense-tracker-froentend.vercel.app",
    git: "https://github.com/yugandharboya/ExpenseTracker-Froentend",
  },
  {
    title: "Human Resource Management System",
    description:
      "Full-stack SaaS-based HRMS where multiple organizations can register and manage employees and teams.",
    tech: ["React", "Node.js", "Express.js", "REST APIs", "JWT"],
    live: "https://hrms-froentend.vercel.app",
    git: "https://github.com/yugandharboya/HRMS-froentend",
  },
  {
    title: "E-commerce",
    description: "Products listing and cart workflow.",
    tech: ["React", "Node.js", "Express.js", "REST APIs", "Auth", "Bootstrap"],
    live: "https://ecommerce.yugandharpro.com",
    git: "https://github.com/yugandharboya/e-commerce-web",
  },
  // {
  //   title: "User Management Dashboard",
  //   description: "Admin dashboard to manage users, roles, and logins.",
  //   tech: ["React", "Node.js", "Express.js", "REST APIs", "JWT", "Bootstrap"],
  //   live: "https://user-dashboard.yugandharpro.com",
  //   git: "https://github.com/yourname/user-dashboard",
  // },
];

const ProjectsCard = () => {
  return (
    <div className="projects-card">
      <div className="projects-card-header">
        <h2 className="section-heading">
          <span className="section-number">03.</span> Projects
        </h2>
        <hr className="hr-line" />
      </div>

      <div className="projects-list">
        {projects.map((p) => (
          <div key={p.title} className="project-item">
            <h3 className="project-title">{p.title}</h3>

            <p className="project-description">{p.description}</p>

            <div className="project-meta">
              <span className="meta-label">Tech :</span>
              <span className="meta-value">{p.tech.join(", ")}</span>
            </div>

            <div className="project-meta">
              <span className="meta-label">Live :</span>
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="live-link"
              >
                {new URL(p.live).hostname}
              </a>
            </div>

            <div className="project-meta">
              <span className="meta-label ">Source :</span>
              <a
                href={p.git}
                target="_blank"
                rel="noreferrer"
                className="git-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
