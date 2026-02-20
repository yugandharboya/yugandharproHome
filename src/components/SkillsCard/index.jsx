import "./index.css";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaTools } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const skillGroups = [
  {
    title: "Languages",
    items: [
      { icon: <SiJavascript />, name: "JavaScript (ES6+)" },
      { icon: <SiPython />, name: "Python (Basics)" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: <SiHtml5 />, name: "HTML5" },
      { icon: <SiCss3 />, name: "CSS3" },
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <FaTools />, name: "REST APIs" },
      { icon: <SiJavascript />, name: "JWT Authentication" },
    ],
  },
  {
    title: "Database",
    items: [{ icon: <SiMysql />, name: "SQL" }],
  },
  {
    title: "Tools",
    items: [
      { icon: <SiGit />, name: "Git" },
      { icon: <SiGithub />, name: "GitHub" },
      { icon: <VscVscode />, name: "VS Code" },
      { icon: <FaTools />, name: "Chrome DevTools" },
    ],
  },
  {
    title: "Deployment",
    items: [
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <TbWorldWww />, name: "Render" },
      { icon: <TbWorldWww />, name: "Custom Domain Setup" },
    ],
  },
  {
    title: "Learning",
    items: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <FaTools />, name: "Full MERN Stack Deep Dive" },
    ],
  },
];

const SkillsCard = () => {
  return (
    <div className="skills-card">
      <div className="skills-header">
        <h2 className="skills-title">
          <span className="skills-number">02.</span> Skills
        </h2>
        <hr className="hr-line" />
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div key={index} className="skills-column">
            <h3 className="skills-category-title">{group.title}</h3>
            {group.items.map((item, subIndex) => (
              <div key={subIndex} className="skill-row">
                <span className="skill-icon">{item.icon}</span>
                <p className="skill-name">{item.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
