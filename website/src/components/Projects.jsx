import React from 'react'

function ProjectCard({ title, description, tags }) {
    return (
        <article className="card project-card">
            <h3 className="card-title">{title}</h3>
            <p className="card-body">{description}</p>
            {tags?.length ? (
                <ul className="tags">
                    {tags.map((tag) => (
                        <li key={tag} className="tag">{tag}</li>
                    ))}
                </ul>
            ) : null}
        </article>
    )
}

export default function Projects() {
    const sample = [
        {
            title: 'Performance Dashboard',
            description: 'Aggregated Core Web Vitals and API latency to inform product decisions. -28% p95 latency.',
            tags: ['React', 'Vite', 'Node.js']
        },
        {
            title: 'Design System',
            description: 'Built an accessible component library with tokens and theming; cut UI defects by 35%.',
            tags: ['Accessibility', 'Design Tokens', 'Storybook']
        },
    ]

    return (
        <section id="projects" className="section" aria-labelledby="projects-title">
            <div className="container">
                <h2 id="projects-title" className="section-title">Projects</h2>
                <div className="grid">
                    {sample.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>
            </div>
        </section>
    )
}