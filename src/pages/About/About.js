// About.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../pages/Home/HomeStyles.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about-container">




            <section className="about-content-section">
                <div className="container">
                    <h2 className="Contact-hero-title">{t('Our_Story')}</h2>
                    <div className="about-content">
                        <p>{t('Description_about_the_company')}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
