import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Header from './pages/Home/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import resources from './pages/language/locales';
import './App.css';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

function getTheme() {

    const theme = localStorage.getItem('theme');
    if (theme) {
        return theme;
    } else {
        return 'light';
    }
}

function setThemeToBody(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
}

// App.js
function App() {
    const [theme, setTheme] = useState(getTheme());

    useEffect(() => {
        setThemeToBody(theme);
    }, [theme]);

    return (
        <div className="App">
            <Router>
                <Header theme={theme} setTheme={setTheme} />
                <Routes>
                    <Route path="/" element={<Home theme={theme} />} />
                    <Route path="/about" element={<About theme={theme} />} />
                    <Route path="/services" element={<Services theme={theme} />} />
                    <Route path="/contact" element={<Contact theme={theme} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;