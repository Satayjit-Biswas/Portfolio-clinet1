import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import img from "../../../Assets/light-logo.png";
const Header = () => {
    return (
        <header className="d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-8 logo">
                        <NavLink to="/">
                            <img src={img} className="img-fluid" alt="" />
                        </NavLink>
                    </div>
                    <div className="col-md-9 col-4">
                        <ul id="menu">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <HashLink
                                    smooth
                                    to="/home/#about"
                                    className="nav-link"
                                >
                                    About
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink
                                    smooth
                                    to="/home/#service"
                                    className="nav-link"
                                >
                                    Service
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink
                                    smooth
                                    to="/home/#project"
                                    className="nav-link"
                                >
                                    My Project
                                </HashLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blog" className="nav-link">
                                    blog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <HashLink
                                    smooth
                                    to="/home/#contact"
                                    className="nav-link mr-0"
                                >
                                    Contact
                                </HashLink>
                            </li>
                        </ul>
                        <div className="hamburger-menu">
                            <span className="line-top"></span>
                            <span className="line-center"></span>
                            <span className="line-bottom"></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
