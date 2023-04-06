import React, { useState } from "react";
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Question = React.memo(({ title, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(!showAnswer);
    };

    const handleWhatsAppClick = () => {
        window.location.href = "https://wa.me/46762702580";
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
                            <FaWhatsapp />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

export default Question;
