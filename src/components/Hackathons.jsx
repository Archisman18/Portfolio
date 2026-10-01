import { hackathons } from '../data/projects'

export default function Hackathons() {
  return (
    <section id="hackathons" className="section section-soft">
      <div className="container">
        <p className="section-label">Hackathons</p>
        <h2 className="section-title">Where I've competed</h2>
        <ul className="timeline">
          {hackathons.map((h) => (
            <li key={h.name} className="timeline-item">
              <h3>{h.name}</h3>
              <p>{h.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}