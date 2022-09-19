import React, { Component } from 'react';
import {PortfolioProjectData} from '../javascript/app'
import ProjectTile from '../javascript/projectTile'
import ProjectModal from '../javascript/projectModal'
import '../css/portfolioContent.css';

class PortfolioContent extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, activeProject: undefined}
    this.portfolioData = PortfolioProjectData;
  }

  closeModal = () => {
    this.setState({
        showModal: false,
        activeProject: undefined
    });
  }

  componentWillMount() {
        window.addEventListener("click", this.closeModal);
  }

  componentWillUnmount() {
        window.removeEventListener("click", this.closeModal);
  }

  handleProjectTileClick = (event) => {
    const chosenProject = this.portfolioData[event];
    this.setState({
      showModal: true,
      activeProject: chosenProject
    })
  }  

  handleModalClosing = () => {
    this.setState ({
      showModal: false
    })
  }

  render() {
    const projects = this.portfolioData.map((project, index) => {
        return (
            <ProjectTile key={index} dataKey={index} projectInfo={project} clickEvent={this.handleProjectTileClick}/>
        )
    })

    const portfolioClass = "portfolio-content";

    return (
      <div className={this.state.showModal ? portfolioClass + "-no-scroll": portfolioClass}>
            {projects}
            <ProjectModal isShowing={this.state.showModal} 
                          closeButtonPressed={this.handleModalClosing}
                          projectInfo={this.state.activeProject} />
      </div>
    );
  }
}

export default PortfolioContent;
