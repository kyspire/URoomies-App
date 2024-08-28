import React, { useState } from "react";
import "../styles/Upload.css"
import UserIcon from "../assets/UserIcon.svg";
import UploadIcon from "../assets/UploadIcon.svg";

function PictureUpload() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid image file (JPEG, JPG, or PNG).");
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid image file (JPEG, JPG, or PNG).");
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div 
            className="picture-container" 
            onDrop={handleDrop} 
            onDragOver={handleDragOver}
            onClick={() => document.getElementById("upload-input").click()} // Trigger click on hidden file input
        >
            <input
                type="file"
                accept="image/jpeg,image/png,image/jpg"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="upload-input"
            />
            <img
                src={selectedImage || UserIcon}
                alt="User Profile Picture"
                className="user-icon"
            />
            <div className="picture-text">
                <h1>Upload a profile picture</h1>
                <h3>JPEG, JPG, or PNG formats accepted.</h3>
            </div>
            <img src={UploadIcon} alt="Upload" className="upload-icon" />
        </div>
    );
}

export default PictureUpload;
