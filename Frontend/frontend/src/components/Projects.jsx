import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the projects!', error);
            });
    }, []);

    return (
        <div className="projects-list">
            {projects.map(project => (
                <div key={project.id} className="project-item">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="technologies">
                        {project.technologies && project.technologies.split(',').map(tech => (
                            <span key={tech.trim()} className="tech-badge">{tech.trim()}</span>
                        ))}
                    </div>
                    {project.image && <img src={project.image} alt={project.title} />}
                    {project.live_link && <a href={project.live_link} target="_blank" rel="noopener noreferrer">View Live</a>}
                    {project.repo_link && <a href={project.repo_link} target="_blank" rel="noopener noreferrer">View Code</a>}
                </div>
            ))}
        </div>
    );
}

export default Projects;
