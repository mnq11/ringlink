import React, { useContext } from "react";
import "./Header.css";
import "aos/dist/aos.css";
import { HiSparkles } from "react-icons/hi";
import { BsArrowRight, BsCheckCircle } from "react-icons/bs";
import { LanguageContext } from "../../language/LanguageContext";
import { translations } from "../../language/translations";

const Header = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge" data-aos="fade-up">
            <HiSparkles size={16} />
            <span>{translations[selectedLanguage]?.Hero_Badge || "Supercharge your business"}</span>
          </div>
          
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
            <span className="title-line">{translations[selectedLanguage]?.Hero_Title_1 || "Supercharge your business"}</span>
            <span className="title-line">{translations[selectedLanguage]?.Hero_Title_2 || ", with our"}</span>
            <span className="title-line text-gradient">{translations[selectedLanguage]?.Hero_Title_3 || "all-in-one"}</span>
            <span className="title-line">{translations[selectedLanguage]?.Hero_Title_4 || "digital services platform."}</span>
          </h1>
          
          <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
            {translations[selectedLanguage]?.Hero_Description || "Struggling to keep track of your business? Managing projects, clients, digital transformation; running your business shouldn't be hard. With Hyper Scale Insights, you can automate processes, accelerate growth, and transform operations – all from expert digital consultancy."}
          </p>
          
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
            <button className="btn btn-primary btn-lg">
              <span>{translations[selectedLanguage]?.Start_Free_Consultation || "Start free consultation"}</span>
              <BsArrowRight size={18} />
            </button>
            <button className="btn btn-secondary btn-lg">
              <span>{translations[selectedLanguage]?.Watch_Demo || "Watch demo"}</span>
            </button>
          </div>
          
          <div className="hero-features" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-item">
              <BsCheckCircle size={16} />
              <span>{translations[selectedLanguage]?.Free_Consultation || "Free consultation"}</span>
            </div>
            <div className="feature-item">
              <BsCheckCircle size={16} />
              <span>{translations[selectedLanguage]?.No_Commitment || "No commitment required"}</span>
            </div>
            <div className="feature-item">
              <BsCheckCircle size={16} />
              <span>{translations[selectedLanguage]?.Expert_Guidance || "Expert guidance"}</span>
            </div>
          </div>
          
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="500">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">{translations[selectedLanguage]?.Successful_Projects || "Successful projects"}</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">{translations[selectedLanguage]?.Client_Satisfaction || "Client satisfaction"}</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">{translations[selectedLanguage]?.Expert_Support || "Expert support"}</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual" data-aos="fade-left" data-aos-delay="600">
          <div className="visual-container">
            <div className="visual-glow"></div>
            <div className="floating-cards">
              <div className="floating-card card-1">
                <div className="card-icon">📊</div>
                <div className="card-text">
                  <div className="card-amount">$2,350</div>
                  <div className="card-label">Revenue increase</div>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">📈</div>
                <div className="card-text">
                  <div className="card-amount">+300%</div>
                  <div className="card-label">ROI Growth</div>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">⚡</div>
                <div className="card-text">
                  <div className="card-amount">95%</div>
                  <div className="card-label">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Live activity feed like Upmind */}
      <div className="activity-feed" data-aos="fade-up" data-aos-delay="700">
        <div className="activity-item">
          <span className="client-name">Sarah J.</span> completed
          <span className="activity-highlight">Digital Transformation</span>
          <span className="activity-value">$15,000</span>
        </div>
        <div className="activity-item">
          <span className="client-name">Michael C.</span> started
          <span className="activity-highlight">Business Intelligence</span>
          <span className="activity-value">$8,500</span>
        </div>
        <div className="activity-item">
          <span className="client-name">Emily R.</span> upgraded
          <span className="activity-highlight">Strategic Consulting</span>
          <span className="activity-value">$12,000</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
