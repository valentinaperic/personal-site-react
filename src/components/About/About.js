import React from 'react';
import headshot from '../About/headshot.jpg'

const About = () => (
  <div class="container">
    <div className="about-me-content">
      <div className="about-me-img-container">
        <img src={headshot} className="about-me-img" alt="logo" />
      </div>
      <div className="about-me-bio">
        <h2>I began coding when I was in middle school.</h2>

        I did not realize that I could make it into a career until I got to college.
        There was a lot I had to relearn and I realized a lot has changed. This is something that excited me.
        In the world of technology, one learns quickly that the industry moves <i>quickly. </i>

        So this is how the journey of forever being a student started.
        I attained my degree in computer science in 2016 and I have been coding ever since.

        I am currently full stack with a pull towards towards front end development.
        <p class="interests"> In a nutshell, I am a community driven developer who enjoys making the web intuitive,
        accessible, secure, and fast.
        </p>
          When I am not coding, I am either attending tech events, playing video games, or playing the violin in my community orchestra.
      </div>
    </div>
  </div>
);

export default About;
