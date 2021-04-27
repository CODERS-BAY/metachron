import React from "react";
import { NavHashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

function ContactSection() {
    return (
        <div className="container contact__section" id="contact">
            <div className="wrapper__content__contact">
                <div className="heading__contact">
                    <h2>
                        We're&nbsp; 
                        <span className="accent">
                            here
                        </span>
                        <br />
                        <span className="accent">
                            for you.
                        </span>
                    </h2>
                    <h2>
                        say hi
                        <span className="accent">
                            !
                        </span>
                    </h2>
                </div>
                <div className="txt__contact">
                    <p>
                        For any support or questions,
                        please do not hesitate to contact us
                        directly at 
                        <br />
                        <span className="accent">ToNoWhere</span>
                    <br />
                        or directly with one of the owners.
                    </p>
                    <div className="txt__contact__link">
                        <a href="https://github.com/Philthy-Phil" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:phil.ziegelbauer@gmx.at?subject=sayhi@metachron">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/philipp-z-7ab92a182/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="container__snippet">
                    <NavHashLink to="/#home">
                        <span className="container__snippet__txt">Back to Top.</span>
                    </NavHashLink>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;