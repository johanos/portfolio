import React, { Component } from 'react';
import '../css/about.css';
import profilePic from '../resources/Me.jpg'
import resume from '../resources/ResumeJohanos.pdf'
class AboutContent extends Component {
  constructor(props) {
    super(props);
    this.state = {activeHeader: false}
  }

  handleResumeButtonClick = () => {
    window.open(resume);
  }

  render() {
    return (
      <div className="portfolio-about-content">
        <div className="portfolio-about-content-profile-pic-wrapper">
            <img className="portfolio-about-content-profile-pic" src={profilePic}/>
            <div className="portfolio-about-content-resume-button" onClick={this.handleResumeButtonClick}>
                Resume
            </div>
        </div>
        <div className="portfolio-about-content-bio"> 
          Currently, I'm a graduate student at Princeton University where I'm learning more about Machine Learning, Computer Vision, and Graphics. 
          Before this I was building awesome experiences at Wayfair's Research And Development Team Wayfair Next which I joined after graduating Magna Cum Laude from Boston University in 2017
          <br/>
          <br/>
          I am looking for opportunities that will allow me to grow as a researcher, engineer, and creator so I can make cool stuff happen. 
        </div>    
      </div>
    );
  }
}

export default AboutContent;
