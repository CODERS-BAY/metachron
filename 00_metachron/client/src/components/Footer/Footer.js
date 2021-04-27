import React from "react";
import { NavHashLink } from "react-router-hash-link";

function Footer() {
    return (
        <footer>

            <div className="footer__logo__block">
                <div className="footer__logo">metachron.</div>
                <div className="footer__logo__claim">take your time.</div>
            </div>
            <div className="footer__sub__menu">
                <ul>
                    <NavHashLink to="/#home">
                        <li>Home</li>
                    </NavHashLink>
                    <NavHashLink to="/#about">
                        <li>About</li>
                    </NavHashLink>
                    <NavHashLink to="/#contact">
                        <li>Contact</li>
                    </NavHashLink>
                    <NavHashLink to="/login">
                        <li>Login</li>
                    </NavHashLink>
                </ul>
            </div>
            <div className="footer__legal">
                © 2021 Phil Ziegelbauer
                <br />
                in cooperation with © Coders.Bay
            </div>
        </footer>
    );
}

export default Footer;