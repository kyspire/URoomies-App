import React from "react";
import Footer from "../components/BottomBar";
import Header from "../components/HeaderBar";
import "../styles/UserProfile.css";

function UserBanner() {
  return (
    <div className="user-banner">
      <h2>User banner here</h2>
    </div>
  );
}

function FriendsList() {
  return (
    <div className="friends-list">
      <h2>Friends list here</h2>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="user-about-me">
      <h2>About me here</h2>
    </div>
  );
}

function LivingHabits() {
  return (
    <div className="user-living-habits">
      <h2>Living habits here</h2>
    </div>
  )
}

function UserProfileBody() {
  return (
    <div className="user-profile-container">
      <UserBanner />
      <FriendsList />
      <AboutMe />
      <LivingHabits />
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
