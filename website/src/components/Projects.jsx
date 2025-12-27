import React, { useRef, useEffect, useState } from 'react'

function ProjectCard({ title, description, tags, images, index }) {
    const cardRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    } else {
                        // Reset animation when scrolling away
                        setIsVisible(false)
                    }
                })
            },
            {
                threshold: 0.3, // Trigger when 30% of the card is visible
                rootMargin: '0px'
            }
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    }, [])

    return (
        <article
            ref={cardRef}
            className={`project-card ${isVisible ? 'in-view' : ''}`}
            data-index={index}
        >
            <div className="project-header">
                <h3 className="project-title">{title}</h3>
            </div>
            <div className="project-content">
                <div className="project-text">
                    <p className="project-description">{description}</p>
                    {tags?.length && (
                        <div className="project-tags">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="project-tag"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                {images?.length && (
                    <div className="project-images">
                        {images.map((image, imageIndex) => (
                            <div
                                key={imageIndex}
                                className="project-image"
                            >
                                <img
                                    src={image}
                                    alt={`${title} screenshot ${imageIndex + 1}`}
                                    onClick={() => window.openImageModal?.(image, title)}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </article>
    )
}

function ImageModal({ image, title, isOpen, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    if (!isOpen || !image) return null

    return (
        <div className="image-modal-overlay" onClick={onClose} style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="image-modal-close" onClick={onClose} aria-label="Close">
                    ×
                </button>
                <img src={image} alt={title} className="image-modal-image" />
            </div>
        </div>
    )
}

export default function Projects() {
    const [modalImage, setModalImage] = useState(null)
    const [modalTitle, setModalTitle] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openImageModal = (image, title) => {
        setModalImage(image)
        setModalTitle(title)
        setIsModalOpen(true)
    }

    const closeImageModal = () => {
        setIsModalOpen(false)
        setTimeout(() => {
            setModalImage(null)
            setModalTitle('')
        }, 300)
    }

    // Expose function globally for image clicks
    useEffect(() => {
        window.openImageModal = openImageModal
        return () => {
            delete window.openImageModal
        }
    }, [])

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
        <>
            <div className="projects-container">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} {...project} index={index} />
                    ))}
                </div>
            </div>
            <ImageModal
                image={modalImage}
                title={modalTitle}
                isOpen={isModalOpen}
                onClose={closeImageModal}
            />
        </>
    )
}