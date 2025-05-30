import React, { useContext, useMemo } from "react";
import "./Serveses.css";
import { HiSparkles, HiLightningBolt, HiShieldCheck, HiCog, HiUsers, HiChartBar } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import "aos/dist/aos.css";
import { LanguageContext } from "../../language/LanguageContext";
import { translations } from "../../language/translations";

const Serveses = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  
  // Digital services and business consultancy offerings
  const digitalServices = useMemo(() => [
    {
      id: 1,
      icon: <HiUsers size={24} />,
      titleKey: "All_Business_Needs",
      title: translations[selectedLanguage]?.All_Business_Needs || "All your business needs in one place",
      description: translations[selectedLanguage]?.All_Business_Needs_Desc || "Every project, every client, and every interaction is managed seamlessly, so you always know your business status, what needs attention, and when to follow up.",
      link: translations[selectedLanguage]?.Explore_Client_Management || "Explore client management"
    },
    {
      id: 2,
      icon: <HiLightningBolt size={24} />,
      titleKey: "Digital_Transformation",
      title: translations[selectedLanguage]?.Digital_Transformation || "Digital transformation that delivers",
      description: translations[selectedLanguage]?.Digital_Transformation_Desc || "You don't have to struggle with outdated processes anymore. We automate workflows, optimize operations, and implement cutting-edge solutions with proven methodologies.",
      link: translations[selectedLanguage]?.Explore_Transformation_Services || "Explore transformation services"
    },
    {
      id: 3,
      icon: <HiCog size={24} />,
      titleKey: "Technology_Implementation",
      title: translations[selectedLanguage]?.Technology_Implementation || "Technology implementation that 'just works'",
      description: translations[selectedLanguage]?.Technology_Implementation_Desc || "The moment you engage our services, we implement robust technology solutions, integrate systems, and manage deployments using powerful frameworks—so everything runs smoothly.",
      link: translations[selectedLanguage]?.Discover_Implementation_Services || "Discover implementation services"
    },
    {
      id: 4,
      icon: <HiChartBar size={24} />,
      titleKey: "Business_Intelligence",
      title: translations[selectedLanguage]?.Business_Intelligence || "Business intelligence that drives decisions",
      description: translations[selectedLanguage]?.Business_Intelligence_Desc || "Transform your data into actionable insights. Our analytics solutions provide real-time dashboards, predictive modeling, and strategic recommendations for growth.",
      link: translations[selectedLanguage]?.Explore_Analytics_Solutions || "Explore analytics solutions"
    },
    {
      id: 5,
      icon: <HiShieldCheck size={24} />,
      titleKey: "Cybersecurity",
      title: translations[selectedLanguage]?.Cybersecurity || "Cybersecurity that protects your future",
      description: translations[selectedLanguage]?.Cybersecurity_Desc || "Safeguard your digital assets with comprehensive security strategies. We assess risks, implement protection measures, and ensure compliance with industry standards.",
      link: translations[selectedLanguage]?.Discover_Security_Solutions || "Discover security solutions"
    },
    {
      id: 6,
      icon: <HiSparkles size={24} />,
      titleKey: "Strategic_Consulting",
      title: translations[selectedLanguage]?.Strategic_Consulting || "Strategic consulting that mirrors your vision",
      description: translations[selectedLanguage]?.Strategic_Consulting_Desc || "Your business should reflect your unique goals and values. With personalized consulting, we help you develop strategies, optimize processes, and achieve sustainable growth.",
      link: translations[selectedLanguage]?.Explore_Strategic_Consulting || "Explore strategic consulting"
    }
  ], [selectedLanguage]);

  return (
    <section id="services" className="features-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>
            {translations[selectedLanguage]?.Services_Title || "Imagine what you can do with a"} <span className="text-gradient">powerhouse of services</span>.
          </h2>
          <p>
            {translations[selectedLanguage]?.Services_Description || "It's time to say goodbye to inefficient processes, endless manual tasks, and business bottlenecks. Built as a complete digital solution that is fast, reliable, and scalable."}
          </p>
        </div>

        <div className="features-grid" data-aos="fade-up" data-aos-delay="200">
          {digitalServices.map((service, index) => (
            <div key={service.id} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="feature-icon">
                {service.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">
                  {service.title}
                </h3>
                <p className="feature-description">{service.description}</p>
                <button 
                  className="feature-link"
                  onClick={() => {
                    // Scroll to contact section for service inquiries
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>{service.link}</span>
                  <BsArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="features-cta" data-aos="fade-up" data-aos-delay="400">
          <div className="cta-content">
            <h3>{translations[selectedLanguage]?.And_List_Goes_On || "And the list goes on…"}</h3>
            <p>{translations[selectedLanguage]?.Services_CTA_Description || "We haven't scratched the surface of what we can do, and we're just getting started. The best thing about all our services - everything works together, so you don't need to worry about it."}</p>
            <button className="btn btn-primary btn-lg">
              <span>{translations[selectedLanguage]?.Explore_All_Services || "Explore all services"}</span>
              <BsArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serveses;