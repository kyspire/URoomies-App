import React, { useEffect, useState } from "react";
import Footer from "../components/BottomBar";
import Header from "../components/HeaderBar";
import UserIcon from "../assets/UserIcon.svg";
import ToggleSwitch from "../components/ToggleSwitch";
import ConnectionsList from "../components/ConnectionsList";
import "../styles/UserProfile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserBanner(props) {
  return (
    <div className="user-banner">
      <img src={UserIcon} alt="User Profile Picture" className="user-icon" />
      <div className="user-text-wrap">
        <h1>{props.userdata.fname} {props.userdata.lname}</h1> 
        <h2>Year {props.userdata.yearstanding} Studying {props.userdata.specialization}</h2>
      </div>
    </div>
  );
}

function Connections(props) {
  return(
    <div className="connections">
      <h2>Your Connections</h2>
      <ConnectionsList />
    </div>
  );
};

function AboutMe(props) {
  return (
    <div className="about-container">
      <h2>Description</h2>
      <dl className="profile-details">
        <dt>Age</dt>
        <dd>{props.userdata.age}</dd>
        <dt>Gender</dt>
        <dd>{props.userdata.gender}</dd>
        <dt>Specialization</dt>
        <dd>{props.userdata.specialization}</dd>
        <dt>Year of Study</dt>
        <dd>{props.userdata.yearstanding}</dd>
      </dl>
      <div className="looking">
        <h3>Currently looking for roommates?</h3>
        <ToggleSwitch />
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <textarea disabled className="non-editable-textarea" value={props.userdata.introduction}>
        
        </textarea>
      </div>
    </div>
  );
}

function ConnectionsAndMe(props) {
  return (
    <div className="connections-and-me">
      <Connections userdata={props.userdata} />
      <AboutMe userdata={props.userdata}/>
    </div>
  )
}

function LivingHabits(props) {
  return (
    <div className="user-living-habits">
      <h2>Living Habits</h2>
        <textarea disabled className="non-editable-textarea" value={props.userdata.livinghabits}>
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

function UserProfileBody(props) {
  return (
    <div className="user-profile-container">
      <UserBanner userdata={props.userdata}/>
      <ConnectionsAndMe userdata={props.userdata}/>
      <LivingHabits userdata={props.userdata}/>
      <EditProfile />
    </div>

  );
}

function UserProfile(props) {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem(`${props.socket.id}`))?.userid;
    if (userId) {
      console.log("Sending userID:", userId)
      axios.post("http://localhost:7776/userprofile", { userid: userId })
        .then((res) => {
          console.log("Response received:", res.data);
          if (res.data.success) {
            console.log(res.data.data);
            setUserData(res.data.data);
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
      <UserProfileBody userdata={userData}/>
      <Footer />
    </div>
  );
}

export default UserProfile;
