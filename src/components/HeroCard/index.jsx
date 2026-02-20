import "./index.css";
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Fira+Code&display=swap"
  rel="stylesheet"
/>;

const HeroCard = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-card">
      <img src="/myProfile.JPG" className="my-profie" />
      <p className="hero-intro">Hi, my name is</p>
      <h1 className="hero-title">Yugandhar Boya.</h1>
      <h2 className="hero-subtitle">I build things for the web.</h2>

      <p className="hero-description">
        I'm a web developer specializing in creating modern, responsive, and
        user-friendly web applications. Currently, I’m improving my full-stack
        development skills.
      </p>
    </div>
  );
};

export default HeroCard;
