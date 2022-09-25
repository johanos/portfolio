// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React, { Component } from 'react';
import '../css/about.css';
import { Resume } from './project-data/documents';
import { Me } from './project-data/images';

class AboutContent extends Component {
    /**
     * @type {URL }
     */
    resume;

    constructor(props) {
        super(props);

        this.resume = Resume;
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
                        src={Me}
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
                    Currently, I&apos;m a Research & Development Engineer III at
                    <a
                        href="https://www.markforged.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}
                        Markforged
                    </a>
                    . I came to my current role from
                    <a
                        href="https://www.ptc.com/en/technologies/augmented-reality"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}
                        PTC - Vuforia{' '}
                    </a>
                    where I was a Senior Engineer who worked on AR/VR and
                    Computer Vision technologies such as the Vuforia Model
                    Target Generator. Before that, I got my first job building
                    awesome experiences at
                    <a
                        href="https://www.aboutwayfair.com/company-news/wayfair-announces-opening-of-research-and-development-laboratory"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {' '}
                        Wayfair&apos;s{' '}
                    </a>
                    Research And Development Team.
                    <br />
                    <br />
                    I hold a Master&apos;s of Science in Computer Science from
                    Princeton University and a Bachelor&apos;s of Science from
                    Boston University (Magna Cum Laude). My domain expertise
                    lies in 3D Graphics, Machine Learning, Computer Vision, and
                    (of course) Software Engineering.
                    <br />
                    <br />I am always looking out for opportunities that will
                    allow me to grow as a engineer, creator, and researcher so I
                    can make cool stuff happen.
                </div>
            </div>
        );
    }
}

export default AboutContent;
