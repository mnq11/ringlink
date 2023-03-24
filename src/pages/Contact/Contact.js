import React from 'react';
import {useTranslation} from "react-i18next";


const Contact = () => {
    const {t} = useTranslation();

    return (
        <div>
            <br/>
            <section className="contact-section">
                <div className="container">
                    <h2 className="section-title">{t('Contact')}</h2>
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

