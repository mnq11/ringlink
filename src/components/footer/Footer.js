import React from "react";
import "./Footer.css";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaGlobe,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaTelegramPlane
} from "react-icons/fa";

const Footer = () => {
    return (
        <section id="footer">
            <div className="container footer">


                <div className="footer-box">
                    <h4>Quick Links</h4>
                    <div className="footer-links">
                        <a href="/home">Home</a>
                        <a href="/home#serverss">Services</a>
                        <a href="/home#team">Our Team</a>
                        <a href="/home#contact">Contact</a>
                    </div>
                </div>

                <div className="footer-box">
                    <h4>Contact Us</h4>
                    <div className="footer-contact">
                        <p>
                            <FaPhoneAlt/> &nbsp; Phone: +46 76 270 25 80
                        </p>
                        <p>
                            <FaEnvelope/> &nbsp; Email: info@Hlkatwsl.com
                        </p>
                        <p>
                            <FaGlobe/> &nbsp; Website: www.Hlkatwsl.com
                        </p>
                    </div>
                </div>

                <div className="footer-box">
                    <h4>Follow Us</h4>
                    <div className="footer-social">
                        <a href="https://www.facebook.com/profile.php?id=100091332034987" target="_blank"
                           rel="noopener noreferrer"><FaFacebookF/></a>
                        <a href="https://www.twitter.com/Hlkatwsl" target="_blank"
                           rel="noopener noreferrer"><FaTwitter/></a>
                        <a href="https://www.instagram.com/halketwassl/" target="_blank"
                           rel="noopener noreferrer"><FaInstagram/></a>
                        <a href="https://t.me/+46762702580" target="_blank"
                           rel="noopener noreferrer"><FaTelegramPlane/>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;
