// Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './HomeStyles.css';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';

const Home = ({ theme }) => {
    const { t } = useTranslation();
    const teamMembers = [
        {
            name: t('Nabil Alkadami'),
            role: t('CEO'),
            image: 'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/328823660_6528791660536150_7851627034796407651_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=g_-cepzGJlIAX8RbbS7&_nc_ht=scontent-cph2-1.xx&oh=00_AfD0M19S4q_FxIYLNIg6y_esw8RuBuzpqUau8fZ8kraeAg&oe=6422E949',
        },
        {
            name: t('Alkadami Halketwassl'),
            role: t('Researcher'),
            image: process.env.PUBLIC_URL + '/Team/Halketwassl.jpeg',
        },        {
            name: t('Amin Alsofiani'),
            role: t('Doctor'),
            image: 'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/109607088_2963565293698674_3008619118434686210_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=Wg92lwSF5-MAX82lWcv&_nc_ht=scontent-cph2-1.xx&oh=00_AfAjFwCaXFPqk-uHt6GdBge0AOUOv6-BrCz2ZDMkzgLn_A&oe=6445E197',
        },
        {
            name: t('Mohammed Nabil'),
            role: t('Developer'),
            image: 'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/33395483_1954068504612951_1345252326260080640_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HkrAfK2FxuIAX9aiv2Q&_nc_ht=scontent-cph2-1.xx&oh=00_AfDpqdBd2akHCcZ4Q8ReOW_Jf2PGwXN8kd58tAHROUDmgg&oe=6445F54E',
        },

        {
            name: t('Abdulrhman Farhan'),
            role: t('Exporeter'),
            image: process.env.PUBLIC_URL + '/Team/Farhan.jpg',
        },

        {
            name: t('Akram Alnajjar'),
            role: t('Marketing Manager'),
            image: 'https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/125443351_3399872616764046_2009647877559854198_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=DAkB8LwlVI8AX8edH4V&_nc_ht=scontent-cph2-1.xx&oh=00_AfDaiBpl2PZGW89eofOktuhXUn0N8LnY7TV3u4j6T4aC1A&oe=6445F513',
        }, {
            name: t('Fuaad Alhadari'),
            role: t('Executive Manager'),
            image: 'https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/337034188_747268340329196_39984735804986146_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JihxMgEvht8AX8OLmyL&_nc_ht=scontent-cph2-1.xx&oh=00_AfD2BHjzm5GOzEhCghtmkjUx8Rnayia_mg8crg8gzo-Xhg&oe=6423CB3F',
        },
    ];

    return (
        <div className={`home-container ${theme}`}>
            <section className={`hero-section ${theme}`}>
                <div className={`hero-content ${theme}`}>
                    <h1 className={`hero-title ${theme}`}>{t('We_Build_Confidence')}</h1>
                </div>
            </section>

            <section className={`about-section ${theme}`}>
                <div className="container">
                    <h2 className="section-title">{t('About')}</h2>
                    <div className="about-content">
                        <p>{t('Description_about_the_company')}</p>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="container">
                    <Services />
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
