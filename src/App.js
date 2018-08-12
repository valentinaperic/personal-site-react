import React, { Component } from 'react';
import vcHeart from './images/vcHeart.png';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// App Components
import Experience from './components/Experience';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/About" component={About} />
          <Route path="/Experience" component={Experience} />
        </div>
      </Router>
    );
  }
}

const Main = () => (
    <div className="main-content">
      <Logo />
      <div className="main-links">
        <Link to="/About">About</Link> | <Link to="/Experience">Experience</Link>
      </div>
    </div>
);

const Logo = () => (
    <img src={vcHeart} className="about-" alt="logo" />
);



export default App;
