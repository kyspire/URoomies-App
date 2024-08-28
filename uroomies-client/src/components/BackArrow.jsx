import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BackArrow.css";

function BackArrow() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/landing");
    }

    return (
        <>
            <div className="arrow-container" onClick={handleClick}>
                <i className="arrow left"></i>
            </div>
        </>
    )
}

export default BackArrow;