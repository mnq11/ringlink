import React, { useEffect } from "react";
import "./Team.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiStar } from "react-icons/hi";
import { BsQuote } from "react-icons/bs";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Customer testimonials for digital services and business consultancy
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechFlow Solutions",
      company: "TechFlow",
      rating: 5,
      text: "Hyper Scale Insights transformed our business operations completely. Their strategic consulting and digital transformation services increased our efficiency by 200% and helped us scale rapidly.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, CloudHost Pro",
      company: "CloudHost",
      rating: 5,
      text: "The business intelligence solutions they implemented gave us insights we never had before. Our decision-making is now data-driven and our ROI has increased by 300%.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Operations Manager, WebCraft",
      company: "WebCraft",
      rating: 5,
      text: "Their cybersecurity consulting and implementation services protected our business from potential threats. The team's expertise and ongoing support have been invaluable.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

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
          <p className="partners-label">Join top industry leaders:</p>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-item" data-aos="fade-up" data-aos-delay={index * 100}>
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
              <span className="title-highlight">Hyper Scale Insights isn't just another consulting firm</span>; 
              it's a complete business transformation partner for digital and strategic growth. 
              Instead of juggling multiple consultants, manage everything from a 
              <span className="text-gradient"> fast</span>, 
              <span className="text-gradient"> scalable</span> & 
              <span className="text-gradient"> readily customizable</span> approach. 
              What more do you need?
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
                        <HiStar key={i} size={14} />
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

        {/* Stats Section */}
        <div className="stats-section" data-aos="fade-up" data-aos-delay="400">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Successful Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Expert Support</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Industry Experts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
