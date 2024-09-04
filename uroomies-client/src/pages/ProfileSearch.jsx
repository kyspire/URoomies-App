import React from "react";
import Footer from "../components/BottomBar";
import "../styles/ProfileSearchPage.css";
import HomeHeader from "../components/HomeHeader";
import { useNavigate } from "react-router-dom";

function ProfileSearch() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/searchroommates");
  };

  return (
    <div className="profilesearch-container">
      <div className="home-background-wrapper"></div>
      <HomeHeader />
      <div>
        <div className="home-page-title">
          <h1 className="home-title">Welcome to URoomies!</h1>
          <h2 className="home-description">
            Find other people looking for roommates by selecting from the
            filters below
          </h2>
          <button
            className="search-roommates-button"
            onClick={handleButtonClick}
          >
            Search Roommates
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileSearch;
