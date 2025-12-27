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
                                    I'm an incoming Software Engineer at <strong>Stripe</strong> and a <strong>NeurIPS 2025 Spotlight</strong> author (<a href="https://arxiv.org/abs/2510.15963" target="_blank" rel="noreferrer">Paper</a>, <a href="https://video-fm.github.io/" target="_blank" rel="noreferrer">Demo</a>) at the <strong>University of Pennsylvania</strong>. My work sits at the intersection of AI research and systems engineering, ranging from developing foundation models for robotic vision to architecting serverless pipelines that handled <strong>350M+ daily transactions</strong> at <strong>Amazon</strong>.
                                </p>
                            </div>

                            {/* Experience Grid */}
                            <div className="experience-grid">
                                <div className="experience-item-grid">
                                    <div className="experience-logo-wrapper">
                                        <img src="/stripe.webp" alt="Stripe" className="experience-logo-icon" />
                                        <div className="experience-logo">Stripe</div>
                                    </div>
                                    <div className="experience-info">
                                        <div className="experience-role-grid">Incoming SWE</div>
                                        <div className="experience-date">2026</div>
                                    </div>
                                </div>
                                <div className="experience-item-grid">
                                    <div className="experience-logo-wrapper">
                                        <img src="/penn.png" alt="UPenn" className="experience-logo-icon" />
                                        <div className="experience-logo">UPenn</div>
                                    </div>
                                    <div className="experience-info">
                                        <div className="experience-role-grid">Deep Learning Researcher</div>
                                        <div className="experience-date">2024 – Present</div>
                                    </div>
                                </div>
                                <div className="experience-item-grid">
                                    <div className="experience-logo-wrapper">
                                        <img src="/neurips.png" alt="NeurIPS" className="experience-logo-icon" />
                                        <div className="experience-logo">NeurIPS</div>
                                    </div>
                                    <div className="experience-info">
                                        <div className="experience-role-grid">2025 Spotlight</div>
                                        <div className="experience-date">ESCA Paper</div>
                                    </div>
                                </div>
                                <div className="experience-item-grid">
                                    <div className="experience-logo-wrapper">
                                        <img src="/amazon.webp" alt="Amazon" className="experience-logo-icon" />
                                        <div className="experience-logo">Amazon</div>
                                    </div>
                                    <div className="experience-info">
                                        <div className="experience-role-grid">SWE Intern</div>
                                        <div className="experience-date">Summer 2025</div>
                                    </div>
                                </div>
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