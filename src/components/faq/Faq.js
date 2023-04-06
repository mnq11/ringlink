import React, { useContext, useEffect } from "react";
import { questions } from "./data.js";
import Question from "./Question";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageContext } from "../../language/LanguageContext";

const Faq = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    const { selectedLanguage } = useContext(LanguageContext);

    return (
        <section id="faq">
            <div className="container faq">
                {/* ... */}
                <div className="questions">
                    {questions.map((question) => (
                        <Question
                            key={question.id}
                            title={question.title[selectedLanguage]}
                            answer={question.answer[selectedLanguage]}
                />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
