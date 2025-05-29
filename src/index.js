// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./language/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

const servicesData = [
    // Your services data here
];

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <LanguageProvider>
                <App servicesData={servicesData} />
            </LanguageProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
