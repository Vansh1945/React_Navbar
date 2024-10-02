import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="hero-section">
                <p>Welcome to</p>
                <h1>Vansh</h1>
            </section>
        </>
    );
};

const About = () => {
    return (
        <>
            <Navbar />
            <section className="hero-section">
                <p>Welcome to</p>
                <h1>About Page</h1>
            </section>
        </>
    );
};

const Service = () => {
    return (
        <>
            <Navbar />
            <section className="hero-section">
                <p>Welcome to</p>
                <h1>Service Page</h1>
            </section>
        </>
    );
};

const Contact = () => {
    return (
        <>
            <Navbar />
            <section className="hero-section">
                <p>Welcome to</p>
                <h1>Contact Page</h1>
            </section>
        </>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default App;
