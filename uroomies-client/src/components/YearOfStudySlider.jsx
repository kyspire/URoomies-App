import React, { useState } from "react";
import "../styles/slider.css"

function YearOfStudySlider() {
    const [year, setYear] = useState(1);

    const handleChange = (event) => {
        setYear(event.target.value);
    };

    return (
        <div className="slider-container">
            <label htmlFor="yearOfStudy">Year of Study: {year}</label>
            <input
                type="range"
                id="yearOfStudy"
                name="yearOfStudy"
                min="1"
                max="4"
                value={year}
                onChange={handleChange}
                className="slider"
            />
        </div>
    );
}

export default YearOfStudySlider;