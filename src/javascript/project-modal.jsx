// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/portfolio-modal.css';
import { projectType } from './project-data/portfolio-project-data';

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
        const { project: projectToShow } = this.props;
        const { isShowing } = this.props;
        if (!projectToShow) {
            return <div />;
        }

        const relatedLinksObj = projectToShow.relatedLinks.map((linkObject) => {
            const { name, link } = linkObject;
            return (
                <div key={name} className="portfolio-project-modal-links">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onRelatedLinkClick}
                        href={link}
                    >
                        {name}
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
                <div
                    className="portfolio-project-modal-content-wrapper"
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

                    <div
                        className="portfolio-project-modal-content"
                        onClick={(e) => {
                            e.stopPropagation();
                            return false;
                        }}
                    >
                        <div className="portfolio-project-modal-name">
                            {projectToShow.name}
                        </div>
                        <img
                            className="portfolio-project-modal-content-hero-image"
                            src={projectToShow.thumbnail}
                            alt="Thumbnail"
                        />
                        <div className="portfolio-project-modal-links-wrapper">
                            {relatedLinksObj}
                        </div>
                        <div className="portfolio-project-tile-description-wrapper">
                            <div className="portfolio-project-tile-description">
                                {projectToShow.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProjectModal.propTypes = {
    closeButtonPressed: PropTypes.func.isRequired,
    project: projectType.isRequired,
    isShowing: PropTypes.bool.isRequired
};
