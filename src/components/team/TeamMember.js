// src/components/TeamMember.js

import React, { useContext } from "react";
import { LanguageContext } from "../../language/LanguageContext";
import { translations } from "../../language/translations";

const TeamMember = ({ imageUrl, name, role }) => {
    const { selectedLanguage } = useContext(LanguageContext);

    return (
        <div className="team-member">
            <img src={imageUrl} alt={name} />
            <h3>{translations[selectedLanguage]?.[name] || name}</h3>
            <p>{translations[selectedLanguage]?.[role] || role}</p>
        </div>
    );
};

export default TeamMember;
