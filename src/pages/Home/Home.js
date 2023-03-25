// Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './HomeStyles.css';
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import {t} from "i18next";

const Home = () => {
    const { t } = useTranslation();
    const teamMembers = [
        {
            name: t('Team_Member_1_Name'),
            role: t('Team_Member_1_Role'),
            image: 'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/328823660_6528791660536150_7851627034796407651_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=g_-cepzGJlIAX8RbbS7&_nc_ht=scontent-cph2-1.xx&oh=00_AfD0M19S4q_FxIYLNIg6y_esw8RuBuzpqUau8fZ8kraeAg&oe=6422E949',
        },
        {
            name: t('Team_Member_2_Name'),
            role: t('Team_Member_2_Role'),
            image: 'path-to-image-2.jpg',
        },
        {
            name: t('Team_Member_3_Name'),
            role: t('Team_Member_3_Role'),
            image: 'path-to-image-3.jpg',
        },
        {
            name: t('Team_Member_4_Name'),
            role: t('Team_Member_4_Role'),
            image: 'path-to-image-4.jpg',
        },
    ];
    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">{t('We_Build_Confidence')}</h1>
                    <button className="hero-cta">{t('Learn_More')}</button>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <h2 className="section-title">{t('About')}</h2>
                    <div className="about-content">
                        <p>{t('Description_about_the_company')}</p>
                    </div>
                </div>
            </section>

            <section className="animated-background-section"></section>

            <section className="services-section">
                <div className="container">
                    <div>
                        <Services/>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <h2 className="section-title">{t('Our_Team')}</h2>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member">
                                <img src={member.image} alt={member.name} />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div>
                    <Contact/>
                </div>
            </section>
        </div>
    );
};

export default Home;
