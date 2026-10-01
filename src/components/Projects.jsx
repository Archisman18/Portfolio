import { projects } from '../data/projects'

export default function Projects() {
	return (
		<section id="projects" className="section">
			<div className="container">
				<p className="section-label">Projects</p>
				<h2 className="section-title">Things I've built</h2>
				<div className="projects-grid">
					{projects.map((project) => (
						<article key={project.title} className="project-card">
							<div className="project-thumb">
								{project.image ? <img src={project.image} alt="" /> : <span>{project.title.charAt(0)}</span>}
							</div>
							<div className="project-body">
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<div className="skill-tags">
									{project.stack.map((item) => (
										<span key={item} className="tag">
											{item}
										</span>
									))}
								</div>
								<div className="project-links">
									{project.github && <a href={project.github}>GitHub</a>}
									{project.live && <a href={project.live}>Live demo</a>}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
