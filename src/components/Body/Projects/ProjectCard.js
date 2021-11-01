import React from 'react'
import './ProjectCard.css'

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo && (
                        <a className="project-link" href={project.demo}>
                            <div className="link-button">
                                <i classsName="fas fa-globe"></i>Demo
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a className="project-link" href={project.github}>
                            <div className="link-button">
                                <i classsName="fab fa-github"></i>Github
                            </div>
                        </a>
                        
                    )}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag, index) => {
                        return (
                            <label key={index} className="tag">{tag}</label>
                        );
                    })}
                </div>
            </div>
            <img src={project.images} className="project-photo" />
        </div>
    )
}

export default ProjectCard
