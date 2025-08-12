import React from 'react'

const SkillCategory = ({ title, skills }) => {
    return (
        <div className="skill-category">
            <div className="skill-header">
                <h3 className="skill-title">{title}</h3>
            </div>
            <div className="skill-tags">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    )
}

export default function Skills() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C"]
        },
        {
            title: "Frameworks & Libraries",
            skills: ["React", "Node.js", "PyTorch", "TensorFlow", "Django", "Flask"]
        },
        {
            title: "Cloud & Infrastructure",
            skills: ["AWS", "Docker", "Jenkins", "Apache Spark", "Kafka"]
        },
        {
            title: "Databases & Storage",
            skills: ["PostgreSQL", "MongoDB", "Redis", "S3", "DynamoDB"]
        }
    ]

    return (
        <section id="skills" className="section" aria-labelledby="skills-title">
            <div className="container">
                <h2 id="skills-title" className="section-title">Technical Skills</h2>
                <div className="skills-grid-new">
                    {skillCategories.map((category, index) => (
                        <SkillCategory
                            key={index}
                            title={category.title}
                            skills={category.skills}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}