import {useEffect, useState} from "react";
import PortfolioNavbar from "../components/PortfolioNavbar";
import {HTMLTable, Tag} from "@blueprintjs/core";
import axios from "axios";
import '../index.css'
export default function Skills() {
    const [skills, setSkills] = useState([])
    const [projects, setProjects] = useState({});

    // Fetch skills data
    useEffect(() => {
        axios.get('http://3.15.166.223:8000/api/skills/')
            .then(response => {
                setSkills(response.data);
                // Extract project IDs
                const projectIds = new Set();
                response.data.forEach(skill => {
                    skill.projects.forEach(id => projectIds.add(id));
                });
                // Fetch project details based on extracted IDs
                if (projectIds.size > 0) {
                    axios.get('http://127.0.0.1:8000/api/projects/', {
                        params: { ids: Array.from(projectIds) }
                    })
                        .then(res => {
                            const projectMap = {};
                            res.data.forEach(project => {
                                projectMap[project.id] = project;
                            });
                            setProjects(projectMap);
                        })
                        .catch(err => {
                            console.error("Error fetching projects:", err);
                        });
                }
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, []);

    return(
        <>
            <PortfolioNavbar/>
            <div
                style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexDirection: 'column',

                }}
                className={'public-sans'}
            >
                <HTMLTable bordered={true} interactive={true} style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>Description</th>
                            <th>Projects</th>
                        </tr>
                    </thead>
                    <tbody>
                    {skills.map(skill => (
                        <tr key={skill.id}>
                            <td>
                                <Tag
                                    className="bp5-minimal bp5-round bp5-intent-success"
                                >
                                    {skill.name}
                                </Tag>
                            </td>
                            <td>{skill.description}</td>
                            <td>
                                {skill.projects.length > 0 ? (
                                    <div>
                                        {skill.projects.map(projectId => (
                                            projects[projectId] ? (
                                                <Tag
                                                    key={projectId}
                                                    className="bp5-minimal bp5-round bp5-intent-primary"
                                                    style={{ marginRight: '10px' }}
                                                >
                                                    {projects[projectId].title}
                                                </Tag>
                                            ) : (
                                                <Tag
                                                    key={projectId}
                                                    className="bp5-minimal bp5-round bp5-intent-warning"
                                                    style={{ marginRight: '10px' }}
                                                >
                                                    Loading...
                                                </Tag>
                                            )
                                        ))}
                                    </div>
                                ) : (
                                    <em>No projects</em>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </HTMLTable>
            </div>
        </>
    );
}
