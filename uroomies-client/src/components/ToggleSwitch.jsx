import React, { useState } from 'react';
import '../styles/ToggleSwitch.css';

function ToggleSwitch() {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="toggle-switch">
            <input 
                type="checkbox" 
                id="toggle" 
                className="toggle-input" 
                checked={isChecked} 
                onChange={handleToggle} 
            />
            <label htmlFor="toggle" className="toggle-label">
                <span className="toggle-slider"></span>
            </label>
        </div>
    );
}

export default ToggleSwitch;
