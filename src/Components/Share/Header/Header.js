import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import img from "../../../Assets/light-logo.png";
const Header = () => {
    return (
        <header class="d-flex align-items-center">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-3 col-8 logo">
                        <NavLink to="/">
                            <img src={img} class="img-fluid" alt="" />
                        </NavLink>
                    </div>
                    <div class="col-md-9 col-4">
                        <ul id="menu">
                            <li class="nav-item">
                                <NavLink to="/" class="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <HashLink
                                    smooth
                                    to="/home/#about"
                                    class="nav-link"
                                >
                                    About
                                </HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink
                                    smooth
                                    to="/home/#service"
                                    class="nav-link"
                                >
                                    Service
                                </HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink
                                    smooth
                                    to="/home/#project"
                                    class="nav-link"
                                >
                                    My Project
                                </HashLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/blog" class="nav-link">
                                    blog
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <HashLink
                                    smooth
                                    to="/home/#contact"
                                    class="nav-link mr-0"
                                >
                                    Contact
                                </HashLink>
                            </li>
                        </ul>
                        <div class="hamburger-menu">
                            <span class="line-top"></span>
                            <span class="line-center"></span>
                            <span class="line-bottom"></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
