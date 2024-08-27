import React from "react"
import { useNavigate } from "react-router-dom";
import InstagramIcon from "../assets/InstagramIcon.svg";
import TwitterIcon from "../assets/TwitterIcon.svg";
import InformationIcon from "../assets/InformationIcon.svg";
import "../styles/Footer.css";

function Footer() {
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

export default Footer;