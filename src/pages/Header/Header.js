import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './module.css';
import i18n from 'i18next';

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language).then((r) => console.log(r));
    };

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
                            <br />
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
                            <br />

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
                            <br />
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
                        </nav>
                    </div>
                    <br />

                    <div className="language-switch">
                        <button onClick={() => changeLanguage('en')}>EN</button>
                        <button onClick={() => changeLanguage('fr')}>FR</button>
                        <button onClick={() => changeLanguage('es')}>ES</button>
                        <button onClick={() => changeLanguage('ar')}>AR</button>
                        {/* Add more language buttons as needed */}
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;
