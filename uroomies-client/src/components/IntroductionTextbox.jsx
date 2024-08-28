import React, { useState } from "react";
import "../styles/textbox.css"

function IntroductionTextbox({ placeholder = "Write your introduction here...", maxLength = 300 }) {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        if (event.target.value.length <= maxLength) {
            setText(event.target.value);
        }
    };

    return (
        <div className="textbox-container">
            <textarea
                value={text}
                onChange={handleChange}
                placeholder={placeholder}
                className="textbox"
            />
            <div className="char-counter">
                {text.length}/{maxLength} characters
            </div>
        </div>
    );
}

export default IntroductionTextbox;


