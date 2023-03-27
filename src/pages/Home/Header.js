import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../pages/Home/HomeStyles.css';
import i18n from 'i18next';
import ReactSelect from 'react-select';
import Flag from 'react-world-flags';
function setThemeToBody(newTheme) {
    if (newTheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

const Header = ({ theme, setTheme }) => {
    const { t } = useTranslation();
    useLocation();
    const changeLanguage = (selectedOption) => {
        i18n.changeLanguage(selectedOption.value).then((r) => console.log(r));
    };

    const languageOptions = [
        {
            value: 'ar',
            label: (
                <div>
                    <Flag code="SA" height="18" width="24" className="mr-2" /> العربية
                </div>
            ),
        },
        {
            value: 'en',
            label: (
                <div>
                    <Flag code="US" height="18" width="24" className="mr-2" /> English
                </div>
            ),
        },
        {
            value: 'es',
            label: (
                <div>
                    <Flag code="ES" height="18" width="24" className="mr-2" /> Español
                </div>
            ),
        },
        {
            value: 'fr',
            label: (
                <div>
                    <Flag code="FR" height="18" width="24" className="mr-2" /> Français
                </div>
            ),
        },
        // Add more languages here
    ];

    const [showMenu] = useState(false);
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        setThemeToBody(newTheme);
    };
    return (
        <header className={`navbar ${theme}`}>
            <a href="/" className="logo">
                {t('halketwassl')}
            </a>
            <nav className={`nav ${showMenu ? 'show' : ''}`}>
                <NavLink to="/" className="nav-link" >
                    {t('Home')}
                </NavLink>
                <NavLink to="/services" className={`nav-link ${theme}`}>
                    {t('Services')}
                </NavLink>
                <NavLink to="/about" className={`nav-link ${theme}`}>
                    {t('About')}
                </NavLink>
                <NavLink to="/contact" className={`nav-link ${theme}`}>
                    {t('Contact')}
                </NavLink>
            </nav>


            <ReactSelect
                className="language-selector"
                options={languageOptions}
                defaultValue={languageOptions.find((option) => option.value === 'en')}
                onChange={changeLanguage}
                isSearchable={false}
            />

        </header>
    );
};

export default Header;
