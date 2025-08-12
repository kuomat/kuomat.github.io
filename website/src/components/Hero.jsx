import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section id="top" className="section hero" aria-labelledby="hero-title">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 id="hero-title" className="hero-name">Matthew Kuo</h1>
                        <p className="hero-title">Turning data into decisions, code into impact</p>
                        <div className="hero-intro">
                            <p className="hero-description">
                                A senior at Penn studying Computer Science and Robotics.
                            </p>
                            <p className="hero-description">
                                At Amazon, I built AI-powered systems using Java and TypeScript that reduced ticket debugging time by 80%
                                for our organization, and designed serverless pipelines that handle 350M+ daily transactions with minimal overhead.
                            </p>
                            <p className="hero-description">
                                In research, I'm working with Prof. Mayur Naik on computer vision for robotics. We developed SGClip,
                                a model that helps robots understand complex visual scenes by creating structured representations.
                                Our work is being submitted to NeurIPS 2025.
                            </p>
                            <p className="hero-description">
                                Always excited to connect with fellow engineers, researchers, and anyone passionate about building impactful technology. Let's chat!
                            </p>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/mattk.jpg" alt="Matthew Kuo" className="profile-photo" />
                    </div>
                </div>
            </div>
        </section>
    )
}