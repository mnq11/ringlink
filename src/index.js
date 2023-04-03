// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./language/LanguageContext";

const servicesData = [
    // Your services data here
];

ReactDOM.render(
    <React.StrictMode>
        <LanguageProvider>
            <App servicesData={servicesData} /> {/* Added servicesData prop */}
        </LanguageProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
