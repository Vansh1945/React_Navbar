import React, { useState } from 'react';
import './navbar.css';
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <nav className="main-nav">
            {/* Logo section */}
            <div className="logo">
                <h2>
                    <span>V</span>ansh
                </h2>
            </div>

            {/* Menu section */}
            <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li>
                        <NavLink exact to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service" className={({ isActive }) => (isActive ? "active" : "")}>Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* Social media links */}
            <div className="social-media">
                <ul className="social-media-desktop">
                    <li>
                        <a href="https://www.youtube.com/@vansh9461" target='_blank' rel="noreferrer">
                            <FaYoutube className="youtube" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target='_blank' rel="noreferrer">
                            <FaInstagram className="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#" target='_blank' rel="noreferrer">
                            <FaFacebook className="facebook" />
                        </a>
                    </li>
                </ul>

                {/* Hamburger menu */}
                <div className="hamburger-menu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
