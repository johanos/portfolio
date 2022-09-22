// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './header';

/* css */
import '../css/app.css';
import '../css/body.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="portfolio-body">
                    <Outlet />
                </div>
            </div>
        );
    }
}

export default App;
