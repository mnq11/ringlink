import React, {useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import styles from './Header.css';
import i18n from 'i18next';
import ReactSelect from 'react-select';
import Flag from 'react-world-flags';

const Header = () => {
    const {t} = useTranslation();
    const location = useLocation();

    const changeLanguage = (selectedOption) => {
        i18n.changeLanguage(selectedOption.value).then((r) => console.log(r));
    };

    const languageOptions = [
        {
            value: 'ar',
            label: (
                <div>
                    <Flag code="SA" height="18" width="24" className="mr-2"/> العربية
                </div>
            ),
        },
        {
            value: 'en',
            label: (
                <div>
                    <Flag code="US" height="18" width="24" className="mr-2"/> English
                </div>
            ),
        },
        {
            value: 'es',
            label: (
                <div>
                    <Flag code="ES" height="18" width="24" className="mr-2"/> Español
                </div>
            ),
        },
        {
            value: 'fr',
            label: (
                <div>
                    <Flag code="FR" height="18" width="24" className="mr-2"/> Français
                </div>
            ),
        },
        // Add more languages here
    ];

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="navbar">
            <a href="#" className="logo">
                YourLogo
            </a>
            <nav className={`nav ${showMenu ? 'show' : ''}`}>
                <NavLink to="/" className="nav-link" activeClassName={styles.active}>
                    {t('Home')}
                </NavLink>
                <NavLink
                    to="/services"
                    className="nav-link"
                    activeClassName={styles.active}
                >
                    {t('Services')}
                </NavLink>
                <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName={styles.active}
                >
                    {t('About')}
                </NavLink>
                <NavLink
                    to="/contact"
                    className="nav-link"
                    activeClassName={styles.active}
                >
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
