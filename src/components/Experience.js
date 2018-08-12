import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Experience = () => (
    <div className="main-content">
      <ul className="navigation-bar">
        <li><NavLink exact to="/">Main Tab</NavLink></li>
        <li><NavLink to="/tab-1">Tab</NavLink></li>
        <li><NavLink to="/tab-2">Tab</NavLink></li>
        <li><NavLink to="/tab-3">Tab</NavLink></li>
      </ul>
    </div>
);

export default Experience;
