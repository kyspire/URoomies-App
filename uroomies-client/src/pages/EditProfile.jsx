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

function EditProfile(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userid: JSON.parse(localStorage.getItem(`${props.socket.id}`)).userid,
    fname: "",
    lname: "",
    gender: "",
    age: 0,
    specialization: "",
    yearstanding: 0,
    introduction: "",
    livinghabits: "",
    profilePicture: null,
  });

  console.log(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const handleImageChange = (imageData) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     profilePicture: imageData,
  //   }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:7776/editprofile', formData)
      .then((res) => {
        if (res.data.success) {
          alert("edit profile successful!");
          navigate("/userprofile");
        } else {
          alert("There was an error editing your profile. Please try again.");
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
              name="fname"
              placeholder="Enter your first name"
              onChange={handleChange}
              value={formData.fname}
              required
            />
          </div>
          <div className="last-name">
            <h2>Last Name</h2>
            <h3>This name will appear when other people view your profile.</h3>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your last name"
              onChange={handleChange}
              value={formData.lname}
              required
            />
          </div>
        </div>

        <PictureUpload />

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
                    name="gender"
                    placeholder="Other (specify)"
                    onChange={handleChange}
                    value={formData.gender}
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
                id="specialization"
                name="specialization"
                onChange={handleChange}
                value={formData.specialization}
                required
              >
                <SpecializationList />
              </select>
            </div>

            <div className="year-wrap">
              <h3>Year of Study</h3>
              <div className="slider-container">
                <label htmlFor="yearstanding">Year of Study: {formData.yearstanding}</label>
                <input
                  type="range"
                  id="yearstanding"
                  name="yearstanding"
                  min="1"
                  max="4"
                  value={formData.yearstanding}
                  onChange={handleChange}
                  className="slider"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="introduction-wrap">
          <h1>Write a Quick Introduction</h1>
          <h3>Tell your future roommates a little about yourself!</h3>
          <textarea
            placeholder="Write your introduction here..."
            name="introduction"
            onChange={handleChange}
            value={formData.introduction}
            className="textbox-container"
          />
        </div>

        <div className="habits-wrap">
          <h1>Living Habits</h1>
          <h3>So that you can be matched with those alike.</h3>
          <textarea
            placeholder="Describe your living habits..."
            name="livinghabits"
            onChange={handleChange}
            value={formData.livinghabits}
            className="textbox-container"
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

export default EditProfile;
