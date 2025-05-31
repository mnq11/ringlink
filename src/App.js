// src/App.js
import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    Navbar,
    Header,
    Services,
    Contact,
    Faq,
    Footer,
} from "./components";
import SEO from "./components/SEO/SEO";
import StructuredData from "./components/SEO/StructuredData";

function App() {
    // Initialize AOS once for the entire app
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // Animation happens only once
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <>
            <SEO />
            <StructuredData />
            <header className="header-bg">
                <Navbar />
                <Header />
            </header>
            <Services data-aos="fade-up" />
            <Contact />
            <Faq />
            <Footer />
        </>
    );
}

export default App;
