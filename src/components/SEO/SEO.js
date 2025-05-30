import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../language/LanguageContext';
import { translations } from '../../language/translations';

const SEO = ({ 
    title, 
    description, 
    keywords, 
    image = "/hyper-scale-full-logo.jpeg",
    url = "https://hyperscaleinsights.com",
    type = "website"
}) => {
    const { selectedLanguage } = useContext(LanguageContext);

    useEffect(() => {
        // Update document title
        const seoTitle = title || translations[selectedLanguage]?.SEO_Title || "Hyper Scale Insights - Business Intelligence & Data Analytics";
        document.title = seoTitle;

        // Update meta description
        const seoDescription = description || translations[selectedLanguage]?.SEO_Description || "Leading business intelligence and data analytics solutions";
        updateMetaTag('description', seoDescription);

        // Update meta keywords
        const seoKeywords = keywords || translations[selectedLanguage]?.SEO_Keywords || "business intelligence, data analytics, digital transformation";
        updateMetaTag('keywords', seoKeywords);

        // Update Open Graph tags
        updateMetaProperty('og:title', seoTitle);
        updateMetaProperty('og:description', seoDescription);
        updateMetaProperty('og:image', `${url}${image}`);
        updateMetaProperty('og:url', url);
        updateMetaProperty('og:type', type);

        // Update Twitter tags
        updateMetaProperty('twitter:title', seoTitle);
        updateMetaProperty('twitter:description', seoDescription);
        updateMetaProperty('twitter:image', `${url}${image}`);

        // Update language attributes
        document.documentElement.lang = selectedLanguage.toLowerCase();
        
    }, [selectedLanguage, title, description, keywords, image, url, type]);

    const updateMetaTag = (name, content) => {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.name = name;
            document.head.appendChild(element);
        }
        element.content = content;
    };

    const updateMetaProperty = (property, content) => {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
        }
        element.content = content;
    };

    return null; // This component doesn't render anything
};

export default SEO; 