import * as React from "react";

export default function DarkModeToggle({ darkMode, handleClick }) {
    return (
        <span onClick={handleClick} aria-label={darkMode}>{darkMode === 'light' ? '🌤️' : '🌒'}</span>
    );
};