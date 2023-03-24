// About.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutStyles.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            <br/>
            <section className="about-hero-section">
                <h1 className="about-hero-title">{t('About Us')}</h1>
            </section>

            <section className="about-content-section">
                <div className="container">
                    <h2 className="section-title">{t('Our Story')}</h2>
                    <div className="about-content">
                        <p>{t('Description about the company')}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
