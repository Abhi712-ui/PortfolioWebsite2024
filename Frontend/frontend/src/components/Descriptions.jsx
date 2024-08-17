import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Descriptions = () => {
    const [descriptions, setDescriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch descriptions from the API
        axios.get('http://127.0.0.1:8000/api/descriptions/')  // Adjust the API endpoint as needed
            .then(response => {
                // Filter active descriptions
                const activeDescriptions = response.data.filter(description => description.is_active);
                setDescriptions(activeDescriptions);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the descriptions!', error);
                setError('There was an error fetching the descriptions.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading descriptions...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {descriptions.map(description => (
                <p key={description.id}>{description.description}</p>
            ))}
        </div>
    );
};

export default Descriptions;
