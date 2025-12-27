import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <header className="site-header">
            <nav className="nav">
                <Link to="/" className="brand" aria-label="Home">
                    <span className="brand-mark">MK</span>
                </Link>
                <ul className="nav-links">
                    <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : undefined}>Projects</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}