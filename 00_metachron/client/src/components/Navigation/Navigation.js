import React from "react";

import Overlay from "../Navigation/Overlay";

function Navigation() {

    function handleClickBurger() {
        const navButton = document.querySelector(".nav__btn");
        const navOverlay = document.querySelector(".nav__overlay");
        navButton.classList.toggle("open");
        navOverlay.classList.toggle("fade");
        document.body.style.overflow === "auto" ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    }
    return (
        <div>
            <nav>
                <div className="nav__btn" onClick={handleClickBurger}>
                    <div className="nav__btn__burger"></div>
                </div>
            </nav>
            <Overlay />
        </div>

    );
}

export default Navigation;
