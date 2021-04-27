import React from "react";

import { NavHashLink } from "react-router-hash-link";
import Typewriter from "typewriter-effect";

function HomeSection() {
    return (
        <div className="container home__section" id="home">
            <div className="wrapper__typewriter">
                <Typewriter
                    options={{
                        autostart: true,
                        loop: false
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString("Hurry up<span class='accent'>!</span>");
                        typewriter.pauseFor(2000);
                        typewriter.deleteAll();
                        typewriter.typeString("Lost time<br />is never<br />found<br />again<span class='accent'>.</span>");
                        typewriter.pauseFor(3500);
                        typewriter.start();
                    }}
                />
            </div>
            <div className="container__snippet">
                <NavHashLink to="/#about">
                    <span className="container__snippet__txt">Today?</span>
                </NavHashLink>
            </div>
        </div>
    );
}

export default HomeSection;


// typewriter.typeString("<br />Time is<br />running<br /><span class='accent'>...</span>");

// Lost times are never found again.HomeSection
// Time is running... 