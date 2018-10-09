import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

const Experience = () => (
  <div className="experience-content">
      <Router>
        <div>
        <ExperienceContent />
          <Route exact path="/Experience/Tab1" component={Test} />
          <Route exact path="/Experience/Tab2" component={Test1} />
          </div>
      </Router>
  </div>
);

const ExperienceContent = () => (
  <div className="navigation-bar">
    <ul className="navigation-link-list">
      <li><NavLink to="/Experience/Tab1" activeClassName="selected">Tab</NavLink></li>
      <li><NavLink to="/Experience/Tab2" activeClassName="selected">Tab</NavLink></li>
    </ul>
  </div>
);


const Test = () => (
  <p>tab 1</p>

);

const Test1 = () => (
  <p>tab 2</p>

);

export default Experience;
