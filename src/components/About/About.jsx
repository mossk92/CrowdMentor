import React from "react";
import "./About.css";

function About() {
    return (
        <div>
            <h1>Welcome to CrowdMentor</h1>
            <h2>Linking dreamers to acheivers</h2>  
            <p>CrowdMentor aims to provide a platform to advertise development areas that users are looking to improve on (such as soft skills, leadership, physical work, technical work etc.)</p>   
            <p>Project Owners: Those with specific skill sets to develop</p>
            <p>Crowdfunders: Those with skills and time to mentor/tutor</p>
            <p>Example:</p>
            <ul>
                <li>Project Owner: User adds a project that says they are looking to learn Python with a specific interest in being able to build a game</li>
                <li>Crowdfunders: Search by their skills to find a match that they are comfortable with. They can then pledge time to assist (such as 4x 1hr sessions)</li>
            </ul>
        </div>          
    )     
}

export default About;