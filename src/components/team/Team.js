import React, { useContext } from "react";
import "./Team.css";
import "aos/dist/aos.css";
import { LanguageContext } from "../../language/LanguageContext";
import { translations } from "../../language/translations";
import { teamMembers } from "./teamMembers";
import TeamMember from "./TeamMember";

const Team = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  
  // Industry partners and clients
  const partners = [
    { name: "TechCorp", logo: "🏢" },
    { name: "DataFlow", logo: "📊" },
    { name: "CloudTech", logo: "☁️" },
    { name: "InnovateLab", logo: "💡" },
    { name: "SecureNet", logo: "🔒" },
    { name: "GrowthHub", logo: "📈" }
  ];

  return (
    <section id="team" className="social-proof-section">
      <div className="container">
        {/* Partners Section */}
        <div className="partners-section" data-aos="fade-up">
          <p className="partners-label">{translations[selectedLanguage]?.Join_Leaders || "Join top industry leaders:"}</p>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={partner.name} className="partner-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="partner-logo">{partner.logo}</div>
                <span className="partner-name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="social-proof-content">
          <div className="content-center" data-aos="fade-up">
            <h2>
              <span className="title-highlight">{translations[selectedLanguage]?.Why_Different || "Hyper Scale Insights isn't just another consulting firm"}</span>
              {translations[selectedLanguage]?.Why_Description || "; it's a complete business transformation partner for digital and strategic growth."} 
              {translations[selectedLanguage]?.Why_Extended_Description || "Instead of dealing with multiple consultants, run everything from a fast, scalable, and customizable approach. What do you need more?"}
            </h2>
          </div>
        </div>

        {/* Real Team Members Section */}
        <div className="team-members-section" data-aos="fade-up" data-aos-delay="300">
          <div className="section-header">
            <h3>{translations[selectedLanguage]?.Meet_Our_Team || "Meet Our Expert Team"}</h3>
            <p>{translations[selectedLanguage]?.Team_Description || "Our dedicated professionals bring years of experience and expertise to help transform your business."}</p>
          </div>
          <div className="team-members-grid">
            {teamMembers.map((member, index) => (
              <div key={member.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <TeamMember 
                  imageUrl={member.imageUrl}
                  name={member.name}
                  role={member.role}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section" data-aos="fade-up" data-aos-delay="400">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">{translations[selectedLanguage]?.Successful_Projects || "Successful Projects"}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">{translations[selectedLanguage]?.Happy_Clients || "Happy Clients"}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">{translations[selectedLanguage]?.Expert_Support || "Expert Support"}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">{translations[selectedLanguage]?.Industry_Experts || "Industry Experts"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
