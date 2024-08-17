import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Experiences() {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/experiences/')
            .then(response => {
                setExperiences(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the experiences!', error);
            });
    }, []);

    return (
        <div className="experiences-list">
            {experiences.map(experience => (
                <div key={experience.id} className="experience-item">
                    <h3>{experience.role} at <a href={experience.company_website} target="_blank" rel="noopener noreferrer">{experience.company}</a></h3>
                    <p>{experience.start_date} — {experience.is_current ? 'Present' : experience.end_date}</p>
                    <p>{experience.description}</p>
                    <div className="skills">
                        {experience.skills && experience.skills.split(',').map(skill => (
                            <span key={skill.trim()} className="skill-badge">{skill.trim()}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experiences;
