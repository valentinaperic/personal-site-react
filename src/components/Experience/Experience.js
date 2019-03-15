import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import gdiLogo from '../Experience/gdi-rochester-logo.png';
import gdiSummit from '../Experience/gdi-summit18.JPG';

const Experience = () => (
  <div class="container">
    <div className="experience-content">
        <Router>
          <div>
            <ExperienceContent />
            <Route exact path="/Experience/GirlDevelopIt" component={GirlDevelopIt} />
            <Route exact path="/Experience/100DaysOfCode" component={HundredDaysOfCode} />
          </div>
        </Router>
    </div>
  </div>

);

const ExperienceContent = () => (
  <div className="navigation-bar">
    <ul className="navigation-link-list">
      <li><NavLink to="/Experience/GirlDevelopIt" activeClassName="selected">Girl Develop It</NavLink></li>
      <li><NavLink to="/Experience/100DaysOfCode" activeClassName="selected">100 Days Of Code</NavLink></li>
    </ul>
  </div>
); 

const GirlDevelopIt = () => (
  <div class="container">
    <div class="main-content gdi-content">
      <div class="row gdi-overview">
        <div class="img-container col-md-6">
          <img src={gdiLogo} alt="girl develop it rochester" />
        </div>
        <div class="content col-md-6">
              Girl Develop It is a non-profit organization with a mission to get more women into tech. 
              We accomplish this by providing affordable and judgment free classes in various tech disciplines.
              We also host social events where women can find mentorship, friendship, and networking opportunities.
        </div>
      </div>
      <div class="row leadership">
        <div class="content col-md-6 col-sm-12">
            My time with Girl Develop It spanned from November 2015 until November 2018. I began co-leading the Rochester chapter in June of 2016. I started as a member, then TA, leveled up as to an organizer, and then co-chapter leader.
            It has been a wonderful experience taking on a leadership role with my co-chapter leader Kristen. In conjunction with 
            our organizers, we help put together engaging events for our members. These events include classes where members can sign up and 
            learn web and software development, cowork & coffees where we take on a more laid back approach and work on projects or network, or other social centric events! Girl Develop It taught me a lot about leading and serving the greater Rochester community and for that, I am forever thankful.
        </div>
        <div class="img-container col-md-6 col-sm-12">
          <img src={gdiSummit} className="gdi-img" alt="girl develop it rochester" />
        </div>
      </div>
    </div>
  </div>
);

const HundredDaysOfCode = () => (
  <div class="main-content days-of-code-content">
    <p>
      This is an <a rel="noopener noreferrer" href="https://www.100daysofcode.com/" target="_blank">idea </a> 
      that I saw trending on twitter and I thought it would be a cool project to take up. This idea became a 
      catalyst for building my personal site and other projects. You can view all of my progress 
       <a rel="noopener noreferrer" href="https://twitter.com/search?l=&q=%23100DaysOfCode%20from%3Avalentinacodes&src=typd" target="_blank"> here</a>!
     </p>
  </div>
); 

export default Experience;
