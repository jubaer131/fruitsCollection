// FontSizeContext.js
import React, { createContext, useContext, useState } from "react";

// Create Context
const FontSizeContext = createContext();

// Create Provider Component
export const FontsizeProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState(16);

    const handleFontSizeChange = (event) => {
        setFontSize(event.target.value);
    };

    return (
        <FontSizeContext.Provider value={{ fontSize, handleFontSizeChange }}>
            {children}
        </FontSizeContext.Provider>
    );
};

// Hook to use Font Size Context
export const useFontSize = () => useContext(FontSizeContext);
