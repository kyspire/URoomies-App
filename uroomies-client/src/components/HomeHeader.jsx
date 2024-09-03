import React from "react"
import { useNavigate } from "react-router-dom";
import "../styles/HomeHeader.css";
import ProfileIcon from "../assets/UserIcon.svg"
import GearIcon from "../assets/GearIcon.svg"
import Logout from "../assets/Logout.svg"
import ChatIcon from "../assets/ChatIcon.svg"

function HomeHeader() {
    const navigate = useNavigate();

    function handleClickProfile() {
        navigate("/userprofile");
    }

    return (
        <div className="home-header">

            <button className="home-header-button signout-button">
                <img src={Logout} className="home-header-icon"></img>
            </button>

            <button className="home-header-button settings-button">
                <img src={GearIcon} className="home-header-icon"></img>
            </button>

            <button className="home-header-button chat-button">
                <img src={ChatIcon} className="home-header-icon"></img>
            </button>

            <button className="home-header-button profile-button" onClick={handleClickProfile}>
                <img src={ProfileIcon} className="home-header-icon"></img>
            </button>
        </div>
    );
};

export default HomeHeader;