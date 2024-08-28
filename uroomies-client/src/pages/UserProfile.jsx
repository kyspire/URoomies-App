import React from "react";
import Footer from "../components/BottomBar";
import Header from "../components/HeaderBar";
import "../styles/UserProfile.css";

function UserProfileBody() {
  return (
    <div className="user-profile-body">
      <div className="top-border"></div>
      <div className="user-profile-information">
        <div className="user-banner">
          <h2>User banner</h2>
        </div>

        <div className="friends-information-container">
          <div className="friends-list">
            <h2>Friends</h2>
          </div>

          <div className="information-and-about-me">
            <h2>About Me</h2>
          </div>
        </div>

        <div className="living-habits">
          <h2>Living Habits</h2>
        </div>
      </div>
      <div className="bottom-border"></div>
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
