// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="portfolio-header">
                <div className="portfolio-header-name">
                    Johan Sebastian Ospina Buitrago
                </div>
                <div className="portfolio-header-right">
                    <NavLink
                        to="/home"
                        className={({ isActive, isPending }) => {
                            if (isActive) return 'active';
                            if (isPending) return '';
                            return '';
                        }}
                        href="home"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive, isPending }) => {
                            if (isActive) return 'active';
                            if (isPending) return '';
                            return '';
                        }}
                        href="about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive, isPending }) => {
                            if (isActive) return 'active';
                            if (isPending) return '';
                            return '';
                        }}
                        href="portfolio"
                    >
                        Portfolio
                    </NavLink>
                </div>
            </div>
        );
    }
}
