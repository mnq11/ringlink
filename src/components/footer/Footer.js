import React, { useContext } from 'react';
import { BsArrowRight, BsFacebook, BsTwitter, BsInstagram, BsTelegram } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { LanguageContext } from '../../language/LanguageContext';
import { translations } from '../../language/translations';
import './Footer.css';

const Footer = () => {
    const { selectedLanguage } = useContext(LanguageContext);

    const handleNavigation = (section) => {
        // Implement navigation based on section
        switch(section) {
            case 'contact-support':
            case 'contact':
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            case 'services':
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            case 'team':
                const teamSection = document.getElementById('team');
                if (teamSection) {
                    teamSection.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            case 'faq':
                const faqSection = document.getElementById('faq');
                if (faqSection) {
                    faqSection.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            case 'linkedin':
                window.open('https://linkedin.com/company/hyperscaleinsights', '_blank', 'noopener,noreferrer');
                break;
            case 'github':
                window.open('https://github.com/hyperscaleinsights', '_blank', 'noopener,noreferrer');
                break;
            default:
                // For service-specific links, scroll to services section
                const defaultSection = document.getElementById('services');
                if (defaultSection) {
                    defaultSection.scrollIntoView({ behavior: 'smooth' });
                }
        }
    };

    return (
        <footer className="footer-section">
            {/* Final CTA Section */}
            <div className="final-cta">
                <div className="container">
                    <div className="cta-content" data-aos="fade-up">
                        <div className="cta-text">
                            <h2 className="cta-title">
                                {translations[selectedLanguage]?.Ready_Transform || "Ready to transform your business?"}
                            </h2>
                            <p className="cta-subtitle">
                                {translations[selectedLanguage]?.Expert_Digital_Services || "Expert digital services are a"} <span className="text-gradient">{translations[selectedLanguage]?.Game_Changer || "game changer"}</span> {translations[selectedLanguage]?.For_Modern_Businesses || "for modern businesses"}
                            </p>
                            <p className="cta-description">
                                {translations[selectedLanguage]?.Experience_Power || "Experience the power of strategic consulting and digital transformation. Schedule a free consultation to discover how we can accelerate your growth and success."}
                            </p>
                        </div>
                        <button className="btn btn-primary btn-lg cta-button">
                            <HiSparkles className="btn-icon" />
                            <span>{translations[selectedLanguage]?.Schedule_Free_Consultation || "Schedule free consultation"}</span>
                            <BsArrowRight className="btn-icon" />
                        </button>
                        <div className="cta-tagline">
                            <span className="tagline-text">{translations[selectedLanguage]?.Transform_Business || "Transform your business"}</span>
                            <span className="tagline-accent">{translations[selectedLanguage]?.Accelerate_Growth || ", accelerate your growth"}</span>
                            <span className="tagline-text">{translations[selectedLanguage]?.Free_Consultation_Available || ". Free consultation available."}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand Section */}
                        <div className="footer-brand">
                            <div className="brand-logo">
                                <div className="logo-icon">
                                    <HiSparkles size={24} />
                                </div>
                                <span className="brand-name">Hyper Scale Insights</span>
                            </div>
                            <p className="brand-description">
                                {translations[selectedLanguage]?.Brand_Description || "Empowering businesses through expert digital services and strategic consulting. We help organizations transform, scale, and succeed in the digital landscape."}
                            </p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/profile.php?id=100091332034987" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <BsFacebook />
                                </a>
                                <a href="https://www.twitter.com/Hlkatwsl" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <BsTwitter />
                                </a>
                                <a href="https://www.instagram.com/halketwassl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <BsInstagram />
                                </a>
                                <a href="https://t.me/+46762702580" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                    <BsTelegram />
                                </a>
                                <button onClick={() => handleNavigation('linkedin')} className="social-link-btn" aria-label="LinkedIn">
                                    <FaLinkedin size={18} />
                                </button>
                                <button onClick={() => handleNavigation('github')} className="social-link-btn" aria-label="GitHub">
                                    <FaGithub size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Services Links */}
                        <div className="footer-links">
                            <h3 className="links-title">{translations[selectedLanguage]?.Services || "Services"}</h3>
                            <ul className="links-list">
                                <li><a href="#business-intelligence">{translations[selectedLanguage]?.Footer_Business_Intelligence || "Business Intelligence"}</a></li>
                                <li><a href="#digital-transformation">{translations[selectedLanguage]?.Footer_Digital_Transformation || "Digital Transformation"}</a></li>
                                <li><a href="#technology-implementation">{translations[selectedLanguage]?.Footer_Technology_Implementation || "Technology Implementation"}</a></li>
                                <li><a href="#strategic-consulting">{translations[selectedLanguage]?.Footer_Strategic_Consulting || "Strategic Consulting"}</a></li>
                                <li><a href="#cybersecurity">{translations[selectedLanguage]?.Footer_Cybersecurity_Solutions || "Cybersecurity Solutions"}</a></li>
                                <li><a href="#innovation">{translations[selectedLanguage]?.Footer_Innovation_Strategy || "Innovation Strategy"}</a></li>
                                <li><a href="#data-analytics">{translations[selectedLanguage]?.Footer_Data_Analytics || "Data Analytics"}</a></li>
                            </ul>
                        </div>

                        {/* Industries Links */}
                        <div className="footer-links">
                            <h3 className="links-title">{translations[selectedLanguage]?.Industries || "Industries"}</h3>
                            <ul className="links-list">
                                <li><a href="#technology">{translations[selectedLanguage]?.Footer_Technology_Companies || "Technology Companies"}</a></li>
                                <li><a href="#financial">{translations[selectedLanguage]?.Footer_Financial_Services || "Financial Services"}</a></li>
                                <li><a href="#healthcare">{translations[selectedLanguage]?.Footer_Healthcare_Organizations || "Healthcare Organizations"}</a></li>
                                <li><a href="#manufacturing">{translations[selectedLanguage]?.Footer_Manufacturing || "Manufacturing"}</a></li>
                                <li><a href="#retail">{translations[selectedLanguage]?.Footer_Retail_Ecommerce || "Retail & E-commerce"}</a></li>
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div className="footer-links">
                            <h3 className="links-title">{translations[selectedLanguage]?.Resources || "Resources"}</h3>
                            <ul className="links-list">
                                <li><a href="#case-studies">{translations[selectedLanguage]?.Case_Studies || "Case Studies"}</a></li>
                                <li><a href="#whitepapers">{translations[selectedLanguage]?.Footer_Whitepapers || "Whitepapers"}</a></li>
                                <li><a href="#research">{translations[selectedLanguage]?.Footer_Industry_Research || "Industry Research"}</a></li>
                                <li><a href="#blog">{translations[selectedLanguage]?.Blog_Insights || "Blog & Insights"}</a></li>
                                <li><a href="#webinars">{translations[selectedLanguage]?.Expert_Webinars || "Expert Webinars"}</a></li>
                                <li><a href="#best-practices">{translations[selectedLanguage]?.Footer_Best_Practices || "Best Practices"}</a></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="footer-links">
                            <h3 className="links-title">{translations[selectedLanguage]?.Company || "Company"}</h3>
                            <ul className="links-list">
                                <li><a href="#about">{translations[selectedLanguage]?.Footer_About_Us || "About Us"}</a></li>
                                <li><a href="#careers">{translations[selectedLanguage]?.Footer_Careers || "Careers"}</a></li>
                                <li><a href="#partners">{translations[selectedLanguage]?.Footer_Partners || "Partners"}</a></li>
                                <li><a href="#contact">{translations[selectedLanguage]?.Contact || "Contact"}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            {translations[selectedLanguage]?.Copyright || "© 2024 Hyper Scale Insights. All Rights Reserved."}
                        </p>
                        <div className="footer-bottom-links">
                            <button onClick={() => handleNavigation('terms')} className="footer-bottom-link">{translations[selectedLanguage]?.Footer_Terms_Conditions || "Terms & Conditions"}</button>
                            <span>•</span>
                            <button onClick={() => handleNavigation('privacy')} className="footer-bottom-link">{translations[selectedLanguage]?.Footer_Privacy_Policy || "Privacy Policy"}</button>
                            <span>•</span>
                            <button onClick={() => handleNavigation('cookies')} className="footer-bottom-link">{translations[selectedLanguage]?.Footer_Cookie_Settings || "Cookie Settings"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
