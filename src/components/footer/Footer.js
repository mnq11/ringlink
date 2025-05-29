import React from "react";
import "./Footer.css";
import { HiSparkles } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaTelegramPlane,
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

const Footer = () => {
    const handleNavigation = (section) => {
        console.log(`Navigate to: ${section}`);
        // Add your navigation logic here
    };

    return (
        <footer className="footer-section">
            {/* Final CTA Section */}
            <div className="final-cta">
                <div className="container">
                    <div className="cta-content">
                        <div className="cta-badge">
                            <HiSparkles size={16} />
                            <span>Ready to transform your business?</span>
                        </div>
                        <h2>
                            Expert digital services are a <span className="text-gradient">game changer</span> for modern businesses
                        </h2>
                        <p>
                            Experience the power of strategic consulting and digital transformation. 
                            Schedule a free consultation to discover how we can accelerate your growth and success.
                        </p>
                        <button className="btn btn-primary btn-lg cta-button">
                            <span>Schedule free consultation</span>
                            <BsArrowRight size={18} />
                        </button>
                        <div className="cta-tagline">
                            <span className="tagline-text">Transform your business</span>
                            <span className="tagline-accent">, accelerate your growth</span>
                            <span className="tagline-text">. Free consultation available.</span>
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
                                Empowering businesses through expert digital services and strategic consulting. 
                                We help organizations transform, scale, and succeed in the digital landscape.
                            </p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/profile.php?id=100091332034987" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebookF size={18} />
                                </a>
                                <a href="https://www.twitter.com/Hlkatwsl" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FaTwitter size={18} />
                                </a>
                                <a href="https://www.instagram.com/halketwassl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram size={18} />
                                </a>
                                <a href="https://t.me/+46762702580" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                    <FaTelegramPlane size={18} />
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
                        <div className="footer-column">
                            <h4>Services</h4>
                            <ul>
                                <li><button onClick={() => handleNavigation('business-intelligence')} className="footer-link">Business Intelligence</button></li>
                                <li><button onClick={() => handleNavigation('digital-transformation')} className="footer-link">Digital Transformation</button></li>
                                <li><button onClick={() => handleNavigation('technology-implementation')} className="footer-link">Technology Implementation</button></li>
                                <li><button onClick={() => handleNavigation('strategic-consulting')} className="footer-link">Strategic Consulting</button></li>
                                <li><button onClick={() => handleNavigation('cybersecurity')} className="footer-link">Cybersecurity Solutions</button></li>
                                <li><button onClick={() => handleNavigation('innovation-strategy')} className="footer-link">Innovation Strategy</button></li>
                                <li><button onClick={() => handleNavigation('data-analytics')} className="footer-link">Data Analytics</button></li>
                            </ul>
                        </div>

                        {/* Industries Links */}
                        <div className="footer-column">
                            <h4>Industries</h4>
                            <ul>
                                <li><button onClick={() => handleNavigation('technology')} className="footer-link">Technology Companies</button></li>
                                <li><button onClick={() => handleNavigation('financial-services')} className="footer-link">Financial Services</button></li>
                                <li><button onClick={() => handleNavigation('healthcare')} className="footer-link">Healthcare Organizations</button></li>
                                <li><button onClick={() => handleNavigation('manufacturing')} className="footer-link">Manufacturing</button></li>
                                <li><button onClick={() => handleNavigation('retail-ecommerce')} className="footer-link">Retail & E-commerce</button></li>
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div className="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li><button onClick={() => handleNavigation('case-studies')} className="footer-link">Case Studies</button></li>
                                <li><button onClick={() => handleNavigation('whitepapers')} className="footer-link">Whitepapers</button></li>
                                <li><button onClick={() => handleNavigation('blog')} className="footer-link">Blog & Insights</button></li>
                                <li><button onClick={() => handleNavigation('webinars')} className="footer-link">Webinars</button></li>
                                <li><button onClick={() => handleNavigation('research')} className="footer-link">Industry Research</button></li>
                                <li><button onClick={() => handleNavigation('best-practices')} className="footer-link">Best Practices</button></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#team" className="footer-link">About Us</a></li>
                                <li><a href="#contact" className="footer-link">Contact</a></li>
                                <li><button onClick={() => handleNavigation('careers')} className="footer-link">Careers</button></li>
                                <li><button onClick={() => handleNavigation('partners')} className="footer-link">Partners</button></li>
                                <li><button onClick={() => handleNavigation('privacy')} className="footer-link">Privacy Policy</button></li>
                                <li><button onClick={() => handleNavigation('terms')} className="footer-link">Terms & Conditions</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>&copy; 2024 Hyper Scale Insights. All Rights Reserved.</p>
                        <div className="footer-bottom-links">
                            <button onClick={() => handleNavigation('terms')} className="footer-bottom-link">Terms & Conditions</button>
                            <span>•</span>
                            <button onClick={() => handleNavigation('privacy')} className="footer-bottom-link">Privacy Policy</button>
                            <span>•</span>
                            <button onClick={() => handleNavigation('cookies')} className="footer-bottom-link">Cookie Settings</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
