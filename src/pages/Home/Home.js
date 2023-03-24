// Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './HomeStyles.css';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <br/>
            <section className="hero-section">
                <h1 className="hero-title">{t('We_Build_Confidence')}</h1>
            </section>

            <section className="about-section">
                <div className="container">
                    <h2 className="section-title">{t('About')}</h2>
                    <div className="container">
                        <p >{t('Description_about_the_company')}</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
