import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from '../logo.png';

function Nav() {
    const token = window.localStorage.getItem("token")
    
    const [userToken, setuserToken] = useState(token)

    const [isLoggedIn, setIsLoggedIn] = useState(token)

    const logout = () => {
        window.localStorage.removeItem("token")
        setIsLoggedIn(false)        
    } 

    return (
        <nav>
            <div><img src={logo} className="logo" alt="logo"/></div>        
            <div className="options">
                { isLoggedIn 
                    ? ( <div>
                        <Link to="/profile">Your Profile</Link>
                        <Link to="/createproject">Create Project</Link>
                        <Link onClick={logout} to="/">Log Out</Link> 
                    </div> ) : ( <div>
                        <Link to="/createaccount">Create Acccount</Link>
                        <Link to="/about">About</Link>
                        <Link to="/login">Login</Link>
                    </div> )
                }
                </div>
            <div className="Home"><Link to="/">Home</Link></div>       
        </nav>
    );
}

export default Nav;