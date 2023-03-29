import React, {useContext, useEffect} from "react";
import "./Contact.css";
// import { TiSocialGooglePlus } from "react-icons/ti";
import {FaFacebookF, FaTwitter, FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import {LanguageContext} from "../../language/LanguageContext";
import {translations} from "../../language/translations";

function handleWhatsAppClick() {
    window.location.href = "https://wa.me/46762702580";
}

function handleTelegramClick() {
    window.location.href = "https://api.whatsapp.com/send?phone=46762702580&text=Hello";
}

function handleFacebookClick() {
    window.location.href = "https://www.facebook.com/profile.php?id=100091332034987";
}

function handleTwitterClick() {
    window.location.href = "https://twitter.com/MohammedlNabil";
}

function handleInstagramClick() {
    window.location.href = "https://www.instagram.com/halketwassl/";
}

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    const {selectedLanguage} = useContext(LanguageContext);

    return (
        <section id="contact">
            <div className="container contact" data-aos="fade-up">
                <h2>{translations[selectedLanguage].contact_now}</h2>
                {/*<form>*/}
                {/*  <div className="form-control">*/}
                {/*    <input type="text" placeholder="Enter Your Email..." />*/}
                {/*    <button>contact</button>*/}
                {/*  </div>*/}
                {/*</form>*/}

                <div className="social-icons">

                    <div className="social-icon" onClick={handleWhatsAppClick}>
                        <FaWhatsapp />
                    </div>
                    <div className="social-icon" onClick={handleTelegramClick}>
                        <FaTelegram />
                    </div>
                    <div className="social-icon" onClick={handleFacebookClick}>
                        <FaFacebookF />
                    </div>
                    <div className="social-icon" onClick={handleTwitterClick}>
                        <FaTwitter />
                    </div>
                    <div className="social-icon" onClick={handleInstagramClick}>
                        <FaInstagram />
                    </div>
                    </div>
                </div>
        </section>
    );
};

export default Contact;
