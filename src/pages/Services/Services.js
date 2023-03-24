// Services.js
import React from 'react';
import {useTranslation} from 'react-i18next';
import Styling from  './Services.css';

const Services = () => {
    const {t} = useTranslation();

    return (
        <div className="services-container">
            <br/>
            <section className="services-hero-section">
                <h1 className="services-hero-title">{t('Services')}</h1>
            </section>
            <section className="services-section">
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="card-content">
                                <h3>{t('Public_Relations')}</h3>
                                <p>{t('Public_Relations_Description')}</p>
                            </div>


                        </div>
                        <div className="service-card">
                            <div className="card-content">
                                <h3>{t('Media_Relations')}</h3>
                                <p className="card-content">{t('Media_Relations_Description')}</p>
                            </div>

                        </div>
                        <div className="service-card">
                            <div className="card-content">
                                <h3>{t('Government_Relations')}</h3>
                                <p>{t('Government_Relations_Description')}</p>
                            </div>

                        </div>
                        <div className="service-card">
                            <div className="card-content">
                                <h3>{t('Content_Creation')}</h3>
                                <p>{t('Content_Creation_Description')}</p>
                            </div>

                        </div>
                        <div className="service-card">
                            <div className="card-content">
                                <h3>{t('Public_Affairs')}</h3>
                                <p>{t('Public_Affairs_Description')}</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="card-content">
                                <h3>{t('Outdoor_Advertising')}</h3>
                                <p>{t('Outdoor_Advertising_Description')}</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="card-content">
                                <h3>{t('Travel_and_tourism_services')}</h3>
                                <p>{t('Travel_and_tourism_services_Description')}</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="card-content">
                                <h3>{t('Website_Design')}</h3>
                                <p>{t('Website_Design_Description')}</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="card-content">
                                <h3>{t('Lobbying')}</h3>
                                <p>{t('Lobbying_Description')}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
