import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";

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
          <Route path="/projectDetails/:projectId">
            <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
