import React, { useEffect, useState } from "react";
import Footer from "../components/BottomBar";
import Header from "../components/HeaderBar";
import UserIcon from "../assets/UserIcon.svg";
import ToggleSwitch from "../components/ToggleSwitch";
import ConnectionsList from "../components/ConnectionsList";
import "../styles/UserProfile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        <textarea disabled className="non-editable-textarea" value="[ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION][ABOUT ME PROFILE DESCRIPTION]">
        
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
        <textarea disabled className="non-editable-textarea" value=" [LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION][LIVING HABITS DESCRIPTION]">
        </textarea>
    </div>
  )
}

function EditProfile() {
  const navigate = useNavigate();

  return(
    <button type="button" className="edit-btn" onClick={() => navigate("/editprofile")}>Edit Profile</button>
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

function UserProfile(props) {

  const [userData, setUserData] = useState({});

  // useEffect(() => {
  //   axios.post("http://localhost:7776/userprofile", JSON.parse(localStorage.getItem(`${props.socket.id}`).userid))
  //     .then((res) => {
  //       if(res.data.success) {
  //         console.log(res.data);
  //         setUserData(res.data);
  //       } else {
  //         alert('Error, something wrong occured.'); 
  //       }
       
  //     })
  // }, [])

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem(`${props.socket.id}`))?.userid;
    if (userId) {
      console.log("Sending userID:", userId)
      axios.post("http://localhost:7776/userprofile", { userid: userId })
        .then((res) => {
          console.log("Response received:", res.data);
          if (res.data.success) {
            console.log(res.data);
            setUserData(res.data);
          } else {
            alert('Error, something wrong occured.');
          }
        })
        .catch((error) => {
          console.log("There was an error", error)
        });
    }
  }, [props.socket.id]);


  return (
    <div className="user-profile-page-container">
      <Header />
      <UserProfileBody />
      <Footer />
    </div>
  );
}

export default UserProfile;
