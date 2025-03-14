import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header sticky">
            <nav>
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/playground">Playground:)</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
