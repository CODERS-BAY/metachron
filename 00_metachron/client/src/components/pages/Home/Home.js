import React from "react";

import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Footer from "../../Footer/Footer";

function Home() {
    return (
        <div className="container">
            <HomeSection />
            <AboutSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default Home;
