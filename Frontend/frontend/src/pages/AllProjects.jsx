import PortfolioNavbar from '../components/PortfolioNavbar'
import {Button, Divider, Section, SectionCard, Tag} from "@blueprintjs/core";
import {useState} from "react";
import {APIGetter, getMonthName} from "../components/APIGetter";
export default function AllProjects() {
    const [projects, setProjects] = useState([]);
    APIGetter(projects, setProjects, 'http://127.0.0.1:8000/api/projects/');
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
                <Section title={"Projects"} elevation={1} compact={true} style={{marginBottom: '20px'}}>
                    {projects.map(project => (
                        <SectionCard key={project.id}>
                            <h3>{project.title}</h3>

                            {(project.start_month && project.start_year) && (
                                <Tag
                                    className={'public-sans bp5-minimal bp5-round bp5-intent-success'}
                                    style={{marginBottom: '5px', marginTop: '5px'}}
                                >
                                    {getMonthName(project.start_month)} {project.start_year}
                                </Tag>
                            )}

                            <p>{project.description}</p>

                            <div>
                                {project.live_link && (
                                    <Button
                                        intent={'primary'}
                                        className={'bp5-minimal bp5-outlined bp5-small public-sans'}
                                        icon={'share'}
                                        onClick={() => window.open(project.live_link, '_blank', 'noopener,noreferrer')}
                                        style={{marginRight: '10px'}}
                                    >
                                        View Live
                                    </Button>
                                )}
                                {project.repo_link && (
                                    <Button
                                        intent={'primary'}
                                        className={'bp5-minimal bp5-outlined bp5-small public-sans'}
                                        icon={'git-repo'}
                                        onClick={() => window.open(project.repo_link, '_blank', 'noopener,noreferrer')}
                                    >
                                        View Repository
                                    </Button>
                                )}
                            </div>

                            {project.technologies && (
                                <div className="technologies">
                                    <Divider />
                                    {project.technologies.split(',').map(tech => (
                                        <Tag
                                            key={tech.trim()}
                                            className="bp5-minimal bp5-round bp5-intent-primary"
                                            style={{marginRight: '10px'}}
                                        >
                                            {tech.trim()}
                                        </Tag>
                                    ))}
                                </div>
                            )}

                            {project.image && <img src={project.image} alt={project.title} className="project-image" />}
                        </SectionCard>
                    ))}
                </Section>
            </div>
        </>
    );
}
