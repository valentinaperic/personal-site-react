import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Experience = () => (
  <div className="experience-content">
      <Router>
        <div>
          <Route path="/Experience" component={ExperienceContent} />
          <Route path="/Experience/Tab1" component={Test} />
          <Route path="/Experience/Tab2" component={Test1} />
        </div>
      </Router>
  </div>


);

const ExperienceContent = () => (
  <div className="navigation-bar">
    <ul className="navigation-link-list">
      <li><Link exact to="/">Main Tab</Link></li>
      <li><Link to="/Experience/Tab1" activeClassName="active">Tab</Link></li>
      <li><Link to="/Experience/Tab2" activeClassName="active">Tab</Link></li>
      <li><Link to="/tab-3">Tab</Link></li>
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
