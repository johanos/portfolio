import React, { Component } from 'react';
import '../css/portfolioModal.css';
/*
  props
  projectInfo
  isShowing
*/
  class ProjectModal extends Component {
  constructor(props) {
    super(props);
  }

  onCloseModal = (event) => {
    this.props.closeButtonPressed();
    console.log("here");
    event.stopPropagation();
  }

  onRelatedLinkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(e.target.href, '_blank');
    window.focus();
    return false;
  }

  onDragEv = (e) => {
      debugger
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const projectToShow = this.props.projectInfo; 

    if (!projectToShow) {
        return (<div/>)
    }

    var relatedLinksObj = projectToShow.relatedLinks.map( (linkObject, index) =>  {
        const linkEntries = Object.entries(linkObject)[0];
        const linkAlias = linkEntries[0];
        const linkAddress = linkEntries[1];
        return (
            <div key={index} className="portfolio-project-modal-links">
                <a target="_blank" rel="noopener noreferrer" onClick={this.onRelatedLinkClick} href={linkAddress}>
                {linkAlias}
                </a>
            </div>
        )
    });


    return (
      <div className={this.props.isShowing ? "portfolio-project-modal" : "portfolio-project-modal-hidden"}>
        <div className="portfolio-project-modal-content" onClick={(e)=>{e.stopPropagation(); return false;}}>
            <div className="portfolio-project-modal-close" onClick={this.onCloseModal}>
                <div>
                    &times;
                </div>
            </div>
            <div className="portfolio-project-modal-name"> 
                {projectToShow.projectName}
            </div>
            <img className="portfolio-project-modal-content-hero-image" src={projectToShow.projectThumbnail}/>
            <div className="portfolio-project-modal-links-wrapper">
                {relatedLinksObj}
            </div>
            <div className="portfolio-project-tile-description-wrapper">
                <div className="portfolio-project-tile-description">
                {projectToShow.projectDescription}
                </div>
            </div>

        </div>

      </div>
    );
  }
}

export default ProjectModal;
