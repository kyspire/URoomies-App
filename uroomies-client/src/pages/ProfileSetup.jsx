import "../styles/ProfileSetup.css";
import React from 'react';
import Header from '../components/HeaderBar';
import Footer from '../components/BottomBar';
import PictureUpload from "../components/PictureUpload";
import SpecializationList from "../components/SpecializationList";
import YearOfStudySlider from "../components/YearOfStudySlider";
import IntroductionTextbox from "../components/IntroductionTextbox";
import { useNavigate } from "react-router-dom";

function SetupTitle() {
    return (
        <h1 className="setup-title">Finish Setting Up Your Profile</h1>
    );
};

function NameInput() {
    return (
        <div className="name-container">
            <div className="first-name">
                <h2>First Name</h2>
                <h3>This name will appear when other people view your profile.</h3>
                <input type="text" id="fname" placeholder="Enter your first name"/>
            </div>
            <div className="last-name">
                <h2>Last Name</h2>
                <h3>This name will appear when other people view your profile.</h3>
                <input type="text" id="lname" placeholder="Enter your last name"/>
            </div>
        </div>
    );
};

function AboutSelf() { 
    return (
        <div className="about-container">
            <div className="information-container">
                <div className="gender-wrap">
                    <h3>Gender</h3>
                    <div className="gender-option">
                        <input type="radio" name="genderCheck" id="c01" value="Male" required />
                        <label htmlFor="c01">Male</label>
                    </div>
                    <div className="gender-option">
                        <input type="radio" name="genderCheck" id="c02" value="Female" required />
                        <label htmlFor="c02">Female</label>
                    </div>
                    <div className="gender-option">
                        <input type="radio" name="genderCheck" id="c03" value="Other" required />
                        <label htmlFor="c03">
                            <input type="text" name="other-gender" placeholder="Other (specify)" />
                        </label>
                    </div>
                </div>

                <div className="age-wrap">
                    <h3>Age</h3>
                    <input type="number" placeholder="Input age" min="19" required title="Age must be over 18" />
                </div>

                <div className="specialization-wrap">
                    <h3>Specialization</h3>
                    <select id="majors" name="majors" placeholder="your specialization" defaultValue="" required>
                        <SpecializationList />
                    </select>
                </div>

                <div className="year-wrap">
                    <h3>Year of Study</h3>
                    <YearOfStudySlider />
                </div>
            </div>
        </div>
    );
};


function Introduction() {
    return (
        <div className="introduction-wrap">
            <h1>Write a Quick Introduction</h1>
            <h3>Tell your future roommates a little about yourself!</h3>
            <IntroductionTextbox
                placeholder="Write your introduction here..."
            />
        </div>
    );
};

function LivingHabits() {
    return (
        <div className="habits-wrap">
            <h1>Living Habits</h1>
            <h3>So that you can be matched with those alike.</h3>
            <IntroductionTextbox
                placeholder="Describe your living habits..."
            />
        </div>
    );
};

function UpdateProfile() {
    return (
        <div className="update-container">
            <h1>Satisfied?</h1>
            <button>Update Profile</button>
            <h3>You can come back and make changes at anytime.</h3>
        </div>
    );
};

function SetupBody() {
    return (
        <div className="setupbody-container">
            <SetupTitle />
            <NameInput />
            <PictureUpload />
            <AboutSelf />
            <Introduction />
            <LivingHabits />
            <UpdateProfile />
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