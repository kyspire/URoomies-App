import React from "react";
import "../styles/Information.css";
import Header from "../components/HeaderBar.jsx";
import Footer from "../components/BottomBar.jsx";
import react from "../../src/assets/react.svg";

function AboutTheProject() {
  return (
    <div className="about-project-container">
      <h1 className="about-project-title">About the Project</h1>
      <Divider />
      <div className="about-project-description">
        <p>
          URoomies was developed to provide UBC students with a dedicated
          platform for finding roommates, addressing the challenges faced by the
          university's diverse community of international and commuter students.
          Recognizing that many students struggle to connect with suitable
          roommates, URoomies offers a user-friendly solution that allows
          students to search for and chat with potential roommates based on
          shared living preferences. Our goal is to simplify the process of
          finding living accommodations while fostering new friendships along
          the way.
        </p>
      </div>
    </div>
  );
}

function MadeWith() {
  return (
    <div className="made-with-container">
      <h2 className="made-with-text">Made with</h2>
      <img src={react} alt="React Logo" className="react-logo"></img>
    </div>
  );
}

function TheCreators() {
  return (
    <div className="about-creator-container">
      <h1 className="about-creator-title">The Creators</h1>
      <Divider />
      <CreatorProfile />
    </div>
  );
}

function CreatorProfile() {
  return (
    <div className="creator-profiles-container">
      <div className="creator-profile-container">
        <img className="creator-profile-picture" src="/DjKhaled.jpg"></img>
        <div className="creator-text-container">
          <h2 className="creator-name">Brandon Choo</h2>
          <h3 className="creator-role">Backend Developer</h3>
        </div>
      </div>

      <div className="creator-profile-container">
        <img className="creator-profile-picture" src="/DjKhaled.jpg"></img>
        <div className="creator-text-container">
          <h2 className="creator-name">Jin Jung</h2>
          <h3 className="creator-role">Frontend Developer</h3>
        </div>
      </div>

      <div className="creator-profile-container">
        <img className="creator-profile-picture" src="/DjKhaled.jpg"></img>
        <div className="creator-text-container">
          <h2 className="creator-name">Kevin Lu</h2>
          <h3 className="creator-role">Frontend Developer</h3>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <hr className="custom-divider"></hr>;
}

function InformationBody() {
  return (
    <div className="information-body-container">
      <AboutTheProject />
      <MadeWith />
      <TheCreators />
    </div>
  );
}

function Information() {
  return (
    <div className="information-page-contaner">
      <Header />
      <InformationBody />
      <Footer />
    </div>
  );
}

export default Information;
