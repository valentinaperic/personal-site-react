import React, { Component } from 'react';
import vcHeart from './vcHeart.png';
import germanyView from './germany-view.jpg'
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="main-content">
              <Route exact path="/" component={Logo} />
              <Route path="/About" component={About} />
              <Route path="/Experience" component={Experience} />
            <div className="links">
              <Route exact path="/" component={HomeLinks} />
              <Route path="/About" component={AboutLinks} />
              <Route path="/Experience" component={ExperienceLinks} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const Logo = () => (
    <img src={vcHeart} className="about-" alt="logo" />
);

const HomeLinks = () => (
  <div>
    <Link to="/About">About</Link> | <Link to="/Experience">Experience</Link>
  </div>
);

const About = () => (
  <div className="about-content">
    <img src={germanyView} className="about-me-image" alt="logo" />
    <p className="about-me">
    Hi my name is Valentina! I am a software engineer, community tech leader, and ice cream enthusiast.
    I currently work at ITX building web apps with my team. I also co-lead Girl Develop It - Rochester with my best friend Kristen.
     When I am not coding, I am either attending tech events, playing video games, or playing the violin in my community orchestra.
hey test hey test
     </p>
  </div>
);

const AboutLinks = () => (
  <div className="about-links">
     <Link to="/">Main</Link> | <Link to="/About">About</Link> | <Link to="/Experience">Experience</Link>
  </div>
);

const Experience = () => (
    <p className="experience-content">
      this is where i put my experience
    </p>
);

const ExperienceLinks = () => (
  <div>
    <Link to="/">Main</Link> | <Link to="/About">About</Link>
  </div>
);

export default App;
