import "./index.css";

const AboutCard = () => {
  return (
    <div className="about-card">
      <div className="about-card-header-container">
        <h2 className="section-heading">
          <span className="section-number">01.</span> About
        </h2>
        <hr className="hr-line" />
      </div>
      <div className="about-card-body">
        <p className="about-card-text">
          Before stepping into tech, I gained real-world experience running a
          service business, which taught me valuable soft skills such as
          communication, time management, ownership, and responsibility —
          qualities I now bring into my software development work.
          <br /> For me, coding is not just about writing functions — it’s about
          solving problems, improving systems, and building applications that
          people love to use. I'm continuously learning and working toward
          becoming a highly skilled full-stack engineer. <br /> When I'm not
          coding, you’ll find me exploring new tech topics, improving my
          portfolio projects, or learning something new every day.
        </p>

        <img
          src="/myProfile.JPG"
          alt="Yugandhar"
          className="about-card-image"
        />
      </div>
    </div>
  );
};

export default AboutCard;
