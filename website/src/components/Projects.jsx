import React from 'react'

function ProjectCard({ title, description, tags, images }) {
    return (
        <article className="project-card">
            <div className="project-header">
                <h3 className="project-title">{title}</h3>
            </div>
            <div className="project-content">
                <div className="project-text">
                    <p className="project-description">{description}</p>
                    {tags?.length && (
                        <div className="project-tags">
                            {tags.map((tag) => (
                                <span key={tag} className="project-tag">{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
                {images?.length && (
                    <div className="project-images">
                        {images.map((image, index) => (
                            <div key={index} className="project-image">
                                <img src={image} alt={`${title} screenshot ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </article>
    )
}

export default function Projects() {
    const projects = [
        {
            title: 'Traffic Slice',
            description: 'A desktop privacy monitor that intercepts and analyzes network traffic to detect suspicious data access by installed applications. Built with React frontend and Express backend, using MitMProxy for TLS interception and SQLite for real-time anomaly storage.',
            tags: ['React', 'Express.js', 'SQLite', 'MitMProxy', 'TLS', 'Privacy'],
            images: ['/traffic_1.png', '/traffic_2.png', '/traffic_3.png']
        },
        {
            title: 'Insta Lite',
            description: 'A full-stack social media platform built with MERN stack featuring real-time content streaming via Kafka and intelligent friend recommendations. Designed scalable architecture using AWS RDS, S3, ChromaDB, and Spark for distributed PageRank processing.',
            tags: ['JavaScript', 'MERN', 'Kafka', 'AWS RDS', 'S3', 'Spark'],
            images: ['/instalite_1.png', '/instalite_2.png', '/instalite_3.png']
        },
        {
            title: 'Bytenet Search',
            description: 'A distributed search engine that indexes 200k+ web pages and serves queries with sub-1000ms latency on AWS EC2. Implemented TF-IDF, PageRank, and combined scoring algorithms to optimize search result relevance.',
            tags: ['Java', 'AWS EC2', 'S3', 'Distributed Systems', 'TF-IDF', 'PageRank']
            // No images for this project
        }
    ]

    return (
        <section id="projects" className="section" aria-labelledby="projects-title">
            <div className="container">
                <h2 id="projects-title" className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    Full-stack applications, distributed systems, and AI research projects
                </p>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}