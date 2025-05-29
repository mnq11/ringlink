// src/language/LanguageContext.js

import React, { createContext, useState, useContext, useEffect } from "react";

// Create a new context for language management
export const LanguageContext = createContext();

// Custom hook to use language context
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Create a provider component to wrap around components that need language context
export const LanguageProvider = ({ children }) => {
    // Get saved language from localStorage or default to English
    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        return savedLanguage || "EN";
    });

    // Save language preference to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage);
        // Set document direction for RTL languages
        document.documentElement.dir = selectedLanguage === 'AR' ? 'rtl' : 'ltr';
        document.documentElement.lang = selectedLanguage.toLowerCase();
    }, [selectedLanguage]);

    // Language configuration
    const languageConfig = {
        AR: { name: "العربية", flag: "SA", dir: "rtl" },
        EN: { name: "English", flag: "GB", dir: "ltr" },
        SE: { name: "Svenska", flag: "SE", dir: "ltr" },
        SO: { name: "Soomaali", flag: "SO", dir: "ltr" },
        TR: { name: "Türkçe", flag: "TR", dir: "ltr" },
        IR: { name: "فارسی", flag: "IR", dir: "rtl" },
    };

    const value = {
        selectedLanguage,
        setSelectedLanguage,
        languageConfig,
        currentLanguage: languageConfig[selectedLanguage],
        isRTL: selectedLanguage === 'AR' || selectedLanguage === 'IR'
    };

    // Provide the selected language and its setter to child components
    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
