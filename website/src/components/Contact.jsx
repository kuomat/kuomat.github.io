import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="section" aria-labelledby="contact-title">
            <div className="container">
                <h2 id="contact-title" className="section-title">Contact</h2>
                <ul className="contact-list">
                    <li><a href="mailto:hello@matthewkuo.dev">Email</a></li>
                    <li><a href="https://www.linkedin.com/in/matthewkuo" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/matthewkuo" target="_blank" rel="noreferrer">GitHub</a></li>
                </ul>
            </div>
        </section>
    )
}