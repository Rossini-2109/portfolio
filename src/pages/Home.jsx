
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="greeting">Hello, welcome to my portfolio 👋</p>

        <h1>
          I'm <span>Rossini J</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p className="hero-description">
          I'm a Computer Science Engineering student
          passionate about building modern web applications,
          solving problems, and creating meaningful digital
          experiences.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="primary-btn">
            View My Projects
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-circle">
          <span>RJ</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
