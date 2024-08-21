import {useEffect} from "react";
import axios from "axios";

export function APIGetter(getter, setter, API_URL) {
    useEffect(() => {
        axios.get(API_URL)
            .then(response =>{
                setter(response.data)
            })
            .catch(error =>{
                console.error('There was an error fetching the projects!', error)
            })
    }, [API_URL, setter])
}

export function getMonthName(monthNumber) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Ensure the input is within the valid range
    if (monthNumber < 1 || monthNumber > 12) {
        return "Invalid month number";
    }

    // Subtract 1 because array indices start at 0
    return months[monthNumber - 1];
}



//useEffect(() => {
    //axios.get('http://127.0.0.1:8000/api/projects/')
        //.then(response => {
            //setProjects(response.data);
        //})
        //.catch(error => {
            //console.error('There was an error fetching the projects!', error);
        //});
//}, []);

//useEffect(() => {
    //axios.get('http://127.0.0.1:8000/api/experiences/')
        //.then(response => {
            //setExperiences(response.data);
        //})
        //.catch(error => {
            //console.error('There was an error fetching the experiences!', error);
        //});
//}, []);

//useEffect(() => {
    // Fetch descriptions from the API

    //axios.get('http://127.0.0.1:8000/api/descriptions/')  // Adjust the API endpoint as needed
        //.then(response => {
            // Filter active descriptions
            //const activeDescriptions = response.data.filter(description => description.is_active);
            //setDescriptions(activeDescriptions);

        //})
        //.catch(error => {
            //console.error('There was an error fetching the descriptions!', error);
        //});
//}, []);
