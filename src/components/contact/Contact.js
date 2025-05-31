import React, { useContext, useState, useRef } from "react";
import "./Contact.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaTelegram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import "aos/dist/aos.css";
import { LanguageContext } from "../../language/LanguageContext";
import { translations } from "../../language/translations";

const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=12818245300", '_blank', 'noopener,noreferrer');
};

function handleTelegramClick() {
    window.open("https://t.me/+12818245300", '_blank', 'noopener,noreferrer');
}

function handleFacebookClick() {
    window.open("https://www.facebook.com/profile.php?id=100091332034987", '_blank', 'noopener,noreferrer');
}

function handleTwitterClick() {
    window.open("https://twitter.com/MohammedlNabil", '_blank', 'noopener,noreferrer');
}

function handleInstagramClick() {
    window.open("https://www.instagram.com/halketwassl/", '_blank', 'noopener,noreferrer');
}

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
            // Initialize EmailJS with your public key
            emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this

            // Template parameters
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'team@hyperscaleinsights.com'
            };

            // Send email
            const result = await emailjs.send(
                'YOUR_SERVICE_ID',    // You'll need to replace this
                'YOUR_TEMPLATE_ID',   // You'll need to replace this
                templateParams,
                'YOUR_PUBLIC_KEY'     // You'll need to replace this
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
                    <div className="section-header">
                        <h2 className="gradient-text">{translations[selectedLanguage]?.contact_now || "Get In Touch"}</h2>
                        <p className="section-subtitle">
                            {translations[selectedLanguage]?.contact_description || "Ready to transform your business? Let's discuss your project and explore how we can help you achieve your goals."}
                        </p>
                    </div>

                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper" data-aos="fade-right">
                            <div className="contact-form-card">
                                <h3>Send us a message</h3>
                                <form ref={form} onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your Name *"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Your Email *"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="Subject *"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Your Message *"
                                            rows="6"
                                            required
                                        ></textarea>
                                    </div>
                                    
                                    {submitStatus === 'success' && (
                                        <div className="status-message success">
                                            ✅ Message sent successfully! We'll get back to you soon.
                                        </div>
                                    )}
                                    
                                    {submitStatus === 'error' && (
                                        <div className="status-message error">
                                            ❌ Failed to send message. Please try again or contact us directly.
                                        </div>
                                    )}
                                    
                                    <button 
                                        type="submit" 
                                        className="submit-btn"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-wrapper" data-aos="fade-left">
                            <div className="contact-info-card">
                                <h3>Contact Information</h3>
                                <div className="contact-info-list">
                                    <div className="contact-info-item">
                                        <FaEnvelope className="contact-icon" />
                                        <div>
                                            <h4>Email</h4>
                                            <p>team@hyperscaleinsights.com</p>
                                        </div>
                                    </div>
                                    <div className="contact-info-item">
                                        <FaPhone className="contact-icon" />
                                        <div>
                                            <h4>Phone</h4>
                                            <p>+1 (281) 824-5300</p>
                                        </div>
                                    </div>
                                    <div className="contact-info-item">
                                        <FaMapMarkerAlt className="contact-icon" />
                                        <div>
                                            <h4>Location</h4>
                                            <p>Mesa, Arizona 85212</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-section">
                                    <h4>Follow Us</h4>
                                    <div className="social-icons">
                                        <div className="social-icon" onClick={handleWhatsAppClick} title="WhatsApp">
                                            <FaWhatsapp />
                                        </div>
                                        <div className="social-icon" onClick={handleTelegramClick} title="Telegram">
                                            <FaTelegram />
                                        </div>
                                        <div className="social-icon" onClick={handleFacebookClick} title="Facebook">
                                            <FaFacebookF />
                                        </div>
                                        <div className="social-icon" onClick={handleTwitterClick} title="Twitter">
                                            <FaTwitter />
                                        </div>
                                        <div className="social-icon" onClick={handleInstagramClick} title="Instagram">
                                            <FaInstagram />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
