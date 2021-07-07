import React from "react";
import { NavHashLink } from "react-router-hash-link";
// import Floating from "../sections/partials/Floating";

function AboutSection() {
    return (
        <div className="container about__section" id="about"
            style={{
                // backgroundImage: 'url("/images/light-bg.jpg")',
                // backgroundRepeat: 'no-repeat',
                // backgroundSize: 'cover',
                // backgroundPosition: 'center'
            }}
        >

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="wrapper__content__about">
                {/*<Floating />*/}
                <div className="heading__about">
                    <h2>
                        I'm&nbsp;
                        <span className="accent">
                            metachron.
                        </span>
                    </h2>
                    <h2>
                        <span className="accent">
                            What's&nbsp;
                        </span>
                         about organisation<span className="accent">?</span>
                    </h2>
                </div>
                <div className="txt__about">
                    <p>
                        A system which aims to handle the course organization
                        and all the participants of the CODERS.BAY.
                        All the data that i use is stored in a database. 
                    </p>
                    <p>    
                        The communication with my subsystem is stateless with REST.
                        The data sent and consumed use the common known JSON format.
                    </p>
                </div>
            </div>

            <div className="container__snippet">
                <NavHashLink to="/#contact">
                    <span className="container__snippet__txt">Get in Touch!</span>
                </NavHashLink>
            </div>
        </div>
    );
}

export default AboutSection;