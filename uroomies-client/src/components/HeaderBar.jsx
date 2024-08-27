import React from "react"
import { useNavigate } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon.svg";
import "../styles/Header.css";

function Header() { //add toggle for home btn for when they havent set up profile yet
    const navigate = useNavigate();

    function handleClick() {
        navigate("/home"); //add link to home to app.jsx and create the home webpage
    }

    return (
        <div className="header">
            <button className="header-btn home" onClick={handleClick}>
                <img src={HomeIcon} alt="Home" className="header-icon" />
            </button>
        </div>
    );
};

export default Header;