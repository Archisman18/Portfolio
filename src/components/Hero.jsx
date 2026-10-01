import { ArrowUpRight, Download } from 'lucide-react'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="section-label reveal">Building ideas,<br />one commit at a time</p>
        <h1 className="hero-title reveal" style={{ animationDelay: '0.1s' }}>
          {site.name}.
        </h1>
        <p className="hero-role reveal" style={{ animationDelay: '0.2s' }}>
          {site.role}
        </p>
        <p className="hero-tagline reveal" style={{ animationDelay: '0.3s' }}>
          {site.tagline}
        </p>
        <div className="hero-actions reveal" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn btn-primary">
            View projects <ArrowUpRight size={16} />
          </a>
          <a href={site.resume} className="btn" download>
            Let's connect <Download size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}