import "../styles/landing.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from  "../components/BottomBar.jsx";

function LandingBody() {
    return (
        <div className="body">
            <h1>URoomies</h1>
            <h2>Find and connect with roommates on and off campus.</h2>
            <div className="btn-wrap">
                <button type="button" className="landing-btn">Login</button>
                <button type="button" className="landing-btn">Sign Up</button>
            </div>
        </div>
    );
}

function Landing() {
    return (
        <div className="landing-container">
            <LandingBody />
            <Footer />
        </div>
    );
}

export default Landing;
