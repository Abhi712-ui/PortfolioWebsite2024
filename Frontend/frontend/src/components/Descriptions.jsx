import React, { useState } from 'react';
import '@blueprintjs/core/lib/css/blueprint.css'
import {Callout} from "@blueprintjs/core"
import {APIGetter} from "./APIGetter";
const Descriptions = () => {
    const [descriptions, setDescriptions] = useState([]);
    APIGetter(descriptions, setDescriptions, 'http://3.15.166.223:8000/api/descriptions/')
    const currentDescription = descriptions.filter(description => description.is_active)

    return (
        <Callout className={'public-sans'}>
            {currentDescription.map(description => (
                <p key={description.id} style={{textAlign: 'center', fontSize: '18px'}}>
                    {description.description}
                </p>
            ))}
        </Callout>
    );
};

export default Descriptions;
