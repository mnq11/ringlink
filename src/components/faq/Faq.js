import React, { useEffect, useState } from "react";
import { BsPlus, BsDash, BsChatDots } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Faq.css";

const Faq = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    
    const [openQuestion, setOpenQuestion] = useState(null);

    // FAQ questions for digital services and business consultancy
    const faqQuestions = [
        {
            id: 1,
            question: "What types of digital services do you offer?",
            answer: "We provide comprehensive digital services including business intelligence & analytics, digital transformation consulting, technology implementation, strategic business consulting, cybersecurity solutions, and innovation strategy development."
        },
        {
            id: 2,
            question: "How do you approach digital transformation projects?",
            answer: "Our digital transformation approach is tailored to each client. We start with a comprehensive assessment, develop a strategic roadmap, implement solutions in phases, and provide ongoing support to ensure successful adoption and ROI."
        },
        {
            id: 3,
            question: "What industries do you specialize in?",
            answer: "We work across various industries including technology companies, financial services, healthcare organizations, manufacturing, and retail & e-commerce. Our expertise allows us to adapt our solutions to industry-specific needs."
        },
        {
            id: 4,
            question: "How long does a typical consulting engagement take?",
            answer: "Project timelines vary based on scope and complexity. Strategic consulting projects typically range from 3-6 months, while technology implementations can take 6-18 months. We provide detailed timelines during our initial consultation."
        },
        {
            id: 5,
            question: "Do you provide ongoing support after project completion?",
            answer: "Yes! We offer comprehensive post-implementation support including training, maintenance, optimization, and strategic guidance to ensure long-term success and continuous improvement of your digital initiatives."
        },
        {
            id: 6,
            question: "How do you measure the success of your consulting services?",
            answer: "We establish clear KPIs and success metrics at the project outset, including ROI improvements, efficiency gains, cost reductions, and business growth indicators. Regular reporting ensures transparency and accountability."
        },
        {
            id: 7,
            question: "Can you work with our existing technology infrastructure?",
            answer: "Absolutely! We specialize in integrating new solutions with existing systems. Our team conducts thorough assessments to ensure seamless integration while maximizing your current technology investments."
        },
        {
            id: 8,
            question: "How do we get started with your services?",
            answer: "Getting started is simple! Schedule a free consultation where we'll discuss your challenges, goals, and requirements. We'll then provide a customized proposal outlining our recommended approach and timeline."
        }
    ];

    const toggleQuestion = (questionId) => {
        setOpenQuestion(openQuestion === questionId ? null : questionId);
    };

    const handleNavigation = (section) => {
        console.log(`Navigate to: ${section}`);
        // Add your navigation logic here
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="u-title" data-aos="fade-up">
                    <h2>
                        Your questions, <span className="text-gradient">answered</span>
                    </h2>
                    <p>
                        Have questions about our digital services and consulting approach? 
                        Find answers here, or reach out to our expert team for personalized guidance.
                    </p>
                </div>

                <div className="faq-content" data-aos="fade-up" data-aos-delay="200">
                    <div className="faq-grid">
                        <div className="faq-questions">
                            {faqQuestions.map((item, index) => (
                                <div 
                                    key={item.id} 
                                    className={`faq-item ${openQuestion === item.id ? 'active' : ''}`}
                                    data-aos="fade-up" 
                                    data-aos-delay={index * 100}
                                >
                                    <button 
                                        className="faq-question"
                                        onClick={() => toggleQuestion(item.id)}
                                        aria-expanded={openQuestion === item.id}
                                        aria-controls={`faq-answer-${item.id}`}
                                    >
                                        <span className="question-text">{item.question}</span>
                                        <span className="question-icon">
                                            {openQuestion === item.id ? <BsDash size={20} /> : <BsPlus size={20} />}
                                        </span>
                                    </button>
                                    <div 
                                        className="faq-answer"
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
                                    <BsChatDots size={24} />
                                </div>
                                <h3>Need expert guidance?</h3>
                                <p>Our consulting team is ready to help you navigate your digital transformation journey. Schedule a free consultation to discuss your specific needs.</p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => handleNavigation('contact-support')}
                                >
                                    <span>Schedule Consultation</span>
                                </button>
                            </div>

                            <div className="resources-card">
                                <div className="resources-icon">
                                    <HiSparkles size={24} />
                                </div>
                                <h3>Helpful Resources</h3>
                                <ul className="resources-list">
                                    <li>
                                        <button 
                                            onClick={() => handleNavigation('case-studies')}
                                            className="resource-link"
                                        >
                                            📊 Case Studies
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => handleNavigation('whitepapers')}
                                            className="resource-link"
                                        >
                                            📄 Industry Whitepapers
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => handleNavigation('blog')}
                                            className="resource-link"
                                        >
                                            💡 Blog & Insights
                                        </button>
                                    </li>
                                    <li>
                                        <button 
                                            onClick={() => handleNavigation('webinars')}
                                            className="resource-link"
                                        >
                                            🎥 Expert Webinars
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
