import React from "react";
import Footer from "../components/BottomBar";
import Header from "../components/HeaderBar";
import UserIcon from "../assets/UserIcon.svg";
import ToggleSwitch from "../components/ToggleSwitch";
import ConnectionsList from "../components/ConnectionsList";
import "../styles/UserProfile.css";
import { useNavigate } from "react-router-dom";

function UserBanner() {
  return (
    <div className="user-banner">
      <img src={UserIcon} alt="User Profile Picture" className="user-icon" />
      <div className="user-text-wrap">
        <h1>[FIRST NAME] [LAST NAME]</h1> 
        <h2>[YEAR OF STUDY] [SPECIALIZATION]</h2>
      </div>
    </div>
  );
}

function Connections() {
  return(
    <div className="connections">
      <h2>Your Connections</h2>
      <ConnectionsList />
    </div>
  );
};

function AboutMe() {
  return (
    <div className="about-container">
      <h2>Description</h2>
      <dl className="profile-details">
        <dt>Age</dt>
        <dd>[AGE]</dd>
        <dt>Gender</dt>
        <dd>[GENDER]</dd>
        <dt>Specialization</dt>
        <dd>[SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION][SPECIALIZATION]</dd>
        <dt>Year of Study</dt>
        <dd>[YEAR]</dd>
      </dl>
      <div className="looking">
        <h3>Currently looking for roommates?</h3>
        <ToggleSwitch />
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <textarea disabled class="non-editable-textarea">
        [ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION]
        </textarea>
      </div>
    </div>
  );
}

function ConnectionsAndMe() {
  return (
    <div className="connections-and-me">
      <Connections />
      <AboutMe />
    </div>
  )
}

function LivingHabits() {
  return (
    <div className="user-living-habits">
      <h2>Living Habits</h2>
        <textarea disabled class="non-editable-textarea">
          [LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION]
        </textarea>
    </div>
  )
}

function EditProfile() {
  const navigate = useNavigate();

  return(
    <button type="button" className="edit-btn" onClick={() => navigate("/profilesetup")}>Edit Profile</button>
  );
};

function UserProfileBody() {
  return (
    <div className="user-profile-container">
      <UserBanner />
      <ConnectionsAndMe />
      <LivingHabits />
      <EditProfile />
    </div>

  );
}

function UserProfile() {
  return (
    <div className="user-profile-page-container">
      <Header />
      <UserProfileBody />
      <Footer />
    </div>
  );
}

export default UserProfile;
