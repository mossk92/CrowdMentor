import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function CreatePledge() {

  const history = useHistory();  
  
  const { id } = useParams();

  const [pledgeinfo, setpledgeinfo] = useState({
    amount: "",
    comment: "",
    project_id: id,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setpledgeinfo((prevPledge) => {
      return {
        ...prevPledge,
        [id]: value,
      };
    });
  };

  const postData = async () => {
    const token = window.localStorage.getItem('token');
    console.log("What is token: ", token)
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: 'post',
      headers: {
        "Authorization": `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pledgeinfo),
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
        console.log("response form our API ----------", response)
        history.goBack()        
      });
    }


  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Pledge:</label>
        <input
          type="number"
          id="amount"
          placeholder="Hours"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment:</label>
        <input
          type="text"
          id="comment"
          placeholder="Add a pep talk!"
          onChange={handleChange}
        />
      </div>
        <button type="submit" >Submit Pledge</button>
      </form>
    );
  }

export default CreatePledge;