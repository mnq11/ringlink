import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactStyles.css';
import SocialMedia from '../SocialMedia/SocialMedia';

const Contact = () => {
    const { t } = useTranslation();
    const [formError, setFormError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const message = e.target.elements.message.value;

        if (!name || !email || !message) {
            setFormError(true);
            return;
        }

        // TODO: Handle form submission
    };

    return (
        <div>
            <br />
            <section className="Contact-hero-section">
                <h1 className="Contact-hero-title">{t('Contact')}</h1>
            </section>
            <SocialMedia />
            <section className="contact-section">
                <div className={`container ${formError ? 'error' : ''}`}>
                    <div className="contact-content">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder={t('Name')} />
                            <input type="email" name="email" placeholder={t('Email')} />
                            <textarea name="message" rows="4" placeholder={t('Message')}></textarea>
                            <button type="submit">{t('Submit')}</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
