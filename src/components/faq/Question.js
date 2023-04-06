import React, {useContext, useState} from "react";
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import {translations} from "../../language/translations";
import {LanguageContext} from "../../language/LanguageContext";

const Question = React.memo(({ title, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const { selectedLanguage} = useContext(LanguageContext);

    const handleClick = () => {
        setShowAnswer(!showAnswer);
    };

    const handleWhatsAppClick = () => {
        window.location.href = "https://api.whatsapp.com/send?phone=46762702580";
    };


    return (
        <div className="container question">
            <div className="question-title">
                <h4>{title}</h4>
                <button className="question-icons" onClick={handleClick}>
                    {showAnswer ? (
                        <AiOutlineMinus color="red" />
                    ) : (
                        <AiOutlinePlus color="#1f93ff" />
                    )}
                </button>
            </div>
            <div className="question-answer">
                {showAnswer && (
                    <div className="answer-container">
                        <p className="u-text-small">{answer}</p>
                        <div className="social-icon" onClick={handleWhatsAppClick}>
                            <div className="icon-container">
                                <FaWhatsapp />
                            </div>
                            <div className="icon-text">
                                <span className="icon-text">{translations[selectedLanguage].Talke_to_Use}</span>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});
export default Question;
