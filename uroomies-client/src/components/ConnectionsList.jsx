import "../styles/ConnectionsList.css"
import UserIcon from "../assets/UserIcon.svg";
import React from "react";

function ConnectionsList() { //set up with backend
    return(
        <div className="connections-container">
            <div className="connection-item">
                <img src={UserIcon} alt="Profile Picture" className="profile-pic" />
                <span className="connection-name">John Doe</span>
                <span className="status-dot offline"></span>
            </div>
            <div className="connection-item">
                <img src={UserIcon} alt="Profile Picture" className="profile-pic" />
                <span className="connection-name">Jane Smith</span>
                <span className="status-dot offline"></span>
            </div>
            <div className="connection-item">
                <img src={UserIcon} alt="Profile Picture" className="profile-pic" />
                <span className="connection-name">Brandon Choo</span>
                <span className="status-dot offline"></span>
            </div>
            <div className="connection-item">
                <img src={UserIcon} alt="Profile Picture" className="profile-pic" />
                <span className="connection-name">Jin Jung</span>
                <span className="status-dot offline"></span>
            </div>
            <div className="connection-item">
                <img src={UserIcon} alt="Profile Picture" className="profile-pic" />
                <span className="connection-name">Kevin Lu</span>
                <span className="status-dot offline"></span>
            </div>
            <div className="connection-item">
                <img src={UserIcon} alt="Profile Picture" className="profile-pic" />
                <span className="connection-name">Jacob Wang</span>
                <span className="status-dot offline"></span>
            </div>
        </div>
    );
};

export default ConnectionsList;