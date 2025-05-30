import React, { useState, useContext, useMemo, useEffect } from "react";
import "./Faq.css";
import "aos/dist/aos.css";
import { HiPlus, HiMinus, HiQuestionMarkCircle, HiBookOpen } from "react-icons/hi";
import { LanguageContext } from "../../language/LanguageContext";
import { translations } from "../../language/translations";

const Faq = () => {
    const { selectedLanguage } = useContext(LanguageContext);
    
    const [openQuestion, setOpenQuestion] = useState(null);

    // Debug effect to track state changes
    useEffect(() => {
        console.log('FAQ state changed. Open question:', openQuestion);
    }, [openQuestion]);

    // FAQ questions for digital services and business consultancy
    const faqData = useMemo(() => [
        {
            id: 1,
            question: translations[selectedLanguage]?.FAQ_Q1 || "What types of digital services do you offer?",
            answer: translations[selectedLanguage]?.FAQ_A1 || "We provide comprehensive digital services including business intelligence & analytics, digital transformation consulting, technology implementation, strategic business consulting, cybersecurity solutions, and innovation strategy development."
        },
        {
            id: 2,
            question: translations[selectedLanguage]?.FAQ_Q2 || "How do you approach digital transformation projects?",
            answer: translations[selectedLanguage]?.FAQ_A2 || "Our digital transformation approach is tailored to each client. We start with a comprehensive assessment, develop a strategic roadmap, implement solutions in phases, and provide ongoing support to ensure successful adoption and ROI."
        },
        {
            id: 3,
            question: translations[selectedLanguage]?.FAQ_Q3 || "What industries do you specialize in?",
            answer: translations[selectedLanguage]?.FAQ_A3 || "We work across various industries including technology companies, financial services, healthcare organizations, manufacturing, and retail & e-commerce. Our expertise allows us to adapt our solutions to industry-specific needs."
        },
        {
            id: 4,
            question: translations[selectedLanguage]?.FAQ_Q4 || "How long does a typical consulting engagement take?",
            answer: translations[selectedLanguage]?.FAQ_A4 || "Project timelines vary based on scope and complexity. Strategic consulting projects typically range from 3-6 months, while technology implementations can take 6-18 months. We provide detailed timelines during our initial consultation."
        },
        {
            id: 5,
            question: translations[selectedLanguage]?.FAQ_Q5 || "Do you provide ongoing support after project completion?",
            answer: translations[selectedLanguage]?.FAQ_A5 || "Yes! We offer comprehensive post-implementation support including training, maintenance, optimization, and strategic guidance to ensure long-term success and continuous improvement of your digital initiatives."
        },
        {
            id: 6,
            question: translations[selectedLanguage]?.FAQ_Q6 || "How do you measure the success of your consulting services?",
            answer: translations[selectedLanguage]?.FAQ_A6 || "We establish clear KPIs and success metrics at the project outset, including ROI improvements, efficiency gains, cost reductions, and business growth indicators. Regular reporting ensures transparency and accountability."
        },
        {
            id: 7,
            question: translations[selectedLanguage]?.FAQ_Q7 || "Can you work with our existing technology infrastructure?",
            answer: translations[selectedLanguage]?.FAQ_A7 || "Absolutely! We specialize in integrating new solutions with existing systems. Our team conducts thorough assessments to ensure seamless integration while maximizing your current technology investments."
        },
        {
            id: 8,
            question: translations[selectedLanguage]?.FAQ_Q8 || "How do we get started with your services?",
            answer: translations[selectedLanguage]?.FAQ_A8 || "Getting started is simple! Schedule a free consultation where we'll discuss your challenges, goals, and requirements. We'll then provide a customized proposal outlining our recommended approach and timeline."
        }
    ], [selectedLanguage]);

    const handleQuestionClick = (questionId) => {
        console.log('Button clicked for question:', questionId);
        console.log('Current openQuestion state:', openQuestion);
        
        if (openQuestion === questionId) {
            console.log('Closing question:', questionId);
            setOpenQuestion(null);
        } else {
            console.log('Opening question:', questionId);
            setOpenQuestion(questionId);
        }
    };

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
            case 'case-studies':
            case 'whitepapers':
            case 'blog':
            case 'webinars':
                // For now, scroll to services section as these resources aren't implemented yet
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
                break;
            default:
                // Default to contact section
                const defaultSection = document.getElementById('contact');
                if (defaultSection) {
                    defaultSection.scrollIntoView({ behavior: 'smooth' });
                }
        }
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="u-title" data-aos="fade-up">
                    <h2>
                        {translations[selectedLanguage]?.FAQs || "Your questions"}, <span className="text-gradient">answered</span>
                    </h2>
                    <p>
                        {translations[selectedLanguage]?.FAQs_Description || "Have questions about our digital services and consulting approach? Find answers here, or reach out to our expert team for personalized guidance."}
                    </p>
                </div>

                <div className="faq-content" data-aos="fade-up" data-aos-delay="200">
                    <div className="faq-grid">
                        <div className="faq-questions">
                            {faqData.map((item, index) => (
                                <div 
                                    key={item.id} 
                                    className={`faq-item ${openQuestion === item.id ? 'active' : ''}`}
                                >
                                    <button 
                                        className="faq-question"
                                        onClick={() => handleQuestionClick(item.id)}
                                        aria-expanded={openQuestion === item.id}
                                        aria-controls={`faq-answer-${item.id}`}
                                    >
                                        <span className="question-text">{item.question}</span>
                                        <span className="question-icon">
                                            {openQuestion === item.id ? <HiMinus /> : <HiPlus />}
                                        </span>
                                    </button>
                                    <div 
                                        className={`faq-answer ${openQuestion === item.id ? 'show' : ''}`}
                                        id={`faq-answer-${item.id}`}
                                        role="region"
                                        aria-labelledby={`faq-question-${item.id}`}
                                    >
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="faq-sidebar" data-aos="fade-left" data-aos-delay="300">
                            <div className="support-card">
                                <div className="support-icon">
                                    <HiQuestionMarkCircle />
                                </div>
                                <h3>{translations[selectedLanguage]?.Need_Expert_Guidance || "Need expert guidance?"}</h3>
                                <p>{translations[selectedLanguage]?.Expert_Guidance_Text || "Our consulting team is ready to help you navigate your digital transformation journey. Schedule a free consultation to discuss your specific needs."}</p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => handleNavigation('contact-support')}
                                >
                                    <span>{translations[selectedLanguage]?.Schedule_Consultation || "Schedule Consultation"}</span>
                                </button>
                            </div>

                            <div className="resources-card">
                                <div className="resources-icon">
                                    <HiBookOpen />
                                </div>
                                <h3>{translations[selectedLanguage]?.Helpful_Resources || "Helpful Resources"}</h3>
                                <ul className="resources-list">
                                    <li>
                                        <button 
                                            onClick={() => handleNavigation('case-studies')}
                                            className="resource-link"
                                        >
                                            {translations[selectedLanguage]?.Case_Studies || "Case Studies"}
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => handleNavigation('whitepapers')}
                                            className="resource-link"
                                        >
                                            {translations[selectedLanguage]?.Industry_Whitepapers || "Industry Whitepapers"}
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => handleNavigation('blog')}
                                            className="resource-link"
                                        >
                                            {translations[selectedLanguage]?.Blog_Insights || "Blog & Insights"}
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => handleNavigation('webinars')}
                                            className="resource-link"
                                        >
                                            {translations[selectedLanguage]?.Expert_Webinars || "Expert Webinars"}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
