// src/language/LanguageContext.js

import { createContext, useState } from "react";

// Create a new context for language management
export const LanguageContext = createContext();

// Create a provider component to wrap around components that need language context
export const LanguageProvider = ({ children }) => {
    // Manage the selected language using state
    const [selectedLanguage, setSelectedLanguage] = useState("AR");

    // Provide the selected language and its setter to child components
    return (
        <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
