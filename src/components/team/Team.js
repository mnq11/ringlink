import React, {useContext, useEffect} from "react";
import "./Team.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {teamMembers} from "./teamMembers";
import TeamMember from "./TeamMember";
import {translations} from "../../language/translations";
import {LanguageContext} from "../../language/LanguageContext";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { selectedLanguage} = useContext(LanguageContext);

  return (
      <section id="team">
        <div className="container team" data-aos="fade-up">
          <h2>{translations[selectedLanguage].Meet_members}</h2>
          <p className="u-text-small">

          </p>
          <div className="team-members">
            {teamMembers.map((member) => (
                <TeamMember
                    key={member.id}
                    imageUrl={member.imageUrl}
                    name={member.name}
                    role={member.role}
                />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Team;
