// TestimonialsSlider.js
import React, { useState } from 'react';
import './TestimonialsSliderStyles.css';
import {t} from "i18next";

const TestimonialsSlider = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className={index === currentIndex ? 'testimonial active' : 'testimonial'}
                >
                    <p className="testimonial-text">{testimonial.text}</p>
                    <h4 className="testimonial-author">{testimonial.author}</h4>
                </div>
            ))}
            <button className="slider-button prev" onClick={prevSlide}>&#10094;</button>
            <button className="slider-button next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default TestimonialsSlider;
