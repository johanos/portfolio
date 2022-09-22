// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/portfolioContent.css';
/*
  props 
  projectInfo
*/
export default class ProjectTile extends Component {
    handleClick = (event) => {
        const { dataKey, clickEvent } = this.props;
        event.stopPropagation();
        clickEvent(dataKey);
    };

    render() {
        const { projectInfo } = this.props;
        return (
            <div className="portfolio-project-tile" onClick={this.handleClick}>
                <img
                    src={projectInfo.projectThumbnail}
                    alt="Project Thumbnail"
                />
                <div className="portfolio-project-tile-name">
                    {projectInfo.projectName}
                </div>
            </div>
        );
    }
}

ProjectTile.propTypes = {
    dataKey: PropTypes.number.isRequired,
    clickEvent: PropTypes.func.isRequired,
    projectInfo: PropTypes.shape({
        projectThumbnail: PropTypes.string.isRequired,
        projectName: PropTypes.string.isRequired
    }).isRequired
};
