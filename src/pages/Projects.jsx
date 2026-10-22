
const projects = [
  {
    number: "01",
    title: "IntelliReq AI",
    description:
      "An AI-powered requirement intelligence platform that analyzes software requirements, identifies ambiguity, detects dependencies, and supports change impact analysis.",
    tech: "React · Python · FastAPI · PostgreSQL",
    link: ""
  },
  {
    number: "02",
    title: "AI Job Portal",
    description:
      "A job portal that uses intelligent matching and recommendation techniques to connect candidates with suitable job opportunities.",
    tech: "Web Development · Machine Learning",
    link: ""
  },
  {
    number: "03",
    title: "QuizNova",
    description:
      "A quiz management system designed to create, organize, and manage quizzes with an easy-to-use interface.",
    tech: "React · JavaScript · Web Development",
    link: ""
  },
  {
    number: "04",
    title: "Smart Taxi Safety System",
    description:
      "An IoT-based taxi safety solution featuring driver monitoring, emergency alerts, and real-time vehicle tracking.",
    tech: "React · Firebase · IoT · OpenCV",
    link: ""
  }
];

function Projects() {
  return (
    <div className="page-container inner-page">
      <p className="eyebrow">SELECTED WORK</p>
      <h1 className="page-title">My Projects<span>.</span></h1>

      <p className="page-description">
        A selection of projects I've built and worked on
        during my learning journey.
      </p>

      <div className="projects-list">
        {projects.map((project) => (
          <div className="project-row" key={project.number}>
            <span className="project-number">
              {project.number}
            </span>

            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <span className="project-tech">
                {project.tech}
              </span>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-arrow"
                aria-label={`View ${project.title}`}
              >
                ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
