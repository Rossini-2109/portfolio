
const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript"]
  },
  {
    category: "Frontend Development",
    items: ["HTML", "CSS", "React.js", "Next.js"]
  },
  {
    category: "Backend Development",
    items: [".NET Web API", "REST APIs"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "Docker", "VS Code"]
  }
];

function Skills() {
  return (
    <div className="page-container inner-page">
      <p className="eyebrow">WHAT I WORK WITH</p>
      <h1 className="page-title">Technical Skills<span>.</span></h1>

      <p className="page-description">
        Technologies and tools I've worked with through
        projects, internships, and continuous learning.
      </p>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-row" key={index}>
            <h2>{skill.category}</h2>

            <div className="skill-items">
              {skill.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
