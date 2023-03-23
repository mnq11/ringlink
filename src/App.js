import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Header from './pages/Header/Header';
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

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
