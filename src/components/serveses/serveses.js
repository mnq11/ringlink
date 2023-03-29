import React, {useContext, useEffect} from "react";
import "./Serveses.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import BigPic from "../../assets/hiclipart.com.png";
import Serves from "./Serves";
import { FeatureList } from "./data";
import { LanguageContext } from "../../language/LanguageContext";
import { translations } from "../../language/translations";
import AOS from "aos";
import "aos/dist/aos.css";

const Serveses = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { selectedLanguage} = useContext(LanguageContext);

  return (
    <section id="serverss">
      <div className="container serverss">
        <div className="title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>{translations[selectedLanguage].Core_serverss}</h2>
          <p className="u-text-small">
            {translations[selectedLanguage].Core_Paragraph}
          </p>
        </div>
        <div className="serverss-content">
          <div className="serverss-left" data-aos="fade-right">
            <img src={BigPic} alt="phone" />
          </div>
          <div className="serverss-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
                <Serves
                    key={feature.id}
                    icon={feature.icon}
                    headingKey={feature.headingKey} // Changed to headingKey
                    textKey={feature.textKey} // Changed to textKey
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serveses;