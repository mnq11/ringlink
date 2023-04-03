import React, {useContext, useEffect} from "react";
import "./Header.css";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/work.png";
import { BsMouse } from "react-icons/bs";
import { LanguageContext } from "../../language/LanguageContext";
import { translations } from "../../language/translations";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { selectedLanguage} = useContext(LanguageContext);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>{translations[selectedLanguage].Header_Title_1}</span>
            <span>{translations[selectedLanguage].Header_Title_2}</span>
            <span>{translations[selectedLanguage].Header_Title_3}</span>
          </h1>
          <p className="u-text-small">
            {translations[selectedLanguage].Header_Paragraph}
          </p>

        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#serverss">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
