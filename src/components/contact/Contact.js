import React, {useContext} from "react";
import "./Contact.css";
// import { TiSocialGooglePlus } from "react-icons/ti";
import {FaFacebookF, FaTwitter, FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";

import "aos/dist/aos.css";
import {LanguageContext} from "../../language/LanguageContext";
import {translations} from "../../language/translations";

const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=46762702580", '_blank', 'noopener,noreferrer');
};

function handleTelegramClick() {
    window.open("https://t.me/+46762702580", '_blank', 'noopener,noreferrer');
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
