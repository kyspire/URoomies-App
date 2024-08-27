import "../styles/landing.css";
import React from "react";
import InstagramIcon from "../assets/InstagramIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import InformationIcon from "../assets/InformationIcon.svg";
import { useNavigate } from "react-router-dom";

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

function LandingFooter() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/information");
    }

    return (
        <div className="footer">
            <div className="footer-wrap">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-btn">
                    <img src={InstagramIcon} alt="Instagram" className="footer-icon" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-btn">
                    <img src={TwitterIcon} alt="Twitter" className="footer-icon" />
                </a>
                <button className="footer-btn information" onClick={handleClick}>
                    <img src={InformationIcon} alt="Information" className="footer-icon" />
                </button>
            </div>
        </div>
    );
}

function Landing() {
    return (
        <div className="landing-container">
            <LandingBody />
            <LandingFooter />
        </div>
    );
}

export default Landing;
