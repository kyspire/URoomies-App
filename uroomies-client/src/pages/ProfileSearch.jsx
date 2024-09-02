import React, { useState } from 'react';
import Header from '../components/HeaderBar';
import Footer from '../components/BottomBar';
import SpecializationList from "../components/SpecializationList";
import axios from 'axios';
import "../styles/ProfileSearch.css";

function ProfileSearch() {
  const [filters, setFilters] = useState({
    age: "",
    ageRange: 5, // Default range of ±5 years
    gender: {
      male: false,
      female: false,
      other: false,
      noPreference: true
    },
    major: ""
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setFilters((prevFilters) => ({
        ...prevFilters,
        gender: {
          ...prevFilters.gender,
          [name]: checked,
          noPreference: false, // Automatically uncheck "no preference" if any specific gender is selected
        },
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const handleNoPrefChange = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      gender: {
        male: false,
        female: false,
        other: false,
        noPreference: true
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the gender filter
    const selectedGenders = [];
    if (filters.gender.male) selectedGenders.push("Male");
    if (filters.gender.female) selectedGenders.push("Female");
    if (filters.gender.other) selectedGenders.push("Other");

    const searchFilters = {
      age: filters.age,
      ageRange: filters.ageRange,
      gender: selectedGenders.length > 0 ? selectedGenders : ["No Preference"],
      major: filters.major || "No Preference"
    };

    axios.post('http://localhost:7776/search-profiles', searchFilters)
      .then((res) => {
        console.log("Search results:", res.data);
        // Process the search results here
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <div className="profilesearch-container">
      <Header />
      <form className="searchbody-container" onSubmit={handleSubmit}>
        <h1 className="search-title">Search Profiles</h1>

        <div className="age-filter">
          <h3>Age</h3>
          <input
            type="number"
            name="age"
            placeholder="Input age"
            onChange={handleChange}
            value={filters.age}
          />
          <label>
            ±
            <input
              type="number"
              name="ageRange"
              min="0"
              onChange={handleChange}
              value={filters.ageRange}
            />
            years
          </label>
        </div>

        <div className="gender-filter">
          <h3>Gender</h3>
          <div className="gender-options">
            <label>
              <input
                type="checkbox"
                name="male"
                checked={filters.gender.male}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="checkbox"
                name="female"
                checked={filters.gender.female}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="checkbox"
                name="other"
                checked={filters.gender.other}
                onChange={handleChange}
              />
              Other
            </label>
            <label>
              <input
                type="checkbox"
                name="noPreference"
                checked={filters.gender.noPreference}
                onChange={handleNoPrefChange}
              />
              No Preference
            </label>
          </div>
        </div>

        <div className="major-filter">
          <h3>Major</h3>
          <select
            name="major"
            onChange={handleChange}
            value={filters.major}
          >
            <option value="">No Preference</option>
            <SpecializationList />
          </select>
        </div>

        <div className="submit-container">
          <button type="submit">Search</button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default ProfileSearch;
