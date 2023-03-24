import React from 'react';
import {useTranslation} from "react-i18next";


const Contact = () => {
    const {t} = useTranslation();

    return (
        <div>
            <br/>
            <section className="about-hero-section">
                <h1 className="about-hero-title">{t('Contact')}</h1>
            </section>
            <section className="contact-section">
                <div className="container">
                    <div className="contact-content">
                        <form className="contact-form">
                            <input type="text" placeholder={t('Name')}/>
                            <input type="email" placeholder={t('Email')}/>
                            <textarea rows="4" placeholder={t('Message')}></textarea>
                            <button type="submit">{t('Submit')}</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;

