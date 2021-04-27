import React from "react";
import MenuItems from "./MenuItems";
// import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function Overlay() {

    function handleClickLink() {
        const navButton = document.querySelector(".nav__btn");
        const navOverlay = document.querySelector(".nav__overlay");
        navButton.classList.toggle("open");
        navOverlay.classList.toggle("fade");
        document.body.style.overflow = "auto";
    }

    function handleClickOverlay() {
        const navButton = document.querySelector(".nav__btn");
        const navOverlay = document.querySelector(".nav__overlay");
        navOverlay.classList.remove("fade");
        navButton.classList.remove("open");
        document.body.style.overflow = "auto";
    }

    const MenuItemComponents = MenuItems.map((MenuItem) => {
        return (
                <NavHashLink 
                    key = {MenuItem.id}
                    className={MenuItem.className}
                    activeClassName={MenuItem.activeClassName}
                    to={MenuItem.to}
                    onClick={handleClickLink}
                >
                    {MenuItem.name}
                </NavHashLink>
            );
    });

    return (
        <div className="nav__overlay" onClick={handleClickOverlay}>
            <div className="nav__items">
                <ul>
                    {MenuItemComponents}
                </ul>
            </div>
        </div>
    )
}

export default Overlay;