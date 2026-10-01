import { Mail, ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's build something</h2>
        <p className="contact-text">
          Open to internships, collaborations, and hackathon teams. My inbox is always open.
        </p>
        <div className="hero-actions">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            <Mail size={16} /> Email me
          </a>
          <a href={site.github} className="btn" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={16} />
          </a>
          <a href={site.linkedin} className="btn" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}