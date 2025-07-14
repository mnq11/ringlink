import React, {useState, useRef, useContext } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import "aos/dist/aos.css";
import { LanguageContext } from "../../language/LanguageContext";
import { translations } from "../../language/translations";


const Contact = () => {
    const { selectedLanguage } = useContext(LanguageContext);
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Initialize EmailJS with your public key from environment variable
            emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

            // Template parameters
            const templateParams = {
                name: formData.name,
                email: formData.email,
                title: formData.subject,
                message: formData.message,
                phone: formData.phone
            };

            // Send email using environment variables
            const result = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', result);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-content" data-aos="fade-up">
                    <div className="section-header enhanced-contact-header">
                        <h2 className="gradient-text big-title">{translations[selectedLanguage]?.contact_now || translations['EN'].contact_now}</h2>
                        <p className="section-subtitle highlight-subtitle">
                            {translations[selectedLanguage]?.Contact_Section_Lead || translations['EN'].Contact_Section_Lead} <br />
                            <span className="subtitle-emphasis">{translations[selectedLanguage]?.Contact_Section_Desc || translations['EN'].Contact_Section_Desc}</span>
                        </p>
                    </div>

                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper" data-aos="fade-right">
                            <div className="contact-form-card modern-form-card">
                                <h3 className="form-title">{translations[selectedLanguage]?.Contact_Form_Title || translations['EN'].Contact_Form_Title}</h3>
                                <form ref={form} onSubmit={handleSubmit} className="contact-form improved-form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder={translations[selectedLanguage]?.Contact_Form_Name || translations['EN'].Contact_Form_Name}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder={translations[selectedLanguage]?.Contact_Form_Email || translations['EN'].Contact_Form_Email}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone || ''}
                                            onChange={handleInputChange}
                                            placeholder={translations[selectedLanguage]?.Contact_Form_Phone || translations['EN'].Contact_Form_Phone}
                                            pattern="[+0-9\s()-]{7,}"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder={translations[selectedLanguage]?.Contact_Form_Subject || translations['EN'].Contact_Form_Subject}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder={translations[selectedLanguage]?.Contact_Form_Message || translations['EN'].Contact_Form_Message}
                                            rows="6"
                                            required
                                        ></textarea>
                                    </div>
                                    {submitStatus === 'success' && (
                                        <div className="status-message success">
                                            {translations[selectedLanguage]?.Contact_Form_Success || translations['EN'].Contact_Form_Success}
                                        </div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <div className="status-message error">
                                            {translations[selectedLanguage]?.Contact_Form_Error || translations['EN'].Contact_Form_Error}
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        className="submit-btn enhanced-btn"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (translations[selectedLanguage]?.Contact_Form_Sending || translations['EN'].Contact_Form_Sending) : (translations[selectedLanguage]?.Contact_Form_Send || translations['EN'].Contact_Form_Send)}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
