import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section id="top" className="section hero" aria-labelledby="hero-title">
            <div className="container">
                <h1 id="hero-title" className="hero-name">Matthew Kuo</h1>
                <p className="hero-title">Building reliable, performant web experiences</p>
                <p className="hero-subtitle">I'm a software engineer focused on shipping polished products with measurable impact.</p>
            </div>
        </section>
    )
}