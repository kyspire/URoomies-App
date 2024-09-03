import React from "react"
import { useNavigate } from "react-router-dom";
import "../styles/HomeHeader.css";
import UserIcon from "../assets/UserIcon.svg"

function HomeHeader() {
    const navigate = useNavigate();

    function handleClickProfile() {
        navigate("/userprofile");
    }

    return (
        <div className="home-header">
            <button className="home-header-button" onClick={handleClickProfile}>
                <img src={UserIcon} className="home-header-icon"></img>
            </button>

            <button className="home-header-button signout-button">
                <div className="signout-icon"></div>
            </button>

            <button className="home-header-button settings-button">
                <div className="settings-icon"></div>
            </button>
        </div>
    );
};

export default HomeHeader;