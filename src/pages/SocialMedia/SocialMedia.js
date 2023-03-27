import React from 'react';
import './SocialMediaStyles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const SocialMedia = () => {
    return (
        <div className="social-media">
            <a href="https://www.facebook.com/profile.php?id=100091332034987" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="https://www.instagram.com/halketwassl/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>

            <a href="https://wa.me/46762702580" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'whatsapp']} />
            </a>

        </div>
    );
};

export default SocialMedia;
