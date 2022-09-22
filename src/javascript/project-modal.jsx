// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/portfolioModal.css';
/*
  props
  projectInfo
  isShowing
*/

/**
 * Opens the related link based on the target
 *
 * @param {Event} e event
 * @returns {boolean} result
 */
function onRelatedLinkClick(e) {
    e.preventDefault();
    e.stopPropagation();
    window.open(e.target.href, '_blank');
    window.focus();
    return false;
}

export default class ProjectModal extends Component {
    onCloseModal = (event) => {
        const { closeButtonPressed } = this.props;
        closeButtonPressed();
        event.stopPropagation();
    };

    render() {
        const { projectInfo: projectToShow } = this.props;
        const { isShowing } = this.props;
        if (!projectToShow) {
            return <div />;
        }

        const relatedLinksObj = projectToShow.relatedLinks.map((linkObject) => {
            const linkEntries = Object.entries(linkObject)[0];
            const linkAlias = linkEntries[0];
            const linkAddress = linkEntries[1];
            return (
                <div key={linkAlias} className="portfolio-project-modal-links">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onRelatedLinkClick}
                        href={linkAddress}
                    >
                        {linkAlias}
                    </a>
                </div>
            );
        });

        return (
            <div
                className={
                    isShowing
                        ? 'portfolio-project-modal'
                        : 'portfolio-project-modal-hidden'
                }
            >
                <button
                    type="button"
                    className="portfolio-project-modal-content"
                    onClick={(e) => {
                        e.stopPropagation();
                        return false;
                    }}
                >
                    <div
                        type="button"
                        className="portfolio-project-modal-close"
                        onClick={this.onCloseModal}
                    >
                        <div>&times;</div>
                    </div>
                    <div className="portfolio-project-modal-name">
                        {projectToShow.projectName}
                    </div>
                    <img
                        className="portfolio-project-modal-content-hero-image"
                        src={projectToShow.projectThumbnail}
                        alt="Thumbnail"
                    />
                    <div className="portfolio-project-modal-links-wrapper">
                        {relatedLinksObj}
                    </div>
                    <div className="portfolio-project-tile-description-wrapper">
                        <div className="portfolio-project-tile-description">
                            {projectToShow.projectDescription}
                        </div>
                    </div>
                </button>
            </div>
        );
    }
}

ProjectModal.propTypes = {
    closeButtonPressed: PropTypes.func.isRequired,
    projectInfo: PropTypes.shape({
        projectDescription: PropTypes.string.isRequired,
        projectThumbnail: PropTypes.string.isRequired,
        projectName: PropTypes.string.isRequired,
        relatedLinks: PropTypes.arrayOf(PropTypes.shape()).isRequired
    }),
    isShowing: PropTypes.bool.isRequired
};

ProjectModal.defaultProps = {
    projectInfo: undefined
};
