import React, { useContext, useMemo } from "react";
import "./Team.css";
import "aos/dist/aos.css";
import { HiStar } from "react-icons/hi";
import { BsQuote } from "react-icons/bs";
import { LanguageContext } from "../../language/LanguageContext";
import { translations } from "../../language/translations";
import { teamMembers } from "./teamMembers";
import TeamMember from "./TeamMember";

const Team = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  
  // Customer testimonials for digital services and business consultancy
  const testimonials = useMemo(() => [
    {
      id: 1,
      name: translations[selectedLanguage]?.Sarah_Johnson || "Sarah Johnson",
      role: translations[selectedLanguage]?.Sarah_Role || "CEO, TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: translations[selectedLanguage]?.Sarah_Text || "Hyper Scale Insights transformed our business operations completely. Their strategic consulting and digital transformation services increased our efficiency by 200% and helped us scale rapidly.",
    },
    {
      id: 2,
      name: translations[selectedLanguage]?.Michael_Chen || "Michael Chen",
      role: translations[selectedLanguage]?.Michael_Role || "Founder, CloudHost Pro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: translations[selectedLanguage]?.Michael_Text || "The business intelligence solutions they implemented gave us insights we never had before. Our decision-making is now data-driven and our ROI has increased by 300%.",
    },
    {
      id: 3,
      name: translations[selectedLanguage]?.Emily_Rodriguez || "Emily Rodriguez",
      role: translations[selectedLanguage]?.Emily_Role || "Operations Manager, WebCraft",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: translations[selectedLanguage]?.Emily_Text || "Their cybersecurity consulting and implementation services protected our business from potential threats. The team's expertise and ongoing support have been invaluable.",
    }
  ], [selectedLanguage]);

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
          <div className="content-left" data-aos="fade-right">
            <h2>
              <span className="title-highlight">{translations[selectedLanguage]?.Why_Different || "Hyper Scale Insights isn't just another consulting firm"}</span>
              {translations[selectedLanguage]?.Why_Description || "; it's a complete business transformation partner for digital and strategic growth."} 
              {translations[selectedLanguage]?.Why_Extended_Description || "Instead of dealing with multiple consultants, run everything from a fast, scalable, and customizable approach. What do you need more?"}
            </h2>
          </div>
          
          <div className="content-right" data-aos="fade-left">
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="testimonial-card" data-aos="fade-up" data-aos-delay={index * 150}>
                  <div className="testimonial-header">
                    <div className="quote-icon">
                      <BsQuote size={20} />
                    </div>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <HiStar key={`star-${testimonial.id}-${i}`} size={14} />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="testimonial-text">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-role">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
