import React from 'react'

function ExperienceItem({ company, role, period, impact }) {
    return (
        <article className="experience-item">
            <header className="experience-header">
                <h3 className="experience-role">{role}</h3>
                <div className="experience-meta">
                    <span className="experience-company">{company}</span>
                    <span className="experience-period">{period}</span>
                </div>
            </header>
            <ul className="experience-impact">
                {impact.map((point, idx) => (
                    <li key={idx}>{point}</li>
                ))}
            </ul>
        </article>
    )
}

export default function Experience() {
    const items = [
        {
            company: 'Acme Corp',
            role: 'Software Engineer',
            period: '2022 — Present',
            impact: [
                'Led migration to React 19; reduced bundle size by 23% via code-splitting and image optimization.',
                'Shipped checkout revamp, increasing conversion by 14% at p95 < 300ms.',
            ],
        },
    ]

    return (
        <section id="experience" className="section" aria-labelledby="experience-title">
            <div className="container">
                <h2 id="experience-title" className="section-title">Experience</h2>
                <div className="stack">
                    {items.map((item) => (
                        <ExperienceItem key={item.company} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}