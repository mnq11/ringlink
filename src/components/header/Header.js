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
        
        {/* Remove the floating cards and activity feed sections */}
      </div>
      
    </section>
  );
};

export default Header;
