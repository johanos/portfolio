// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React, { Component } from 'react';
import PortfolioProjectData from './project-data/portfolio-project-data';
import ProjectTile from './project-tile';
import ProjectModal from './project-modal';
import '../css/portfolio-content.css';

export default class PortfolioContent extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false, activeProject: undefined };
        this.portfolioData = PortfolioProjectData;
    }

    componentDidMount() {
        window.addEventListener('click', this.closeModal);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.closeModal);
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            activeProject: undefined
        });
    };

    handleProjectTileClick = (event) => {
        const chosenProject = this.portfolioData[event];
        this.setState({
            showModal: true,
            activeProject: chosenProject
        });
    };

    handleModalClosing = () => {
        this.setState({
            showModal: false
        });
    };

    render() {
        const { showModal, activeProject } = this.state;
        const projects = this.portfolioData.map((project, index) => {
            return (
                <ProjectTile
                    key={project.name}
                    dataKey={index}
                    project={project}
                    clickEvent={this.handleProjectTileClick}
                />
            );
        });

        const portfolioClass = 'portfolio-content';

        return (
            <div
                className={
                    showModal ? `${portfolioClass}-no-scroll` : portfolioClass
                }
            >
                {projects}
                {showModal ? (
                    <ProjectModal
                        isShowing={showModal}
                        closeButtonPressed={this.handleModalClosing}
                        project={activeProject}
                    />
                ) : null}
            </div>
        );
    }
}
