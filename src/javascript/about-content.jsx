// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React, { Component } from 'react';
import '../css/about.css';
import profilePic from '../resources/Me.jpg';
import resume from '../resources/ResumeJohanos.pdf';

class AboutContent extends Component {
    /**
     * @type {URL }
     */
    resume;

    constructor(props) {
        super(props);

        this.resume = resume;
    }

    handleResumeButtonClick = () => {
        window.open(this.resume);
    };

    render() {
        return (
            <div className="portfolio-about-content">
                <div className="portfolio-about-content-profile-pic-wrapper">
                    <img
                        className="portfolio-about-content-profile-pic"
                        src={profilePic}
                        alt="My Profile Pic"
                    />
                    <button
                        type="button"
                        className="portfolio-about-content-resume-button"
                        onClick={this.handleResumeButtonClick}
                    >
                        Resume
                    </button>
                </div>
                <div className="portfolio-about-content-bio">
                    Currently, I&apos;m a graduate student at Princeton
                    University where I&apos;m learning more about Machine
                    Learning, Computer Vision, and Graphics. Before this I was
                    building awesome experiences at Wayfair&apos;s Research And
                    Development Team Wayfair Next which I joined after
                    graduating Magna Cum Laude from Boston University in 2017
                    <br />
                    <br />I am looking for opportunities that will allow me to
                    grow as a researcher, engineer, and creator so I can make
                    cool stuff happen.
                </div>
            </div>
        );
    }
}

export default AboutContent;
