import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import "./App.css";
import CreateProjectPage from "./pages/CreateProjectPage";
import CreatePledgePage from "./pages/CreatePledgePage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import Four04Page from "./pages/404Page";


function App() {
  return (
    <Router>
    <div>
    <Nav />

    <Switch>
      <Route path="/about">
      <AboutPage />
      </Route>
      <Route path="/404">
      <Four04Page />
      </Route>
      <Route path="/profile">
      <ProfilePage />
      </Route>
      <Route path="/createpledge/:id">
      <CreatePledgePage />
      </Route>
      <Route path="/createproject">
      <CreateProjectPage />
      </Route>
      <Route path="/createaccount">
      <CreateAccountPage />
      </Route>
      <Route path="/project/:id">
      <ProjectPage />
      </Route>
      <Route path="/login">
      <LoginPage />
      </Route>
      <Route path="/">
      <HomePage />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;