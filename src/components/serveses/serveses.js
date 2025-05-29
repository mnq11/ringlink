import React, { useEffect } from "react";
import "./Serveses.css";
import { HiSparkles, HiLightningBolt, HiShieldCheck, HiCog, HiUsers, HiChartBar } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Serveses = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Digital services and business consultancy offerings
  const digitalServices = [
    {
      id: 1,
      icon: <HiUsers size={24} />,
      title: "All your business needs in one place",
      description: "Every project, every client, and every interaction is managed seamlessly, so you always know your business status, what needs attention, and when to follow up.",
      link: "Explore client management"
    },
    {
      id: 2,
      icon: <HiLightningBolt size={24} />,
      title: "Digital transformation that delivers",
      description: "You don't have to struggle with outdated processes anymore. We automate workflows, optimize operations, and implement cutting-edge solutions with proven methodologies.",
      link: "Explore transformation services"
    },
    {
      id: 3,
      icon: <HiCog size={24} />,
      title: "Technology implementation that 'just works'",
      description: "The moment you engage our services, we implement robust technology solutions, integrate systems, and manage deployments using powerful frameworks—so everything runs smoothly.",
      link: "Discover implementation services"
    },
    {
      id: 4,
      icon: <HiChartBar size={24} />,
      title: "Business intelligence that drives decisions",
      description: "Transform your data into actionable insights. Our analytics solutions provide real-time dashboards, predictive modeling, and strategic recommendations for growth.",
      link: "Explore analytics solutions"
    },
    {
      id: 5,
      icon: <HiShieldCheck size={24} />,
      title: "Cybersecurity that protects your future",
      description: "Safeguard your digital assets with comprehensive security strategies. We assess risks, implement protection measures, and ensure compliance with industry standards.",
      link: "Discover security solutions"
    },
    {
      id: 6,
      icon: <HiSparkles size={24} />,
      title: "Strategic consulting that mirrors your vision",
      description: "Your business should reflect your unique goals and values. With personalized consulting, we help you develop strategies, optimize processes, and achieve sustainable growth.",
      link: "Explore strategic consulting"
    }
  ];

  return (
    <section id="serverss" className="features-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>
            Imagine what you can do with a <span className="text-gradient">powerhouse of services</span>.
          </h2>
          <p>
            It's time to say goodbye to inefficient processes, endless manual tasks, and business bottlenecks. 
            Built as a complete digital solution that is fast, reliable, and scalable.
          </p>
        </div>

        <div className="features-grid" data-aos="fade-up" data-aos-delay="200">
          {digitalServices.map((service, index) => (
            <div key={service.id} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="feature-icon">
                {service.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{service.title}</h3>
                <p className="feature-description">{service.description}</p>
                <button 
                  className="feature-link"
                  onClick={() => console.log(`Navigate to: ${service.link}`)}
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
            <h3>And the list goes on…</h3>
            <p>We haven't even scratched the surface of what we can do, and we're just getting started. The best bit about all our services - everything works together, so you don't have to.</p>
            <button className="btn btn-primary btn-lg">
              <span>Explore all services</span>
              <BsArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serveses;