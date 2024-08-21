import React, {useState} from 'react';
import {Section, SectionCard, Tag, Divider} from "@blueprintjs/core";
import {getMonthName, APIGetter} from "./APIGetter";


function Experiences() {
    const [experiences, setExperiences] = useState([]);
    APIGetter(experiences, setExperiences, 'http://127.0.0.1:8000/api/experiences/')

    return (
        <Section
            title={"Experiences"}
            elevation={1}
            style={{marginBottom: '20px'}}
            compact={true}
            className={'public-sans'}
        >
            {experiences.map(experience => (
                <SectionCard key={experience.id}>
                    <h3>
                        {experience.role} at {" "}
                        {experience.company_website ? (
                            <a href={experience.company_website} target="_blank" rel="noopener noreferrer">
                                {experience.company}
                            </a>
                        ) : (
                             experience.company
                        )}
                    </h3>

                    {(experience.start_month && experience.start_year) && (
                        <Tag
                            className={'public-sans bp5-minimal bp5-round bp5-intent-success'}
                            style={{marginBottom: '5px', marginTop: '5px'}}
                        >
                            {getMonthName(experience.start_month)} {experience.start_year} — {experience.is_current ? 'Present' : `${getMonthName(experience.end_month)} ${experience.end_year}`}
                        </Tag>
                    )}
                    {experience.description && <p>{experience.description}</p>}

                    {experience.skills && (
                        <div>
                            <Divider/>
                            {experience.skills.split(',').map(skill => (
                                <Tag
                                    key={skill.trim()}
                                    className="bp5-minimal bp5-round bp5-intent-primary public-sans"
                                    style={{marginRight: '10px'}}>
                                    {skill.trim()}
                                </Tag>
                            ))}
                        </div>
                    )}
                </SectionCard>
            ))}
        </Section>
    );
}

export default Experiences;
