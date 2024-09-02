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
        <MadeWith />
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

function CurrentDevelopmentsAndFuturePlans() {
  return (
    <div className="future-plans-container">
      <h1 className="future-plans-title">Future Developments</h1>
      <Divider />
      <div className="future-developments">
        <div className="security-updates">
          <h2>Security and Privacy Updates</h2>
          <p>Backend security upgrades for user login and sign-up.</p>
        </div>

        <div className="explicit-language-filtering">
          <h2>Toxic Comment Detection and Explicit Language Filtering</h2>
          <p>
            Detect and delete comments, texts, and posts that contain
            inappropriate language. Users will also be given the option to
            report other users.
          </p>
        </div>

        <div className="chat-updates">
          <h2>More Functionality for Chats</h2>
          <p>Allow users to have the ability to edit and unsend messages.</p>
        </div>

        <div className="user-profile-updates">
          <h2>User Profile Updates</h2>
          <p>
            Enable users to be able to uplaod their own profile picture instead
            of choosing from default ones.
          </p>
        </div>
      </div>
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
      <CurrentDevelopmentsAndFuturePlans />
      <TheCreators />
    </div>
  );
}

function Information() {
  return (
    <div className="information-page-container">
      <Header />
      <InformationBody />
      <Footer />
    </div>
  );
}

export default Information;
