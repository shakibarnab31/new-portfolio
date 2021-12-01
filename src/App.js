import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects-page">
            <Projects></Projects>
          </Route>
          <Route path="/contact-page">
            <Contact></Contact>
          </Route>
          <Route path="/projectDetails/:projectId">
            <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
