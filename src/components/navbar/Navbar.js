import React, {useState, useContext} from "react";
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import {SiAnaconda} from "react-icons/si";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import "./Navbar.css";
import {LanguageContext} from "../../language/LanguageContext";
import {translations} from "../../language/translations";
import ReactFlagsSelect from "react-flags-select";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const {selectedLanguage, setSelectedLanguage} = useContext(LanguageContext);

    const languageCodes = {
        EN: "GB",
        AR: "YE",
        SE : "SE",
        SO: "SO",
        TR: "TR",
        IR: "IR",
        FR: "FR",
    };

    const handleLanguageChange = (countryCode) => {
        const languageCode = Object.keys(languageCodes).find(
            (key) => languageCodes[key] === countryCode
        );
        setSelectedLanguage(languageCode);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="navbar container">
            <div className="logo">
                <SiAnaconda color="#fff" size={33}/>
                <p className="logo-text">
                    {translations[selectedLanguage].Hlkt}<span> {translations[selectedLanguage].Wsl}</span>
                </p>
            </div>
            {/* Add the language selector here */}
            <div className="language-selector">
                <ReactFlagsSelect
                    countries={Object.values(languageCodes)}
                    customLabels={languageCodes}
                    selectedSize={20}
                    optionsSize={14}
                    onSelect={handleLanguageChange}
                    defaultCountry={languageCodes[selectedLanguage]}
                    selected={languageCodes[selectedLanguage]}
                />

            </div>
            <menu>
                <ul
                    className="nav-links"
                    id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
                >
                    <li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#">{translations[selectedLanguage].Home}</a>
                    </li>
                    <li>
                        <a href={"#serverss"}>{translations[selectedLanguage].Services}</a>
                    </li>
                    <li>
                        <a href={"#team"}>{translations[selectedLanguage].Team}</a>
                    </li>
                    <li>
                        <a href={"#contact"}>{translations[selectedLanguage].Contact}</a>
                    </li>

                    <li className="nav-btn">
                        <Button text={translations[selectedLanguage].Learn_More} btnClass={"btn-dark"} href={"#faq"}/>
                    </li>
                </ul>
            </menu>
            <div className="menu-icons" onClick={toggleMenu}>
                {showMenu ? (
                    <RiCloseLine color="#fff" size={30}/>
                ) : (
                    <AiOutlineBars color="#fff" size={27}/>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
