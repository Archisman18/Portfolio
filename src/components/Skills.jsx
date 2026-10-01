import { skills } from '../data/projects'

export default function Skills() {
  return (
    <section id="skills" className="section section-soft">
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I work with</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.group} className="skill-card">
              <h3>{s.group}</h3>
              <div className="skill-tags">
                {s.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}