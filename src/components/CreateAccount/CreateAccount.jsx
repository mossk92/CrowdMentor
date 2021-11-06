import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateAccount() {

  const history = useHistory();  
  const [accountinfo, setAccountInfo] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    bio: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setAccountInfo((prevAccount) => {
      return {
        ...prevAccount,
        [id]: value,
      };
    });
  };

  const postData = async () => {
    console.log('Im posting a new user to your API');
    const response = await fetch(`${process.env.REACT_APP_API_URL}users/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountinfo),
    });
    console.log("Found response: ", response)
    if (response.status==404) {
      history.push("/404")
    };
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      postData().then((response) => {
        console.log("response form our API ----------", response)
        history.push('/login');
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bio">Biography</label>
        <input
          type="text"
          id="bio"
          placeholder="Tell us about you..."
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>Create Account</button>
    </form>
  );
}

export default CreateAccount;