import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../css/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {activeHeader:false};
  }

  handleOptionClick = (anchorLink) => {
    const targetValue = anchorLink.target.getAttribute("state-value");
    
    this.props.onHeaderChange(parseInt(targetValue));
  }

  render() {
    return (
      <div className={ this.state.activeHeader ? "portfolio-header-active" : "portfolio-header" }>
        <div className="portfolio-header-name">Johan Sebastian Ospina Buitrago</div>
        <div className="portfolio-header-right">
          <a onClick={this.handleOptionClick} className={this.props.applicationState === 0 ? "active" : ""} state-value="0" href="#home">Home</a>
          <a onClick={this.handleOptionClick} className={this.props.applicationState === 1 ? "active" : ""} state-value="1" href="#contact">About</a>
          <a onClick={this.handleOptionClick} className={this.props.applicationState === 2 ? "active" : ""} state-value="2" href="#about">Portfolio</a>
        </div>
      </div>
    );
  }
}

export default Header;
