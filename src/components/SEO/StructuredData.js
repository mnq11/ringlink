import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../language/LanguageContext';
import { translations } from '../../language/translations';

const StructuredData = () => {
    const { selectedLanguage } = useContext(LanguageContext);

    useEffect(() => {
        // Organization Schema
        const organizationSchema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hyper Scale Insights",
            "url": "https://hyperscaleinsights.com",
            "logo": "https://hyperscaleinsights.com/hyper-scale-full-logo.jpeg",
            "description": translations[selectedLanguage]?.SEO_Description || "Leading business intelligence and data analytics company",
            "foundingDate": "2024",
            "numberOfEmployees": "5-10",
            "industry": "Business Intelligence and Analytics",
            "keywords": translations[selectedLanguage]?.SEO_Keywords || "business intelligence, data analytics, digital transformation",
            "serviceArea": {
                "@type": "Place",
                "name": "Worldwide"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+46-XXX-XXX-XXX",
                "contactType": "customer service",
                "availableLanguage": ["English", "Arabic", "Swedish"]
            },
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "SE",
                "addressLocality": "Stockholm"
            },
            "sameAs": [
                "https://linkedin.com/company/hyperscaleinsights",
                "https://twitter.com/hyperscaleinsights"
            ]
        };

        // Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Business Intelligence and Data Analytics Services",
            "provider": {
                "@type": "Organization",
                "name": "Hyper Scale Insights"
            },
            "serviceType": "Business Intelligence, Data Analytics, Digital Transformation, Strategic Consulting, Cybersecurity, Technology Implementation",
            "description": translations[selectedLanguage]?.Service_BI_Extended || "Comprehensive business intelligence and data analytics solutions",
            "areaServed": "Worldwide",
            "category": "Business Intelligence and Analytics",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Business Intelligence Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Business Intelligence and Data Analytics",
                            "description": "Advanced data analytics, visualization, and business intelligence solutions"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Digital Transformation Consulting",
                            "description": "Comprehensive digital transformation strategy and implementation"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Strategic Business Consulting",
                            "description": "Strategic planning, market research, and business optimization"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Technology Implementation",
                            "description": "Enterprise technology solutions and system integration"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Cybersecurity Solutions",
                            "description": "Comprehensive cybersecurity strategy and implementation"
                        }
                    }
                ]
            }
        };

        // FAQ Schema
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": translations[selectedLanguage]?.FAQ_Q1 || "What types of digital services do you offer?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": translations[selectedLanguage]?.FAQ_A1 || "We provide comprehensive digital services including business intelligence, data analytics, digital transformation consulting, and strategic business consulting."
                    }
                },
                {
                    "@type": "Question",
                    "name": translations[selectedLanguage]?.FAQ_Q2 || "How do you approach digital transformation projects?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": translations[selectedLanguage]?.FAQ_A2 || "Our digital transformation approach is tailored to each client, starting with comprehensive assessment and strategic roadmap development."
                    }
                }
            ]
        };

        // Add schemas to head
        addSchemaToHead('organization-schema', organizationSchema);
        addSchemaToHead('service-schema', serviceSchema);
        addSchemaToHead('faq-schema', faqSchema);

    }, [selectedLanguage]);

    const addSchemaToHead = (id, schema) => {
        // Remove existing schema
        const existing = document.getElementById(id);
        if (existing) {
            existing.remove();
        }

        // Add new schema
        const script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    };

    return null;
};

export default StructuredData; 