// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/portfolioContent.css';
import { projectType } from './project-data/portfolio-project-data';

export default class ProjectTile extends Component {
    handleClick = (event) => {
        const { dataKey, clickEvent } = this.props;
        event.stopPropagation();
        clickEvent(dataKey);
    };

    render() {
        const { project } = this.props;
        return (
            <div className="portfolio-project-tile" onClick={this.handleClick}>
                <img src={project.thumbnail} alt="Project Thumbnail" />
                <div className="portfolio-project-tile-name">
                    {project.name}
                </div>
            </div>
        );
    }
}

ProjectTile.propTypes = {
    dataKey: PropTypes.number.isRequired,
    clickEvent: PropTypes.func.isRequired,
    project: projectType.isRequired
};
