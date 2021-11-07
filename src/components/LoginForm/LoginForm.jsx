import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {

  const history = useHistory();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => {
      return {
        ...prevCredentials,
        [id]: value,
      };
    });
  };

  const postData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      console.log(response.status)
      if (response.status == 400) {
        history.push("/404")
      }
      return response.json();
    } catch(err){
      console.log(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        if (!response.token) {
          history.push("/404")
        }
        else {
        window.localStorage.setItem("token", response.token);  
        window.location = `${window.location.origin}/`  
        }
    });
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">UserName:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
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
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
