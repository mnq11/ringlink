// Home.jsx
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

            <section className="services-section">
                <div className="container">
                    <h2 className="section-title">{t('Services')}</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <h3>{t('Public_Relations')}</h3>
                            <p>{t('Public_Relations_Description')}</p>
                        </div>
                        <div className="service-card">
                            <h3>{t('Media_Relations')}</h3>
                            <p>{t('Media_Relations_Description')}</p>
                        </div>
                        <div className="service-card">
                            <h3>{t('Government_Relations')}</h3>
                            <p>{t('Government_Relations_Description')}</p>
                        </div>
                        <div className="service-card">
                            <h3>{t('Content_Creation')}</h3>
                            <p>{t('Content_Creation_Description')}</p>
                        </div>
                        <div className="service-card">
                            <h3>{t('Public_Affairs')}</h3>
                            <p>{t('Public_Affairs_Description')}</p>
                        </div>
                        <div className="service-card">
                            <h3>{t('Outdoor_Advertising')}</h3>
                            <p>{t('Outdoor_Advertising_Description')}</p>
                        </div>
                        <div className="service-card">
                            <h3>{t('Travel_and_tourism_services')}</h3>
                            <p>{t('Travel_and_tourism_services_Description')}</p>
                        </div>
                        <div className="service-card">
                            <h3>{t('Website_Design')}</h3>
                            <p>{t('Website_Design_Description')}</p>
                        </div>
                        <div className="service-card">
                            <h3>{t('Lobbying')}</h3>
                            <p>{t('Lobbying_Description')}</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <h2 className="section-title">{t('About')}</h2>
                    <div className="about-content">
                        <p>{t('Description_about_the_company')}</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
