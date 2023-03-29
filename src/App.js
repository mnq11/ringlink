import "./App.css";
import {
    Navbar,
    Header,
    Serverss,
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
            <Serverss data-aos="fade-up" />
            <Team />
            <Contact />
            <Faq />
            <Footer />
        </>
    );
}

export default App;
