import React, {useContext} from "react";
import "./Serves.css";
import { BsHexagon } from "react-icons/bs";
import {LanguageContext} from "../../language/LanguageContext";
import {translations} from "../../language/translations";
const Serves = ({ icon, headingKey, textKey }) => {
    const { selectedLanguage } = useContext(LanguageContext);

    return (
    <div className="feature">
      <div className="feature-icon">
        <BsHexagon color="#fc5412" size={55} />
        <div className="inner-icon">{icon}</div>
      </div>

        <div className="feature-text">
            <h3>{translations[selectedLanguage]?.[headingKey] || headingKey}</h3>
            <p className="u-text-small">{translations[selectedLanguage]?.[textKey] || textKey}</p>
      </div>
    </div>
  );
};

export default Serves;
