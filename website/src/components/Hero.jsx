import React from 'react'
import { Mail, Linkedin, Github, FileText } from 'lucide-react'

export default function Hero() {
    return (
        <>
            <section id="top" className="section hero" aria-labelledby="hero-title">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 id="hero-title" className="hero-name">Matthew Kuo</h1>
                            <p className="hero-title">Incoming SWE @ Stripe | Deep Learning Researcher @ UPenn</p>
                            <div className="hero-intro">
                                <p className="hero-description">
                                    At Penn, I'm working with Prof. Mayur Naik on computer vision for robotics. We developed SGClip,
                                    a model that helps robots understand complex visual scenes by generating structured representations.
                                    This work is a <strong>NeurIPS 2025 Spotlight</strong> paper — <a href="https://video-fm.github.io/" target="_blank" rel="noopener noreferrer">see the demo</a> and <a href="https://arxiv.org/abs/2510.15963" target="_blank" rel="noopener noreferrer">read the paper</a>!
                                </p>
                                <p className="hero-description">
                                    Previously, I was a Software Engineer Intern at <strong>Amazon</strong> (Summer 2025), where I built chatbots and MCP servers in Java and TypeScript that reduced ticket debugging time by <strong>80%</strong>, and designed serverless pipelines handling 350M+ daily transactions.
                                </p>
                                <p className="hero-description">
                                    Always excited to connect with fellow engineers, researchers, and anyone passionate about building impactful technology. Let's chat!
                                </p>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src="/mattk.jpeg" alt="Matthew Kuo" className="profile-photo" />
                            <div className="hero-contact">
                                <a href="mailto:mkuo@seas.upenn.edu" className="hero-contact-link">
                                    <Mail className="hero-contact-icon" strokeWidth={2.5} />
                                    <span className="hero-contact-label">Email</span>
                                </a>
                                <a href="https://www.linkedin.com/in/kuomat/" target="_blank" rel="noreferrer" className="hero-contact-link">
                                    <Linkedin className="hero-contact-icon" strokeWidth={2.5} />
                                    <span className="hero-contact-label">LinkedIn</span>
                                </a>
                                <a href="https://github.com/kuomat" target="_blank" rel="noreferrer" className="hero-contact-link">
                                    <Github className="hero-contact-icon" strokeWidth={2.5} />
                                    <span className="hero-contact-label">GitHub</span>
                                </a>
                                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hero-contact-link">
                                    <FileText className="hero-contact-icon" strokeWidth={2.5} />
                                    <span className="hero-contact-label">Resume</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}