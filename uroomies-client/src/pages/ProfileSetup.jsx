import "../styles/ProfileSetup.css";
import React from 'react';
import Header from '../components/HeaderBar' //CREATE THIS
import Footer from '../components/BottomBar';
import { useNavigate } from "react-router-dom";

function SetupTitle() {
    return (
        <div></div>
    );
};

function NameInput() {
    return (
        <div></div>
    );
};

function PictureUpload() {
    return (
        <div></div>
    );
};

function AboutSelf() {
    return (
        <div></div>
    );
};

function LivingHabits() {
    return (
        <div></div>
    );
};

function Satisfied() {
    return (
        <div></div>
    );
};

function SetupBody() {
    return (
        <div className="setupbody-container">
            <SetupTitle />
            <NameInput />
            <PictureUpload />
            <AboutSelf />
            <LivingHabits />
            <Satisfied />
        </div>
    );
};

function ProfileSetup() {
    return (
        <div className="profilesetup-container">
            <Header />
            <SetupBody />
            <Footer />
        </div>
    );
};

export default ProfileSetup;