// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import './css/index.css';
import App from './javascript/app';

import HomeContent from './javascript/home-content';
import AboutContent from './javascript/about-content';
import PortfolioContent from './javascript/portfolio-content';
import * as serviceWorker from './service-worker-file';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="home" element={<HomeContent />} />
                    <Route path="about" element={<AboutContent />} />
                    <Route path="portfolio" element={<PortfolioContent />} />
                </Route>
                <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
