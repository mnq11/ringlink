// src/components/Navbar/Navbar.js
import React, {useState, useContext} from "react";
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import {HiSun, HiMoon} from "react-icons/hi";
import {MdLanguage} from "react-icons/md";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import "./Navbar.css";
import {LanguageContext} from "../../language/LanguageContext";
import {useTheme} from "../../context/ThemeContext";
import {translations} from "../../language/translations";
import ReactFlagsSelect from "react-flags-select";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const {selectedLanguage, setSelectedLanguage, languageConfig} = useContext(LanguageContext);
    const {toggleTheme, isDark} = useTheme();

    const handleLanguageChange = (countryCode) => {
        const languageCode = Object.keys(languageConfig).find(
            (key) => languageConfig[key].flag === countryCode
        );
        if (languageCode) {
            setSelectedLanguage(languageCode);
            setShowLanguageMenu(false);
        }
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleLanguageMenu = () => {
        setShowLanguageMenu(!showLanguageMenu);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo Section */}
                <div className="navbar-brand">
                    <div className="logo-container">
                        <img 
                            src="/clean logo.jpeg" 
                            alt="Hyper Scale Insights Logo" 
                            className="logo-clean"
                        />
                        <div className="logo-text">
                            <span className="brand-name">Hyper Scale</span>
                            <span className="brand-suffix text-gradient">Insights</span>
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="navbar-center">
                    <ul className="nav-links">
                        <li>
                            <a href="#home" className="nav-link">
                                {translations[selectedLanguage]?.Home || "Home"}
                            </a>
                        </li>
                        <li>
                            <a href="#serverss" className="nav-link">
                                {translations[selectedLanguage]?.Services || "Services"}
                            </a>
                        </li>
                        <li>
                            <a href="#team" className="nav-link">
                                {translations[selectedLanguage]?.Team || "Team"}
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link">
                                {translations[selectedLanguage]?.Contact || "Contact"}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Controls Section */}
                <div className="navbar-end">
                    {/* Theme Toggle */}
                    <button 
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
                    >
                        {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
                    </button>

                    {/* Language Selector */}
                    <div className="language-selector">
                        <button 
                            className="language-toggle"
                            onClick={toggleLanguageMenu}
                            aria-label="Select language"
                        >
                            <MdLanguage size={20} />
                            <span className="language-code">{selectedLanguage}</span>
                        </button>
                        
                        {showLanguageMenu && (
                            <div className="language-dropdown">
                                <ReactFlagsSelect
                                    countries={Object.values(languageConfig).map(lang => lang.flag)}
                                    customLabels={Object.fromEntries(
                                        Object.entries(languageConfig).map(([code, config]) => [config.flag, config.name])
                                    )}
                                    selectedSize={16}
                                    optionsSize={14}
                                    onSelect={handleLanguageChange}
                                    selected={languageConfig[selectedLanguage]?.flag}
                                    placeholder="Select Language"
                                />
                            </div>
                        )}
                    </div>

                    {/* CTA Button */}
                    <Button 
                        text={translations[selectedLanguage]?.Learn_More || "Learn More"} 
                        btnClass="btn-primary" 
                        href="#faq"
                    />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-menu-toggle" onClick={toggleMenu}>
                    {showMenu ? (
                        <RiCloseLine size={28} />
                    ) : (
                        <AiOutlineBars size={28} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${showMenu ? 'mobile-menu-open' : ''}`}>
                <div className="mobile-menu-header">
                    <img 
                        src="/full logo2.jpeg" 
                        alt="Hyper Scale Insights Full Logo" 
                        className="mobile-logo"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <div className="mobile-logo-fallback" style={{ display: 'none' }}>
                        <span className="mobile-brand-name">Hyper Scale Insights</span>
                    </div>
                </div>

                <ul className="mobile-nav-links">
                    <li>
                        <a href="#home" className="mobile-nav-link" onClick={toggleMenu}>
                            {translations[selectedLanguage]?.Home || "Home"}
                        </a>
                    </li>
                    <li>
                        <a href="#serverss" className="mobile-nav-link" onClick={toggleMenu}>
                            {translations[selectedLanguage]?.Services || "Services"}
                        </a>
                    </li>
                    <li>
                        <a href="#team" className="mobile-nav-link" onClick={toggleMenu}>
                            {translations[selectedLanguage]?.Team || "Team"}
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="mobile-nav-link" onClick={toggleMenu}>
                            {translations[selectedLanguage]?.Contact || "Contact"}
                        </a>
                    </li>
                </ul>

                <div className="mobile-menu-footer">
                    <div className="mobile-controls">
                        <button 
                            className="mobile-theme-toggle"
                            onClick={toggleTheme}
                            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
                        >
                            {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
                            <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>

                        <div className="mobile-language-selector">
                            <ReactFlagsSelect
                                countries={Object.values(languageConfig).map(lang => lang.flag)}
                                customLabels={Object.fromEntries(
                                    Object.entries(languageConfig).map(([code, config]) => [config.flag, config.name])
                                )}
                                selectedSize={16}
                                optionsSize={14}
                                onSelect={handleLanguageChange}
                                selected={languageConfig[selectedLanguage]?.flag}
                                placeholder="Select Language"
                            />
                        </div>
                    </div>

                    <Button 
                        text={translations[selectedLanguage]?.Learn_More || "Learn More"} 
                        btnClass="btn-primary btn-lg" 
                        href="#faq"
                    />
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {showMenu && <div className="mobile-menu-overlay" onClick={toggleMenu}></div>}
            {showLanguageMenu && <div className="language-menu-overlay" onClick={() => setShowLanguageMenu(false)}></div>}
        </nav>
    );
};

export default Navbar;
