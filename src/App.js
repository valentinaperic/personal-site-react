import React, { Component } from 'react';
import vcHeart from './images/vcHeart.png';
import './app.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';


// App Components
import Experience from './components/Experience/Experience.js';
import About from './components/About/About.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Main} />
          <Route exact path="/" component={MainContent} />
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
        <Link to="/About">About</Link> | <Link to="/Experience">Experience</Link> | <a target="_blank" href="https://medium.com/@valentinaperic">Blog</a> 
      </div>
    </div>
);

const MainContent = () => (
  <Typewriter
    options={{
      autoStart: true,
      loop: false,
    }}

    onInit={(typewriter) => {
       typewriter.typeString('Hi, my name is Valentina Peric. ')
         .pauseFor(1000)
       typewriter.typeString('I am a software engineer.')
         .pauseFor(1500)
       typewriter.typeString('<br>')
       typewriter.typeString('I am passionate about writing great code.')
         .pauseFor(2000)
      typewriter.typeString('<br>')
      typewriter.typeString('I am passionate about community')
         .pauseFor(2000)
         .deleteChars(9)
      typewriter.typeString('accessibility')
         .pauseFor(2000)
         .deleteChars(13)
      typewriter.typeString('performance')
         .pauseFor(2000)
         .deleteChars(11)
      typewriter.typeString('responsive design')
         .pauseFor(2000)
         .deleteChars(17)
      typewriter.typeString('intuitive design')
         .pauseFor(2000)
         .deleteChars(16)
      typewriter.typeString('learning.')
      typewriter.typeString('<br>')
      typewriter.typeString('<br>')
      typewriter.typeString("let's build something great")
         .pauseFor(1500)
      typewriter.typeString(' together.')
         .start();
       }}



      />

);


const Logo = () => (
    <img src={vcHeart} className="vc-logo" alt="logo" />
);



export default App;
