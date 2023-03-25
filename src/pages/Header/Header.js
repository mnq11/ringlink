import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import styles from './Header.css';
import i18n from 'i18next';
import ReactSelect from 'react-select';
import Flag from 'react-world-flags';

const Header = () => {
    const {t} = useTranslation();
    const location = useLocation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language).then((r) => console.log(r));
    };
    const languageOptions = [

        {
            value: 'ar',
            label: (
                <div>
                    <Flag code="SA" height="18" width="24" className="mr-2"/> العربية
                </div>
            ),

        },{
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
    return (
        <div className={styles.headerContainer}>

            {/* Navigation */}
            <div className={styles.navContainer}>
                <header className={`${styles.header} ${styles.wrapper}`}>
                    <div className="wrapper">
                        <nav className={styles.navbar}>
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    className={
                                        location.pathname === '/'
                                            ? `${styles.navLink} ${styles.active}`
                                            : styles.navLink
                                    }
                                >
                                    {t('Home')}
                                </NavLink>
                            </li>
                            <br/>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={
                                        location.pathname === '/about'
                                            ? `${styles.navLink} ${styles.active}`
                                            : styles.navLink
                                    }
                                >
                                    {t('About')}
                                </NavLink>
                            </li>
                            <br/>

                            <li>
                                <NavLink
                                    to="/services"
                                    className={
                                        location.pathname === '/services'
                                            ? `${styles.navLink} ${styles.active}`
                                            : styles.navLink
                                    }
                                >
                                    {t('Services')}
                                </NavLink>
                            </li>
                            <br/>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={
                                        location.pathname === '/contact'
                                            ? `${styles.navLink} ${styles.active}`
                                            : styles.navLink
                                    }
                                >
                                    {t('Contact')}
                                </NavLink>
                            </li>
                            <div className="language-picker">
                                <ReactSelect
                                    value={languageOptions.find((option) => option.value === i18n.language)}
                                    onChange={(e) => changeLanguage(e.value)}
                                    options={languageOptions}
                                    className={styles.languageSelect}
                                />
                            </div>
                        </nav>
                    </div>
                    <br/>


                </header>
            </div>
        </div>
    );
};

export default Header;