import React from 'react'

function ExperienceItem({ company, role, period, location, technologies, description, highlight, link }) {
    return (
        <article className="experience-item">
            <div className="experience-timeline">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
            </div>
            <div className="experience-content">
                <header className="experience-header">
                    <div className="experience-title-group">
                        <h3 className="experience-role">{role}</h3>
                        <span className="experience-company">{company}</span>
                    </div>
                    <div className="experience-meta">
                        <span className="experience-period">{period}</span>
                        <span className="experience-location">{location}</span>
                    </div>
                </header>

                {highlight && (
                    <div className="experience-highlight">
                        {highlight}
                    </div>
                )}

                <p className="experience-description">{description}</p>

                {technologies?.length && (
                    <div className="experience-technologies">
                        {technologies.map((tech) => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                )}

                {link && (
                    <div className="experience-link">
                        <span className="demo-label">Research Demo:</span>
                        <a href={link.url} target="_blank" rel="noreferrer" className="experience-demo-link">
                            {link.text}
                        </a>
                    </div>
                )}
            </div>
        </article>
    )
}

export default function Experience() {
    const experiences = [
        {
            company: 'Amazon',
            role: 'Software Developer Intern',
            period: 'May 2025 – Aug 2025',
            location: 'Bellevue, WA',
            technologies: ['Java', 'TypeScript', 'AWS Lambda', 'S3', 'Bedrock'],
            highlight: '80% faster ticket triage for 250+ engineers',
            description: 'Built high-throughput MCP servers and a Bedrock-powered chatbot that improves internal tooling efficiency. Designed serverless ETL pipelines handling 350M+ daily checkouts with zero operational overhead, enabling massive scale.'
        },
        {
            company: 'Google X AI Research Lab (Prof. Mayur Naik)',
            role: 'Deep Learning Researcher',
            period: 'Mar 2024 – Present',
            location: 'Philadelphia, PA',
            technologies: ['PyTorch', 'CLIP', 'VideoLLaMA', 'SAM2', 'DDP'],
            highlight: 'NeurIPS 2025 submission',
            description: 'Co-authored research on SGClip, a novel computer vision model for embodied AI that reduces visual errors by 39%. Developed probabilistic scene graph representations and accelerated training by 3x through distributed computing across 9 servers.',
            link: {
                url: 'https://video-fm.github.io/',
                text: 'View VINE Demo'
            }
        },
        {
            company: 'BizzyBots (Wharton-backed startup)',
            role: 'Software Developer Intern',
            period: 'Jun 2024 – Aug 2024',
            location: 'Philadelphia, PA',
            technologies: ['TypeScript', 'tRPC', 'GCP', 'Firestore', 'Redis'],
            highlight: '70+ users, 30% better relevance',
            description: 'Deployed GPT-powered negotiation chatbots enabling dynamic price simulations for 70+ users. Migrated 20+ endpoints to tRPC and implemented Redis caching, boosting offer relevance by 30% and reducing read latency by 35%.'
        },
        {
            company: 'CIS 7000: Large Language Models',
            role: 'Teaching Assistant',
            period: 'Jun 2024 – Dec 2024',
            location: 'Philadelphia, PA',
            technologies: ['PyTorch', 'JAX', 'HuggingFace', 'TPUs', 'LangChain'],
            highlight: '50+ PhD students',
            description: 'Partnered with Google to migrate course infrastructure to JAX/OpenXLA for hardware-agnostic LLM training. Created comprehensive assignments on Transformers, LoRA, and SliceGPT while teaching advanced concepts like attention mechanisms to graduate students.'
        }
    ]

    return (
        <section id="experience" className="section" aria-labelledby="experience-title">
            <div className="container">
                <h2 id="experience-title" className="section-title">Professional Experience</h2>
                <p className="section-subtitle">
                    Building production systems and advancing AI research at scale
                </p>
                <div className="experience-timeline-container">
                    {experiences.map((experience, index) => (
                        <ExperienceItem key={`${experience.company}-${experience.period}`} {...experience} />
                    ))}
                </div>
            </div>
        </section>
    )
}