import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header sticky glass">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">
                            <button className="nav-button">Home</button>
                        </Link>
                    </li>
                    <li className="nav-item"><Link to="/projects">Projects</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact Me</Link></li>
                    <li className="nav-item"><Link to="/about">About</Link></li>
                    <li className="nav-item"><Link to="/playground">Playground :)</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
