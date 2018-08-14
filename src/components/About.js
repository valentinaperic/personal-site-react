import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import germanyView from '../images/germany-view.jpg'

const About = () => (
  <div className="main-content">
    <img src={germanyView} className="about-me-image" alt="logo" />
    <p className="about-me">
      Hi my name is Valentina! I am a software engineer, community tech leader, and ice cream enthusiast.
      I currently work at ITX building web apps with my team. I also co-lead Girl Develop It - Rochester with my best friend Kristen.
      When I am not coding, I am either attending tech events, playing video games, or playing the violin in my community orchestra.
     </p>
  </div>
);

export default About;
