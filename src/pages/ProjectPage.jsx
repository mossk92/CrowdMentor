import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function ProjectPage() {

    const token = window.localStorage.getItem("token")

    const [isLoggedIn, setIsLoggedIn] = useState(token)

    const history = useHistory()

    const [projectData, setProjectData] = useState({ pledges: [] });

    const { id: project_id } = useParams();

    const [isEditing, setIsEditing] = useState(false);
    
    const [userToken, setuserToken] = useState(token)

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${project_id}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setProjectData(data);
        });
    }, [ project_id ]);

    const handleChange = (e) => {
        const { id, value } = e.target
        console.log("We are updating the", id, " to be: ", value)
        setProjectData({
            ...projectData,
            [id]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch(`
            ${process.env.REACT_APP_API_URL}projects/${project_id}`, {
                method: "put",
                headers: {
                    "Authorization": `Token ${localStorage.getItem(`token`)}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: projectData.title,
                    description: projectData.description,
                    goal: projectData.goal,
                    image: projectData.image,
                    is_open: projectData.is_open,
                    category: projectData.category,
                    location: projectData.location
                }),
            })
    }

    const deleteProject = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}projects/${project_id}/`, {
            method: "delete",
            headers: {
                "Authorization": `Token ${localStorage.getItem('token')}`
            }
        })
        history.push('/')
    }

    const ReadProject = () => {
        return (
            <div id="pageframe">
                <div id="buttonsummary">
                    { isLoggedIn 
                        ? ( <div>
                            <button id="deletebutton" onClick={deleteProject}>Delete Project</button>
                            <button className="buttonlink" onClick={() => setIsEditing(true)}>Edit Project</button>
                        </div> ) : ( <div>
                            <Link to="/login">Login</Link>
                        </div> )
                    }                    
                </div>
                <h2>{projectData.title}</h2>
                <h6>Created at: {projectData.date_created}</h6>
                <h6>{`Status: ${projectData.is_open}`}</h6>  
                <h4>Category: {projectData.category}</h4>
                <h4>Location: {projectData.location}</h4>                
                <h5>{projectData.description}</h5>
                <h3>Pledges (Goal of {projectData.goal} hours):</h3>
                <ul>
                    {projectData.pledges.map((pledgeData, key) => {
                        return (
                            <li key={key}>
                            {pledgeData.amount} hours (supported by user {pledgeData.supporter}): {pledgeData.comment}
                            </li>
                        );
                })}
                </ul>   
                <Link className="buttonlink" to={`/createpledge/${project_id}`}>Pledge</Link>                   
            </div>
        );
    }

    return (
        <div>
        { localStorage.getItem('token')
            && isEditing === false
        }
            <div id="pageframe">
                {
                    isEditing
                    ? (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="title">Title:</label>
                                <input
                                type="text"
                                id="title"
                                placeholder="Describe what you want"
                                onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="description">Description:</label>
                                <textarea
                                type="text"
                                id="description"
                                placeholder="Add details to describe the requirement"
                                onChange={handleChange}
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="Goal">Goal:</label>
                                <input
                                type="number"
                                id="goal"
                                placeholder="Goal (Hours)"
                                onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="image">Image Link:</label>
                                <input
                                type="url"
                                id="image"
                                placeholder="Image Link (URL)"
                                onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="is_open">Open?</label>
                                <input
                                type="text"
                                id="is_open"
                                placeholder="true"
                                onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="category">Category:</label>
                                <input
                                type="text"
                                id="category"
                                placeholder="Category"
                                onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="location">Location:</label>
                                <input
                                type="text"
                                id="location"
                                placeholder="Location"
                                onChange={handleChange}
                                />
                            </div>
                            <button type="submit" onClick={handleSubmit}>Update</button>
                            <button onClick={() => setIsEditing(false)}>Cancel</button>
                        </form>
                    )
                    : <ReadProject />
                }                    
            </div>
        </div>
    );
}

export default ProjectPage;