import React from 'react'

export default function Skills() {
    return (
        <section id="skills" className="section" aria-labelledby="skills-title">
            <div className="container">
                <h2 id="skills-title" className="section-title">Skills</h2>
                <div className="skills-grid">
                    <div>
                        <h3 className="subheading">Core</h3>
                        <ul>
                            <li>React, TypeScript, Node.js</li>
                            <li>Web performance, a11y, testing</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="subheading">Working knowledge</h3>
                        <ul>
                            <li>Python, Go, Postgres</li>
                            <li>GCP/AWS, CI/CD</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="subheading">Learning</h3>
                        <ul>
                            <li>LLM apps, embeddings, RAG</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}