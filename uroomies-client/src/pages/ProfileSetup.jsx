import React, { useState } from 'react';
import Header from '../components/HeaderBar';
import Footer from '../components/BottomBar';
import PictureUpload from "../components/PictureUpload";
import SpecializationList from "../components/SpecializationList";
import YearOfStudySlider from "../components/YearOfStudySlider";
import IntroductionTextbox from "../components/IntroductionTextbox";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../styles/ProfileSetup.css";

function ProfileSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userid: 0,
    firstName: "",
    lastName: "",
    gender: "",
    age: 0,
    majors: "",
    yearOfStudy: 0,
    introduction: "",
    livingHabits: "",
    profilePicture: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (imageData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      profilePicture: imageData,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:7776/profile-setup', formData)
      .then((res) => {
        if (res.data.success) {
          alert("Profile setup successful!");
          navigate("/profile-summary");
        } else {
          alert("There was an error setting up your profile. Please try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="profilesetup-container">
      <Header />
      <form className="setupbody-container" onSubmit={handleSubmit}>
        <h1 className="setup-title">Finish Setting Up Your Profile</h1>

        <div className="name-container">
          <div className="first-name">
            <h2>First Name</h2>
            <h3>This name will appear when other people view your profile.</h3>
            <input
              type="text"
              id="fname"
              name="firstName"
              placeholder="Enter your first name"
              onChange={handleChange}
              value={formData.firstName}
              required
            />
          </div>
          <div className="last-name">
            <h2>Last Name</h2>
            <h3>This name will appear when other people view your profile.</h3>
            <input
              type="text"
              id="lname"
              name="lastName"
              placeholder="Enter your last name"
              onChange={handleChange}
              value={formData.lastName}
              required
            />
          </div>
        </div>

        <PictureUpload onImageChange={handleImageChange} />

        <div className="about-container">
          <div className="information-container">
            <div className="gender-wrap">
              <h3>Gender</h3>
              <div className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  id="c01"
                  value="Male"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="c01">Male</label>
              </div>
              <div className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  id="c02"
                  value="Female"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="c02">Female</label>
              </div>
              <div className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  id="c03"
                  value="Other"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="c03">
                  <input
                    type="text"
                    name="otherGender"
                    placeholder="Other (specify)"
                    onChange={handleChange}
                    value={formData.otherGender}
                  />
                </label>
              </div>
            </div>

            <div className="age-wrap">
              <h3>Age</h3>
              <input
                type="number"
                name="age"
                placeholder="Input age"
                min="19"
                onChange={handleChange}
                value={formData.age}
                required
                title="Age must be over 18"
              />
            </div>

            <div className="specialization-wrap">
              <h3>Specialization</h3>
              <select
                id="majors"
                name="majors"
                onChange={handleChange}
                value={formData.majors}
                required
              >
                <SpecializationList />
              </select>
            </div>

            <div className="year-wrap">
              <h3>Year of Study</h3>
              <YearOfStudySlider onChange={(value) => setFormData({ ...formData, yearOfStudy: value })} />
            </div>
          </div>
        </div>

        <div className="introduction-wrap">
          <h1>Write a Quick Introduction</h1>
          <h3>Tell your future roommates a little about yourself!</h3>
          <IntroductionTextbox
            placeholder="Write your introduction here..."
            name="introduction"
            onChange={handleChange}
            value={formData.introduction}
          />
        </div>

        <div className="habits-wrap">
          <h1>Living Habits</h1>
          <h3>So that you can be matched with those alike.</h3>
          <IntroductionTextbox
            placeholder="Describe your living habits..."
            name="livingHabits"
            onChange={handleChange}
            value={formData.livingHabits}
          />
        </div>

        <div className="update-container">
          <h1>Satisfied?</h1>
          <button type="submit">Update Profile</button>
          <h3>You can come back and make changes at anytime.</h3>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default ProfileSetup;
