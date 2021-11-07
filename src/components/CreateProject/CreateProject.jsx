import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function CreateProject() {

  const token = window.localStorage.getItem("token")

  const [isLoggedIn, setIsLoggedIn] = useState(token)

  const history = useHistory();  

  const [projectinfo, setProjectInfo] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    is_open: "",
    category: "",
    location: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setProjectInfo((prevProject) => {
      return {
        ...prevProject,
        [id]: value,
      };
    });
  };

  const postData = async () => {
    console.log('Im posting a project to your API');
    const token = window.localStorage.getItem('token');
    console.log("What is token: ", token)
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: 'post',
      headers: {
        "Authorization": `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectinfo),
    });
    console.log("Found response: ", response)
    if (response.status==404) {
      history.push("/404")
    };
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("token")) {
      postData().then((response) => {
        if (response.status == 404) {
          history.push("/404")
        }
        else {
        history.push('/');
        }
      });
    }
  };

  return (
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
      <div>
        { isLoggedIn 
          ? ( <div>
            <button type="submit" >Create Project</button>
          </div> ) : ( <div>
            <Link className="buttonlink" to="/login">Login</Link>
          </div> )
        }
      </div>
    </form>
  );
}

export default CreateProject;