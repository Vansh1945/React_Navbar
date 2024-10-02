import React, { useState } from 'react';
import './navbar.css';
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    return (
        <>
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="https://www.youtube.com/@vansh9461" target='_vansh'>
                                <FaYoutube className="youtube" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target='_vansh'>
                                <FaInstagram className="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target='_vansh'>
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

            {/* Hero section */}
            <section className="hero-section">
                <p>Welcome to</p>
                <h1>Vansh</h1>
            </section>
        </>
    );
};

export default Navbar;
