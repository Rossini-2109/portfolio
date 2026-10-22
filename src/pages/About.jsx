
function About() {
  return (
    <div className="page-container inner-page">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h1 className="page-title">About Me<span>.</span></h1>

      <div className="about-layout">
        <div>
          <h2>A little about myself</h2>
        </div>

        <div className="about-content">
          <p>
            I'm Rossini J, a Computer Science Engineering
            student with an interest in full stack
            development and modern web technologies.
          </p>

          <p>
            I enjoy working on projects that combine
            creativity with technical problem-solving.
            My experience includes building web applications,
            working with databases, and exploring AI-based
            solutions.
          </p>

          <p>
            My goal is to become a skilled software developer
            and contribute to meaningful products while
            continuing to improve my technical knowledge.
          </p>
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="about-layout">
        <h2>Education</h2>

        <div>
          <div className="detail-row">
            <div>
              <h3>B.E. Computer Science and Engineering</h3>
              <p>S.A. Engineering College</p>
            </div>
            <span>2023 — 2027</span>
          </div>

          <div className="detail-row">
            <div>
              <h3>Higher Secondary Education</h3>
              <p>C.S.I. Bains School</p>
            </div>
            <span>2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
