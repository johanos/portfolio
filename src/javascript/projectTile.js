import React, { Component } from 'react';
import '../css/portfolioContent.css';
/*
  props 
  projectInfo
*/
  class ProjectTile extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (event) => {
      event.stopPropagation();
      this.props.clickEvent(this.props.dataKey);
  }

  render() {
    return (
      <div className="portfolio-project-tile" onClick={this.handleClick}>
            <img src={this.props.projectInfo.projectThumbnail}/>
            <div className="portfolio-project-tile-name"> 
                {this.props.projectInfo.projectName}
            </div>
      </div>
    );
  }
}

export default ProjectTile;
