// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React, { Component } from 'react';
import {
    GithubLogo,
    LinkedInLogo,
    DevpostLogo,
    BowTieMe
} from './project-data/images';
import '../css/home.css';

class HomeContent extends Component {
    render() {
        return (
            <div className="portfolio-home-content">
                <div className="portfolio-home-content-headline">
                    Hi, I&apos;m Johan
                </div>
                <div className="portfolio-home-content-bowtie">
                    <img src={BowTieMe} alt="Cartoon Icon" />
                </div>

                <div className="portfolio-home-content-subline">
                    I&apos;m an Engineer
                </div>
                <div className="portfolio-home-content-icons">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/johanos"
                    >
                        <GithubLogo />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/johanos"
                    >
                        <LinkedInLogo />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://devpost.com/Johanos"
                    >
                        <DevpostLogo />
                    </a>
                </div>
            </div>
        );
    }
}

export default HomeContent;
