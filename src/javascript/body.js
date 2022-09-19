import React, { Component } from 'react';
import {ApplicationStateEnum} from '../javascript/app'
import HomeContent from '../javascript/homeContent'
import AboutContent from '../javascript/aboutContent'
import PortfolioContent from '../javascript/portfolioContent'
import '../css/body.css';

/* props: 
    applicationState
*/
class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio-body">
        {this.props.applicationState === ApplicationStateEnum.home ? <HomeContent/> : null}
        {this.props.applicationState === ApplicationStateEnum.about ? <AboutContent/> : null}
        {this.props.applicationState === ApplicationStateEnum.portfolio ? <PortfolioContent/> : null}
      </div>
    );
  }
}

export default Body;
