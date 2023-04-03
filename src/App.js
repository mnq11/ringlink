// src/App.js
import "./App.css";
import {
    Navbar,
    Header,
    Services,
    Team,
    Contact,
    Faq,
    Footer,
} from "./components";

function App() {
    return (
        <>
            <header className="header-bg">
                <Navbar />
                <Header />
            </header>
            <Services data-aos="fade-up" />
            <Team />
            <Contact />
            <Faq />
            <Footer />
        </>
    );
}

export default App;
